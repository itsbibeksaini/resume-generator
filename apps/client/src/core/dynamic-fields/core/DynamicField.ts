import {type JSX} from 'react'
import type { FieldConfig } from "./FieldConfig"
import type z from 'zod'

export type DynamicField = {
    create: (config: FieldConfig) => ({
        render: () => JSX.Element
        schema?:() => z.ZodType<any>
    })
}