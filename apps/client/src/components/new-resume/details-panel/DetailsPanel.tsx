import { useState, type FC } from "react";
import styles from './DetailsPanel.module.scss';
import { Box, Grid, Typography } from "@mui/material";
import { RESUME_SECTIONS } from "../../../core/fields/ResumeSection";
import { getDyanamicField } from "../../../core/fields/DynamicField";

const DetailsPanel: FC = () => {
    const [resumeSections, setResumeSections] = useState(RESUME_SECTIONS)

    const updateField = (evt:React.ChangeEvent, fieldID:string) => {
        
        setResumeSections(prevSection => 
            prevSection.map(section => {
                const updatedRow = section.rows.map(row => 
                    row.map(field => 
                        field.id === fieldID ? {...field, value: (evt.target as HTMLInputElement).value} : field
                    )
                )

                return {
                    ...section,
                    rows: updatedRow
                }
            })
        )
    }

    return (
        <Grid className={`${styles.detailsPanel}`} size='grow'>
            <header>
                <Typography variant="h5">Resume details</Typography>
            </header>            

            {
                resumeSections.map((section) => {
                    return(
                        <Grid className={`${styles.section}`}>
                            <Box>
                                <Typography variant="h6">{section.header}</Typography>
                            </Box>

                            {
                                section.rows.map((row, rowIndex) => {
                                    return(
                                        <Grid container className={`${styles.row}`} gap={1} key={rowIndex}>
                                            {
                                                row.map((field, fieldIndex) => {
                                                    if (!field.type) return null;
                                                    const FieldComponent = getDyanamicField(field.type);
                                                    return (
                                                        <Grid size={field.col} key={fieldIndex}>
                                                            <FieldComponent 
                                                                label={field.label} 
                                                                id={field.id} 
                                                                name={field.name} 
                                                                value={field.value} 
                                                                col={0}
                                                                onChange={(e) => updateField(e, field.id)}
                                                            />
                                                        </Grid>
                                                    );
                                                })
                                            }
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    )
                })
            }
        </Grid>
    );
};

export default DetailsPanel;
