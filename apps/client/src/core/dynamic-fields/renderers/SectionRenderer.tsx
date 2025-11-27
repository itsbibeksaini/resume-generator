import { forwardRef, useImperativeHandle, useState, type FC } from "react"
import type { FieldConfig } from "../core/FieldConfig"
import { Box, Divider, Grid, Typography } from "@mui/material"
import styles from '../core/RendererStyles.module.scss'
import { FieldRenderer } from "./FieldRenderer"
import z from "zod"

export type Section = {
    rows: SectionRow[]
    header: string
}

type SectionRow = {
    subSection: boolean
    header?: string
    fields: FieldConfig[]
}

export type SectionRendererHandle = {
    validate: () => boolean
}

type SectionRendererProps = {
    section: Section,
    hasError?: boolean
    addDivider?: boolean
}

const SectionRenderer = forwardRef<SectionRendererHandle, SectionRendererProps>((props: SectionRendererProps, ref) => {

    const [dataValue, setDataValues] = useState<Record<string, string>>(
        props.section.rows.flatMap(row => row.fields).reduce((acc, field) => {
            acc[field.name] = "";
            return acc;
        }, {} as Record<string, string>)
    );

    const [errors, setErrors] = useState<Record<string, string>>({});

    const schema = z.object(
        props.section.rows.flatMap(row => row.fields).reduce((acc, field) => {
            if (field.validations) {
                acc[field.name] = field.validations;
            }
            return acc;
        }, {} as Record<string, z.ZodType<any>>)
    );

    const updateDataValue = (name: string, value: string) => {
        setDataValues({
            ...dataValue,
            [name]: value
        });
    }

    const validateSection = (): boolean => {
        let result = schema.safeParse(dataValue);
        if (!result.success) {
            const errors: Record<string, string> = {};

            result.error.issues.forEach(issue => {
                const field = issue.path[0] as string;
                errors[field] = issue.message;
            });

            setErrors(errors);
            return false;
        }
        return true
    }

    useImperativeHandle(ref, () => ({
        validate: validateSection
    }))

    return (
        <Grid className={`${styles.section}`}>
            <Box className={`${styles.errorBox} ${props.hasError ? styles.showError + ' shake' : ''}`}>
                <Box>
                    <Typography variant="h6">{props.section.header}</Typography>
                </Box>
                {
                    props.section.rows.map((row, rowIndex) => {
                        return (
                            <Grid container className={`${styles.row}`} key={rowIndex}>
                                {
                                    <>
                                        {row.subSection &&
                                            <Grid size={12}>
                                                <Typography variant="subtitle1">{row.header}</Typography>
                                            </Grid>
                                        }
                                        {Array.isArray(row.fields) && row.fields.map((field, fieldIndex) => {
                                            if (!field.type) return null
                                            return (
                                                <Grid size={field.col} key={fieldIndex} className={`${styles.col}`}>
                                                    <FieldRenderer config={field} updateSection={updateDataValue} sectionErrorText={errors[field.name as keyof SectionRendererProps]} />
                                                </Grid>
                                            );
                                        })}
                                    </>
                                }
                            </Grid>
                        )
                    })
                }
            </Box>
            {props.addDivider && (
                <Box sx={{ padding: '10px', marginTop: '1rem' }}>
                    <Divider />
                </Box>
            )}
        </Grid>
    )
})

export default SectionRenderer;