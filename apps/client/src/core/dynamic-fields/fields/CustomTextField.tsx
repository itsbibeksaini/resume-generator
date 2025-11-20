import { Box, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import type { DynamicField } from "../core/DynamicField";
import type { FieldConfig } from "../core/FieldConfig";
import styles from '../core/FieldStyles.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const CustomTextField: DynamicField = {
    create: (config: FieldConfig) => ({
        render: () => {            
            const showError = Boolean(config.errorText && config.errorText.trim().length > 0);
            return (
                <Box className={`${styles.fieldWrapper } ${showError ? styles.showError + ' shake': ''}`}>
                    <TextField 
                        label={config.label} 
                        fullWidth
                        id={config.id}
                        name={config.name}
                        // value={config.value}
                        placeholder={config.placeholder}
                        // onChange={config.onChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
                        // onBlur={config.onBlur}
                        helperText = {config.helperText}
                        // onKeyDown={config.onKeyDown}
                        required={config.required}
                        error={showError}                        
                        className={`${styles.field}`}
                        slotProps={{
                            input: {                            
                                ...
                                (
                                    config.icon ? {
                                     startAdornment: (
                                            <InputAdornment position='start'>
                                                <FontAwesomeIcon icon={config.icon} style={{color: showError ? "#212121" : ""}} />
                                            </InputAdornment>
                                        )
                                    } : {}                                    
                                ),
                                sx: {
                                    color : showError ? "#212121" : ""
                                },
                                title: config.placeholder                                
                            }
                        }}                        
                     />
                     <Grid container sx={{display: showError ? 'flex': 'none', marginTop:'0.15rem'}}>
                        <Grid size='auto' sx={{paddingTop:'0.2rem'}}>
                            <FontAwesomeIcon icon={faCircleExclamation} className={`${styles.errorIcon}`} />                    
                        </Grid>
                        <Grid size='grow'>
                            <Typography variant="caption" color="error" sx={{ display:'inline-block'}}>{config.errorText}</Typography>
                        </Grid>
                    </Grid>
                </Box>
            )
        }
    })
}

export default CustomTextField;