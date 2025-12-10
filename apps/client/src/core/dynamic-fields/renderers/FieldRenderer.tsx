import { useEffect, useState, type FocusEvent, type ChangeEvent, type KeyboardEvent } from "react"
import type { FieldConfig, FieldEvents } from "../core/FieldConfig"
import { FieldFactoryImpl } from "../factories/FieldFactory"
import type { Dayjs } from "dayjs"
import dayjs from "dayjs"

type FieldRendererProps = {
    config: FieldConfig
    value?: string
    sectionErrorText?: string
    updateSection: (name: string, value: string) => void
}

export const FieldRenderer = ({ config, value, sectionErrorText, updateSection }: FieldRendererProps) => {
    const fieldFactory = FieldFactoryImpl
    const [dataValue, setDataValue] = useState<string>(value || "")
    const [errorText, setErrorText] = useState<string>(sectionErrorText || "")

    useEffect(() => {
        setErrorText(sectionErrorText || "");
    }, [sectionErrorText]);

    const validateField = (value: string): boolean => {
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
        debugger
        let value = "";
        // if (dayjs.isDayjs(evt)) {
        //     value = evt.format("MM/YYYY");
        // } else if (evt && "target" in evt && evt as FocusEvent) {
        //     value = (evt.target as HTMLInputElement).value;
        // } else if (evt && "key" in evt && (evt as KeyboardEvent).key === "Enter") {
        //     value = ((evt as KeyboardEvent).target as HTMLInputElement).value;
        // }

        let shouldValidate = true;

        if (dayjs.isDayjs(evt)) {
            value = evt.format("MM/YYYY");
        }
        else if (isKeyboard(evt)) {
            if ((evt as KeyboardEvent).key === "Enter") {
                value = (evt.target as HTMLInputElement).value;
            }
            else {
                shouldValidate = false;
            }
        }
        else if ("target" in evt) {
            // fallback for focus/blur/etc events
            value = (evt.target as HTMLInputElement).value;
        }


        if (shouldValidate && validateField(value)) {
            setDataValue(value);
            updateSection(config.name, value);
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
        value: dataValue
    }

    return fieldFactory.createField(updatedConfig);
}