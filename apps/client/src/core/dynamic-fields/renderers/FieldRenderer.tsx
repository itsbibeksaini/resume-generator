import { useState } from "react"
import type { FieldConfig } from "../core/FieldConfig"
import { FieldFactoryImpl } from "../factories/FieldFactory"

type FieldRendererProps = {
    config: FieldConfig,
    value?: string
}

export const FieldRenderer = ({config, value}: FieldRendererProps) => {
    const fieldFactory = FieldFactoryImpl
    const [dataValue, setDataValue] = useState<string>(value || "") 

    return fieldFactory.createField(config);    
}