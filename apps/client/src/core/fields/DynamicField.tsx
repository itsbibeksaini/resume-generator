
import { TextField } from "@mui/material";
import { memo, type JSX } from "react";

export type DynamicFieldProps = {
    id:string,
    name:string,
    type?: DynamicFieldType,
    label: string,
    placeholder?:string,
    value: string,
    col: number
    onChange?: (evt:React.ChangeEvent) => void
}

type DynamicFieldType = "text"

const DynamicFields: Record<DynamicFieldType, React.MemoExoticComponent<(props: DynamicFieldProps) => JSX.Element>> = {
    "text": memo((props: DynamicFieldProps) => {
        return <TextField 
                    label={props.label} 
                    fullWidth
                    id={props.id}
                    name={props.name}
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                />
    })
}

export const getDyanamicField = (type: DynamicFieldType) => DynamicFields[type];

