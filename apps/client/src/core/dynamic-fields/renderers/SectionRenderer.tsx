import { useState, type FC } from "react"
import type { FieldConfig } from "../core/FieldConfig"
import { Box, Grid, Typography } from "@mui/material"
import styles from '../core/RendererStyles.module.scss'
import { FieldRenderer } from "./FieldRenderer"

type Section = {
    rows: SectionRow[]
    header: string
}

type SectionRow = {
  subSection: boolean
  header?: string
  fields: FieldConfig[]
}

type SectionRendererProps = {
    section: Section,
    hasError?: boolean
}

const SectionRenderer: FC<SectionRendererProps> = (props: SectionRendererProps) => {

    const [dataValue, setDataValues] = useState<Record<string, string>>(
        props.section.rows.flatMap(row => row.fields).reduce((acc, field) => {
        acc[field.name] = "";
        return acc;
        }, {} as Record<string, string>)
    );
    
    return(
        <Grid className={`${styles.section}`}>
            <Box className={`${styles.errorBox} ${props.hasError ? styles.showError + ' shake' : ''}`}>
                <Box>
                    <Typography variant="h6">{props.section.header}</Typography>
                </Box>
                {
                    props.section.rows.map((row, rowIndex) => {
                        return(
                            <Grid container className={`${styles.row}`} key={rowIndex}>
                                {
                                    <>
                                        {row.subSection && 
                                            <Grid size={12}>
                                                <Typography variant="subtitle1">{row.header}</Typography>
                                            </Grid>
                                        }
                                        {Array.isArray(row.fields) && row.fields.map((field, fieldIndex) => {
                                            if (!field.type) return null;
                                        field.errorText = "test"
                                            return (
                                                <Grid size={field.col} key={fieldIndex} className={`${styles.col}`}>                                                    
                                                    <FieldRenderer config={field}/>
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
        </Grid>
    )
}

export default SectionRenderer;