import type { IconProp } from "@fortawesome/fontawesome-svg-core"
import type { Dayjs } from "dayjs"

type DynamicFieldType = "text" | "date-picker"

export type FieldConfig = {
    id:string,
    name:string,
    type?: DynamicFieldType,
    label: string,
    placeholder?:string,
    col: number,
    helperText?: string,
    required:boolean,
    value?: string,    
    errorText?: string,
    icon?:IconProp,
    onChange?: ((evt: React.ChangeEvent) => void) |
        ((value: Dayjs) => void),
    onBlur?: (evt: React.FocusEvent) => void,
    onKeyDown?: (evt: React.KeyboardEvent) => void
}