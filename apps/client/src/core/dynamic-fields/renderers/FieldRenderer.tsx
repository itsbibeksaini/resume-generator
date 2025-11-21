import { useState, type FocusEvent } from "react"
import type { FieldConfig, FieldEvents } from "../core/FieldConfig"
import { FieldFactoryImpl } from "../factories/FieldFactory"

type FieldRendererProps = {
    config: FieldConfig,
    value?: string
}

export const FieldRenderer = ({config, value}: FieldRendererProps) => {
    const fieldFactory = FieldFactoryImpl
    const [dataValue, setDataValue] = useState<string>(value || "")
    const [errorText, setErrorText] = useState<string>("")

    const validateField = (value: string):boolean => {
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

    const updatedConfig: FieldConfig = {
        ...config,
        events: config.events?.map(event => {
            if(event.type === 'blur'){
                return{
                    ...event,
                    handler: (evt: FocusEvent<Element>) => {                                    
                        const target = evt.target as HTMLInputElement;                        
                        if(validateField(target.value)){
                            console.log("Valid value:", target.value);
                            setDataValue(target.value);
                        }                                 
                    }                    
                }
            }
            return event
        }),
        errorText: errorText
    }

    return fieldFactory.createField(updatedConfig);    
}