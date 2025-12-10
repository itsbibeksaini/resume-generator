import type { IconProp } from "@fortawesome/fontawesome-svg-core"
import type { ChangeEvent, FocusEvent, KeyboardEvent } from "react"
import type z from "zod"

export type FieldType = "text" | "date-picker"

export type FieldEvents = {
    type: 'blur',
    handler?: (evt: FocusEvent<Element>) => void
} | {
    type: 'change',
    handler?: (evt: ChangeEvent<Element>) => void
} | {
    type: 'key-down',
    handler?: (evt: KeyboardEvent<Element>) => void
}

export type FieldConfig = {
    id: string,
    name: string,
    type?: FieldType,
    label: string,
    value?: string | string[],
    placeholder?: string,
    col: number,
    helperText?: string,
    required: boolean,
    errorText?: string,
    icon?: IconProp,
    events?: FieldEvents[]
    validations?: z.ZodType<any>
    isMultiValue?: boolean
    multiValueOptions?: {
        placeholder: string
    }
}