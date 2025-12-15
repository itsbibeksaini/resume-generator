import type { IconProp } from "@fortawesome/fontawesome-svg-core"
import type { ChangeEvent, FocusEvent, KeyboardEvent, MouseEvent } from "react"
import type z from "zod"

export type FieldType = "text" | "date-picker" | "checkbox"

export type FieldEvents = {
    type: 'blur',
    handler?: (evt: FocusEvent<Element>) => void
} | {
    type: 'change',
    handler?: (evt: ChangeEvent<Element>) => void
} | {
    type: 'key-down',
    handler?: (evt: KeyboardEvent<Element>) => void
} | {
    type: 'click',
    handler?: (evt: MouseEvent<Element>) => void
}

type MultiValueView = 'timeline' | 'tags'

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
    multiValue?: boolean
    multiValueOptions?: {
        placeholder: string
        deleteAction?: (index: number) => void
        view: MultiValueView
    }
}