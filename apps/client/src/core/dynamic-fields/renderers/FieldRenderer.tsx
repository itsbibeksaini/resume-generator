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

    const blurEvent: FieldEvents = {
        type: 'blur',
        handler: (evt: FocusEvent<Element>) => {            
            const target = evt.target as HTMLInputElement;
            setDataValue(target.value);         
            console.log(`Field [${config.name}] blurred with value: ${dataValue}`);
        }
        
    }

    const updatedConfig: FieldConfig = {
        ...config,
        
        events: [
            blurEvent, ...(config.events || [])
        ],
        // value: dataValue
    }

    return fieldFactory.createField(updatedConfig);    
}