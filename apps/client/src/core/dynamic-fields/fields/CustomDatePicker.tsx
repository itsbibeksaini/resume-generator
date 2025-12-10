import { Box, Grid, InputAdornment, Typography } from "@mui/material";
import type { DynamicField } from "../core/DynamicField";
import type { FieldConfig } from "../core/FieldConfig";
import styles from './FieldStyles.module.scss'
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const CustomDatePicker: DynamicField = {
    create: (config: FieldConfig) => {
        return {
            render: () => {
                const showError = Boolean(config.errorText && config.errorText.trim().length > 0);
                return (
                    <Box className={`${styles.fieldWrapper} ${showError ? styles.showError + ' shake' : ''}`}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                sx={{ width: '100%' }}
                                views={["year", "month"]}
                                format="MM/YYYY"
                                label={config.label}
                                name={config.name}
                                {
                                ...
                                (config.events?.reduce((acc, event) => {
                                    if (event.type === 'blur' && event.handler)
                                        acc.onBlur = event.handler;
                                    if (event.type === 'change' && event.handler)
                                        acc.onChange = event.handler;
                                    return acc;
                                }, {} as Record<string, (evt: React.FocusEvent) => void>) || {})
                                }
                                slotProps={{
                                    openPickerIcon: {
                                        sx: {
                                            color: showError ? "#212121" : ""
                                        }
                                    },
                                    textField: {
                                        id: config.id,
                                        required: config.required,
                                        helperText: config.helperText,
                                        error: showError,
                                        sx: {
                                            zIndex: '1',
                                            // Stop browser autofill coloration
                                            '& input:-webkit-autofill': {
                                                WebkitBoxShadow: '0 0 0 1000px white inset !important',
                                                WebkitTextFillColor: '#000 !important',
                                            },
                                            '& input:-webkit-autofill:focus': {
                                                WebkitBoxShadow: '0 0 0 1000px white inset !important',
                                                WebkitTextFillColor: '#000 !important',
                                            },
                                        },
                                        slotProps: {
                                            input: {
                                                ...
                                                (
                                                    config.icon ? {
                                                        startAdornment: (
                                                            <InputAdornment position='start'>
                                                                <FontAwesomeIcon icon={config.icon} style={{ color: showError ? "#212121" : "" }} />
                                                            </InputAdornment>
                                                        )
                                                    } : {}
                                                ),
                                                sx: {
                                                    color: showError ? "#212121" : ""
                                                },
                                                title: config.placeholder
                                            }
                                        }
                                    }

                                }}
                            />
                        </LocalizationProvider>
                        <Grid container className={`${styles.errorTextWrapper} ${showError ? styles.showErrorText : ''}`} gap={0.5}>
                            <Grid size='auto' sx={{ paddingTop: '0.2rem' }}>
                                <FontAwesomeIcon icon={faCircleExclamation} className={`${styles.errorIcon}`} />
                            </Grid>
                            <Grid size='grow' className={`${styles.errorText}`}>
                                <Typography variant="caption" color="error">{config.errorText}</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                )
            }
        }
    }
}

export default CustomDatePicker;
