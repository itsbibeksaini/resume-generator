import { useState, type FocusEvent, type FC } from "react";
import styles from './DetailsPanel.module.scss';
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { RESUME_SECTIONS } from "../../../core/fields/ResumeSection";
import { getDyanamicField } from "../../../core/fields/DynamicField";
import SkillsSection from "./skills-section/SkillsSection";
import { useNavigate } from "react-router";
import { DUMMY_DATA, type AwardsAndCertificationsInfo, type EducationInfo, type ProfessionalExperienceInfo, type ProjectInfo, type TemplateData } from "../../../core/template-data/TemplateData";
import EducationSection from "./education-section/EducationSection";
import SummarySection from "./summary-section/SummarySection";
import ProfessionalExperienceSection from "./professional-experience-section/ProfessionalExperienceSection";
import ProjectsSection from "./projects-section/ProjectsSection";
import AwardsSection from "./awards-section/AwardsSection";

const DetailsPanel: FC = () => {    
    const [resumeData, setResumeData] = useState<Record<string, string>>({});
    const [skills, setSkills] = useState<string[]>([]);
    const [educationData, setEducationalData] = useState<EducationInfo[]>([]);
    const [summaryData, setSummaryData] = useState<string[]>([]);
    const [professionalExperienceData, setProfessionalExperienceData] = useState<ProfessionalExperienceInfo[]>([]);
    const [projects, setProjects] = useState<ProjectInfo[]>([]);
    const [awards, setAwards] = useState<AwardsAndCertificationsInfo[]>([]);

    const navigate = useNavigate();

    const updateField = (evt: FocusEvent<Element>, fieldID: string) => {        
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
            skills: skills,
            educationInfo: educationData,
            summary: summaryData,
            professionalExperience: professionalExperienceData,
            projects: projects,
            awardsAndCertifications: awards
        }

        return DUMMY_DATA;
    }

    const updateSkills = (newSkills: string[]) => {
        setSkills(prevSkills => [...new Set([...prevSkills, ...newSkills])]);     
    }

    const updateEducationalData = (newData: EducationInfo) => {
        setEducationalData(prevData => [...prevData, newData]);
    }

    const updateSummaryData = (newSummary: string) => {
        setSummaryData(prev => [
            ...prev,
            newSummary
        ])
    }

    const updateProfessionalExperienceData = (newData: ProfessionalExperienceInfo) => {
        setProfessionalExperienceData(prevData => [...prevData, newData]);
    }

    const updateProjectsData = (newData: ProjectInfo) => {
        setProjects(prevData => [...prevData, newData]);
    }

    const updateAwardsData = (newData: AwardsAndCertificationsInfo[]) => {
        setAwards(newData);
    }

    return (
        <Grid className={`${styles.detailsPanel}`} size='grow'>
            <header>
                <Typography variant="h5">Resume details</Typography>
            </header>            

            {
                RESUME_SECTIONS.map((section, index) => {
                    return(
                        <Grid className={`${styles.section}`} key={index}>
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
                                                                    required={field.required}
                                                                    onBlur={(e: FocusEvent<Element>) => updateField(e, field.name)}
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

            <EducationSection callback={updateEducationalData} />

            <SummarySection callback={updateSummaryData} />

            <ProfessionalExperienceSection callback={updateProfessionalExperienceData} />

            <ProjectsSection callback={updateProjectsData} />

            <AwardsSection callback={updateAwardsData} />

            <footer>
                <Button sx={{marginRight: '1rem'}}>Save</Button>
                <Button variant="contained" color="primary" onClick={previewResume}>Preview</Button>
            </footer>
        </Grid>
    );
};

export default DetailsPanel;


