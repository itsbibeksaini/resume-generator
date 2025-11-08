import type { FC } from "react";
import type { SectionConfig } from "../SectionConfig";
import { Box, Divider, Grid, Typography } from "@mui/material";
import styles from './SectionRenderer.module.scss'
import { FieldFactory } from "../../fields/core/FieldFactory";

type SectionRendererProps = {
    section:  SectionConfig
}

const SectionRenderer: FC<SectionRendererProps> = ({section}) => {
    return(
        <Grid className={`${styles.section}`}>
            <Box>
                <Typography variant="h6">{section.header}</Typography>
            </Box>
            {
                section.rows.map((row, rowIndex) => {
                    return (
                        <Grid container className={`${styles.row}`} key={rowIndex}>
                            {row.subSection && 
                                <Grid size={12}>
                                    <Typography variant="subtitle1">{row.header}</Typography>
                                </Grid>
                            }

                            {
                                row.fields.map((field, fieldIndex) => {
                                    const Field = FieldFactory.createFields(field).render()
                                    return(
                                        <Grid size={field.col} key={fieldIndex} className={`${styles.col}`}>
                                            <Field/>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    )
                })
            }
            <Box sx={{padding:'10px', marginTop:'1rem'}}>
                <Divider/>
            </Box>
        </Grid>
    )
}

export default SectionRenderer