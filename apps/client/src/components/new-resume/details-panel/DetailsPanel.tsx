import { useState, type ChangeEvent, type FC } from "react";
import styles from './DetailsPanel.module.scss';
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { RESUME_SECTIONS } from "../../../core/fields/ResumeSection";
import { getDyanamicField } from "../../../core/fields/DynamicField";
import SkillsSection from "./skills-section/SkillsSection";
import { useNavigate } from "react-router";
import type { TemplateData } from "../../../core/template-data/TemplateData";
import EducationSection from "./education-section/EducationSection";
import SummarySection from "./summary-section/SummarySection";
import ProfessionalExperienceSection from "./professional-experience-section/ProfessionalExperienceSection";
import ProjectsSection from "./projects-section/ProjectsSection";

const DetailsPanel: FC = () => {    
    const [resumeData, setResumeData] = useState<Record<string, string>>({});
    const [skills, setSkills] = useState<string[]>([]);

    const navigate = useNavigate();

    const updateField = (evt: React.ChangeEvent<Element>, fieldID: string) => {
    const value = (evt.target as HTMLInputElement).value;
    setResumeData((data) => ({ ...data, [fieldID]: value }));
    };

    const getDataValue = (fieldId: string): string => {
        return resumeData[fieldId] || '';
    }

    const previewResume = () => {
        navigate('/template1', {state: compileResumeData()});
    }

    const compileResumeData = () => {
        let templateData: TemplateData = {
            fullName: resumeData['firstname'] + ' ' + resumeData['lastname'],
            jobTitle: getDataValue('jobtitle'),
            contactInfo: {
                location: getDataValue('city') + ' ' + getDataValue('province') + ' ' + getDataValue('country') + ' - ' + getDataValue('postalcode'),
                email: getDataValue('email'),
                phone: '+' + getDataValue('countrycode') + ' (' + getDataValue('areacode') + ') ' + getDataValue('number'),
                linkedin: getDataValue('linkedin'),
                github: getDataValue('github'),
                website: getDataValue('website-portfolio')
            },
            skills: skills
        }

        return templateData;
    }

    const updateSkills = (newSkills: string[]) => {
        setSkills(prevSkills => [...new Set([...prevSkills, ...newSkills])]);     
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
                                                                    onChange={(e: ChangeEvent<Element>) => updateField(e, field.name)}
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

            <SkillsSection callback={updateSkills} />

            <EducationSection />

            <SummarySection />

            <ProfessionalExperienceSection />

            <ProjectsSection />

            <footer>
                <Button sx={{marginRight: '1rem'}}>Save</Button>
                <Button variant="contained" color="primary" onClick={previewResume}>Preview</Button>
            </footer>
        </Grid>
    );
};

export default DetailsPanel;


