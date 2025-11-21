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

    const validateField = (value: string) => {
        config.validations?.safeParseAsync(value).then(result => {
            if (!result.success) {
                console.error(`Validation errors for field [${config.name}]:`, result.error.issues[0].message);
            }
        })
    }

    const updatedConfig: FieldConfig = {
        ...config,
    
        
        events: config.events?.map(event => {
            if(event.type === 'blur'){
                return{
                    ...event,
                    handler: (evt: FocusEvent<Element>) => {            
                        console.log('Blur event triggered for field:', config.name);
                        const target = evt.target as HTMLInputElement;
                        validateField(target.value);
                        setDataValue(target.value);                                 
                    }                    
                }
            }
            return event
        })
    }

    return fieldFactory.createField(updatedConfig);    
}