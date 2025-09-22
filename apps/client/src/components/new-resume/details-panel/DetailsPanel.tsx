import { useState, type FC } from "react";
import styles from './DetailsPanel.module.scss';
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { RESUME_SECTIONS } from "../../../core/fields/ResumeSection";
import { getDyanamicField } from "../../../core/fields/DynamicField";
import SkillsSection from "./skills-section/SkillsSection";

const DetailsPanel: FC = () => {    
    const [resumeData, setResumeData] = useState<Record<string, string>>({});

    const updateField = (evt: React.ChangeEvent<Element>, fieldID: string) => {
    const value = (evt.target as HTMLInputElement).value;
    setResumeData((data) => ({ ...data, [fieldID]: value }));
    };

    const getDataValue = (fieldId: string): string => {
        return resumeData[fieldId] || '';
    }

    return (
        <Grid className={`${styles.detailsPanel}`} size='grow'>
            <header>
                <Typography variant="h5">Resume details</Typography>
            </header>            

            {
                RESUME_SECTIONS.map((section) => {
                    return(
                        <Grid className={`${styles.section}`}>
                            <Box>
                                <Typography variant="h6">{section.header}</Typography>
                            </Box>

                            {
                                section.rows.map((row, rowIndex) => {
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
                                                        const FieldComponent = getDyanamicField(field.type);
                                                        return (
                                                            <Grid size={field.col} key={fieldIndex} className={`${styles.col}`}>
                                                                <FieldComponent 
                                                                    label={field.label} 
                                                                    id={field.id} 
                                                                    name={field.name} 
                                                                    col={0}
                                                                    value={getDataValue(field.name)}
                                                                    required={field.required}
                                                                    onChange={(e) => updateField(e, field.name)}
                                                                />
                                                            </Grid>
                                                        );
                                                    })}
                                                </>
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
                })
            }

            <SkillsSection />

            <footer>
                <Button sx={{marginRight: '1rem'}}>Save</Button>
                <Button variant="contained" color="primary">Generate</Button>
            </footer>
        </Grid>
    );
};

export default DetailsPanel;


