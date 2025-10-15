
import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import type { PickerValue } from "@mui/x-date-pickers/internals";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import type { Dayjs } from "dayjs";
import { memo, type JSX } from "react";

export type DynamicFieldProps = {
    id:string,
    name:string,
    type?: DynamicFieldType,
    label: string,
    placeholder?:string,
    col: number,
    helperText?: string,
    required:boolean,
    value?: string,    
    onChange?: ((evt: React.ChangeEvent) => void) |
     ((value: Dayjs) => void),
    onBlur?: (evt: React.FocusEvent) => void,
    onKeyDown?: (evt: React.KeyboardEvent) => void
}

type DynamicFieldType = "text" | "date-picker"

const DynamicFields: Record<DynamicFieldType, React.MemoExoticComponent<(props: DynamicFieldProps) => JSX.Element>> = {
    "text": memo((props: DynamicFieldProps) => {
        return <TextField 
                    label={props.label} 
                    fullWidth
                    id={props.id}
                    name={props.name}
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={props.onChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
                    onBlur={props.onBlur}
                    helperText = {props.helperText}
                    onKeyDown={props.onKeyDown}
                    required={props.required}
                />
    }),
    "date-picker": memo((props: DynamicFieldProps) => {
        return <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker 
                        sx={{width:'100%'}} 
                        views={["year", "month"]} 
                        format="MM/YYYY" 
                        label={props.label}
                        name={props.name}
                        onChange={props.onChange as (value: PickerValue) => void}                                                                        
                        slotProps={{
                            textField: {
                                id: props.id,
                                required: props.required,
                                helperText: props.helperText,
                                onBlur: props.onBlur,
                            }
                        }}
                    />
               </LocalizationProvider>
    })
}

export const getDyanamicField = (type: DynamicFieldType) => DynamicFields[type];

