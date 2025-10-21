import styles from './DynamicField.module.scss'

import { faCircleExclamation, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Grid, TextField, Typography } from "@mui/material";
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
    errorText?: string,
    onChange?: ((evt: React.ChangeEvent) => void) |
     ((value: Dayjs) => void),
    onBlur?: (evt: React.FocusEvent) => void,
    onKeyDown?: (evt: React.KeyboardEvent) => void
}

type DynamicFieldType = "text" | "date-picker"

const DynamicFields: Record<DynamicFieldType, React.MemoExoticComponent<(props: DynamicFieldProps) => JSX.Element>> = {
    "text": memo((props: DynamicFieldProps) => {        
        const showError = Boolean(props.errorText && props.errorText.trim().length > 0);
        return <Box className={`${styles.fieldWrapper } ${showError ? styles.showError + ' shake': ''}`}>
                    <TextField 
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
                        error={showError}                        
                        sx={{zIndex:'1', backgroundColor:'#fff'}}
                    />
                    <Grid container sx={{display: showError ? 'flex': 'none', marginTop:'0.15rem'}}>
                        <Grid size='auto' sx={{paddingTop:'0.2rem'}}>
                            <FontAwesomeIcon icon={faCircleExclamation} className={`${styles.errorIcon}`} />                    
                        </Grid>
                        <Grid size='grow'>
                            <Typography variant="caption" color="error" sx={{ display:'inline-block'}}>{props.errorText}</Typography>
                        </Grid>
                    </Grid>
                </Box>
    }),
    "date-picker": memo((props: DynamicFieldProps) => {
        const showError = Boolean(props.errorText && props.errorText.trim().length > 0);
        return <Box className={`${styles.fieldWrapper } ${showError ? styles.showError + ' shake': ''}`}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                                error: showError,
                                sx: {zIndex:'1', backgroundColor:'#fff'}
                            }
                        }}
                    />
               </LocalizationProvider>
               <Grid container sx={{display: showError ? 'flex': 'none'}}>
                    <Grid size='auto' sx={{paddingTop:'0.27rem'}}>
                        <FontAwesomeIcon icon={faTriangleExclamation} className={`${styles.errorIcon}`} />                    
                    </Grid>
                    <Grid size='grow'>
                        <Typography variant="caption" color="error" sx={{ display:'inline-block'}}>{props.errorText}</Typography>
                    </Grid>
                </Grid>
        </Box>
        
    })
}

export const getDyanamicField = (type: DynamicFieldType) => DynamicFields[type];

