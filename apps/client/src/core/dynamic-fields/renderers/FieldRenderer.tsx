import { useEffect, useState, type FocusEvent, type ChangeEvent, type KeyboardEvent } from "react"
import type { FieldConfig } from "../core/FieldConfig"
import { FieldFactoryImpl } from "../factories/FieldFactory"
import type { Dayjs } from "dayjs"
import dayjs from "dayjs"

type FieldRendererProps = {
    config: FieldConfig
    value?: string
    sectionErrorText?: string
    updateSection: (name: string, value: string | string[]) => void
}

export const FieldRenderer = ({ config, value, sectionErrorText, updateSection }: FieldRendererProps) => {
    const fieldFactory = FieldFactoryImpl
    const [dataValue, setDataValue] = useState<string | string[]>(
        Array.isArray(value) ? value : value ?? ""
    );
    const [errorText, setErrorText] = useState<string>(sectionErrorText || "")

    useEffect(() => {
        setErrorText(sectionErrorText || "");
    }, [sectionErrorText]);

    const validateField = (value: string | string[]): boolean => {
        // if no validation schema → field is automatically valid
        if (!config.validations) {
            setErrorText("");
            return true;
        }

        const result = config.validations.safeParse(value);

        if (result.success) {
            setErrorText("");
            return true;
        }

        // extract first error safely
        const message = result.error?.issues?.[0]?.message ?? "Invalid value";
        setErrorText(message);

        return false;
    }

    const updateDataValue = (evt: FocusEvent<Element> | ChangeEvent<Element> | KeyboardEvent<Element> | Dayjs) => {

        let rawValue = "";
        let shouldValidate = true;

        // Date-picker field
        if (dayjs.isDayjs(evt)) {
            rawValue = evt.format("MM/YYYY");
        }
        // Keyboard event fielf
        else if (isKeyboard(evt)) {
            let key = (evt as KeyboardEvent).key
            let inputValue = (evt.target as HTMLInputElement).value

            if (key === "Enter") {
                rawValue = inputValue
            }
            else {
                shouldValidate = false // validate only on enter key
            }
        }
        // Focus event field
        else if ("target" in evt) {
            rawValue = (evt.target as HTMLInputElement).value
        }

        // Multi-value field
        if (config.multiValue) {
            if (!shouldValidate || !rawValue.trim()) {
                return
            }

            // Convert state to array.
            let existingValue = Array.isArray(dataValue) ? dataValue : []

            let updatedArray = [""]

            if (config.multiValueOptions?.view === 'tags')
                updatedArray = [...existingValue, ...rawValue.split(',')]
            else
                updatedArray = [...existingValue, rawValue.trim()]

            if (validateField(updatedArray)) {
                setDataValue(updatedArray)
                updateSection(config.name, updatedArray);
                if ("target" in evt) {
                    (evt.target as HTMLInputElement).value = "";
                }
            }

            return
        }

        // Single-value field
        if (shouldValidate && validateField(rawValue)) {
            setDataValue(rawValue)
            updateSection(config.name, rawValue)
        }
    }

    const isKeyboard = (e: unknown): e is KeyboardEvent =>
        typeof e === "object" &&
        e !== null &&
        "key" in e &&
        "target" in e


    const updatedConfig: FieldConfig = {
        ...config,
        events: config.events?.map(event => {
            if (event.type === 'blur' || event.type === 'change' || event.type === 'key-down') {
                return {
                    ...event,
                    handler: updateDataValue
                }
            }
            return event
        }),
        errorText: errorText,
        value: dataValue,
        multiValueOptions: {
            placeholder: config.multiValueOptions?.placeholder ?? "",
            view: config.multiValueOptions?.view!!,
            deleteAction: (index: number) => {
                if (!config.multiValue || !Array.isArray(dataValue)) return;

                const updatedArray = dataValue.filter((_, i) => i !== index);

                setDataValue(updatedArray);
                updateSection(config.name, updatedArray);
            }
        }
    }

    return fieldFactory.createField(updatedConfig);
}