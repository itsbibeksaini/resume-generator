import type { IconProp } from "@fortawesome/fontawesome-svg-core"
import type { Dayjs } from "dayjs"

type DynamicFieldType = "text" | "date-picker"

type ValidationRuleType = 'required' | 'minLength' | 'maxLength' | 'pattern';

export type ValidationRule = {
    type: ValidationRuleType;
    value: any;
    message: string;
}


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
    validations?: ValidationRule[];
    onChange?: ((evt: React.ChangeEvent) => void) |
        ((value: Dayjs) => void),
    onBlur?: (evt: React.FocusEvent) => void,
    onKeyDown?: (evt: React.KeyboardEvent) => void
}