import type { IconProp } from "@fortawesome/fontawesome-svg-core"

export type FieldType = "text" | "date-picker"

export type FieldConfig = {
    id:string,
    name:string,
    type?: FieldType,
    label: string,
    placeholder?:string,
    col: number,
    helperText?: string,
    required:boolean,  
    errorText?: string,
    icon?:IconProp,
    // onChange?: ((evt: React.ChangeEvent) => void) |
    // ((value: Dayjs) => void),
    // onBlur?: (evt: React.FocusEvent) => void,
    // onKeyDown?: (evt: React.KeyboardEvent) => void
}