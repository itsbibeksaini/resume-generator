import { Box, ButtonBase, Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import type { DynamicField } from "../core/DynamicField";
import type { FieldConfig } from "../core/FieldConfig";
import styles from './FieldStyles.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faTrash } from "@fortawesome/free-solid-svg-icons";
import z from "zod";

const CustomTextField: DynamicField = {
    create: (config: FieldConfig) => ({
        render: () => {
            const showError = Boolean(config.errorText && config.errorText.trim().length > 0);
            return (
                <Box className={`${styles.fieldWrapper} ${showError ? styles.showError + ' shake' : ''}`}>
                    <TextField
                        label={config.label}
                        fullWidth
                        id={config.id}
                        name={config.name}
                        placeholder={config.placeholder}
                        helperText={config.helperText}
                        required={config.required}
                        error={showError}
                        className={`${styles.field}`}
                        {
                        ...
                        (config.events?.reduce((acc, event) => {
                            if (event.type === 'blur' && event.handler) {
                                acc.onBlur = event.handler;
                            }
                            if (event.type === 'key-down' && event.handler) {
                                acc.onKeyDown = event.handler
                            }
                            return acc;
                        }, {} as Record<string, any>) || {})
                        }
                        slotProps={{
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
                        }}
                    />
                    <Grid container className={`${styles.errorTextWrapper} ${showError ? styles.showErrorText : ''}`} gap={0.5}>
                        <Grid size='auto' sx={{ paddingTop: '0.2rem' }}>
                            <FontAwesomeIcon icon={faCircleExclamation} className={`${styles.errorIcon}`} />
                        </Grid>
                        <Grid size='grow' className={`${styles.errorText}`}>
                            <Typography variant="caption" color="error">{config.errorText}</Typography>
                        </Grid>
                    </Grid>
                    {
                        config.multiValue && (
                            <Box className={`${styles.multiValue}`}>
                                {
                                    config.value?.length === 0 ? (
                                        <Box className={`${styles.multiValuePlaceholder}`}>
                                            <Typography variant="h6" color={showError ? "error" : ""}>{config.multiValueOptions?.placeholder}</Typography>
                                        </Box>
                                    ) : (
                                        config.multiValueOptions?.view === 'timeline' ? (
                                            <ul className={`${styles.timeline}`}>
                                                {
                                                    Array.isArray(config.value) && config.value.map((item, index) => (
                                                        <li key={index}>
                                                            <Grid container gap={1}>
                                                                <Grid size='grow'>
                                                                    <Typography variant="body2">{item}</Typography>
                                                                </Grid>
                                                                <Grid size={0.60}>
                                                                    <IconButton size="small" color="error" className={`vertical-center ${styles.deleteIcon}`}
                                                                        onClick={() => config.multiValueOptions?.deleteAction?.(index)}>
                                                                        <FontAwesomeIcon icon={faTrash} />
                                                                    </IconButton>
                                                                </Grid>

                                                            </Grid>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        ) : (
                                            <Grid container gap={1}>
                                                {
                                                    Array.isArray(config.value) && config.value.map((item, index) => (
                                                        <Grid key={index} container className={styles.skillChip}>
                                                            <Grid sx={{ padding: '0.5rem' }} size='grow'>
                                                                <Typography>{item}</Typography>
                                                            </Grid>
                                                            <Grid className={styles.skillAction}>
                                                                <ButtonBase className={`${styles.deleteBtn}`}
                                                                    onClick={() => config.multiValueOptions?.deleteAction?.(index)}>
                                                                    <FontAwesomeIcon icon={faTrash} style={{ color: 'red' }} />
                                                                </ButtonBase>
                                                            </Grid>
                                                        </Grid>
                                                    ))
                                                }
                                            </Grid>
                                        )
                                    )
                                }
                            </Box>
                        )
                    }
                </Box >

            )
        },
        schema: () => {
            let s = z.string()
            if (config.validations)
                s.and(config.validations)

            return s
        }
    })
}

export default CustomTextField;