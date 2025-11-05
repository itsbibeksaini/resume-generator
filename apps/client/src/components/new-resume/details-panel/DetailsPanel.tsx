import { useState, type FocusEvent, type FC } from "react";
import styles from './DetailsPanel.module.scss';
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { RESUME_SECTIONS, ResumeSectionInfoSchema, type ResumeSectionInfo } from "../../../core/fields/ResumeSection";
import { getDyanamicField } from "../../../core/fields/DynamicField";
import SkillsSection from "./skills-section/SkillsSection";
import { useNavigate } from "react-router";
import { DUMMY_DATA, TemplateDataSchema, type AwardsAndCertificationsInfo, type EducationInfo, type ProfessionalExperienceInfo, type ProjectInfo, type TemplateData } from "../../../core/template-data/TemplateData";
import EducationSection from "./education-section/EducationSection";
import SummarySection from "./summary-section/SummarySection";
import ProfessionalExperienceSection from "./professional-experience-section/ProfessionalExperienceSection";
import ProjectsSection from "./projects-section/ProjectsSection";
import AwardsSection from "./awards-section/AwardsSection";
import type { Template } from "../../../core/template-data/Template";

type DetailsPanelProps = {
    selectedTemplate?: Template;
}

type SectionErrors = {
    hasSkillsError: boolean
    hasEducationError: boolean
    hasSummaryError: boolean
    hasProfessionalExperienceError: boolean,
    hasProjectsError: boolean,
    hasAwardsError: boolean
}

const DetailsPanel: FC<DetailsPanelProps> = ({ selectedTemplate }) => {
    const [resumeData, setResumeData] = useState<Record<string, string>>({});
    const [skills, setSkills] = useState<string[]>([]);
    const [educationData, setEducationalData] = useState<EducationInfo[]>([]);
    const [summaryData, setSummaryData] = useState<string[]>([]);
    const [professionalExperienceData, setProfessionalExperienceData] = useState<ProfessionalExperienceInfo[]>([]);
    const [projects, setProjects] = useState<ProjectInfo[]>([]);
    const [awards, setAwards] = useState<AwardsAndCertificationsInfo[]>([]);
    const [errors, setErrors] = useState<Partial<Record<keyof ResumeSectionInfo, string>>>({});
    const [sectionErrors, setSectionErrors] = useState<SectionErrors>({
        hasSkillsError: false, 
        hasEducationError: false,
        hasSummaryError: false,
        hasProfessionalExperienceError: true,
        hasProjectsError: true,
        hasAwardsError: true
    })

    const navigate = useNavigate();

    const updateField = (evt: FocusEvent<Element>, fieldID: string) => {        
        const value = (evt.target as HTMLInputElement).value;
        validateField(fieldID, value)
        setResumeData((data) => ({ ...data, [fieldID]: value }));
    };

    const getDataValue = (fieldId: string): string => {
        return resumeData[fieldId] || '';
    }

    const previewResume = () => {        
        if(validatePage())
            return
        
        if (selectedTemplate) 
            navigate(selectedTemplate?.route, {state: compileResumeData()});
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

        // const parsedData = TemplateDataSchema.safeParse(templateData);        
        // if (!parsedData.success) {
        //     console.error("Data validation error:", parsedData.error);
        //     return;
        // }

        

        
        return DUMMY_DATA;
    }

    const updateSkills = (newSkills: string[]) => {
        setSkills(newSkills);    
        setSectionErrors(prev => ({
            ...prev,
            hasSkillsError: false,
        })); 
    }

    const updateEducationalData = (newData: EducationInfo[]) => {
        setEducationalData(newData);
        setSectionErrors(prev => ({
            ...prev,
            hasEducationError: false,
        }));
    }

    const updateSummaryData = (newSummary: string[]) => {
        setSummaryData(newSummary)
        setSectionErrors(prev => ({
            ...prev,
            hasSummaryError: false,
        }));
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

    const validateField = (name:string, value:string) => {
        let fieldSchema = ResumeSectionInfoSchema.shape[name as keyof ResumeSectionInfo]
        if(!fieldSchema) return

        let result = fieldSchema.safeParse(value)

        setErrors((prev) => ({
            ...prev,
            [name]: result.success ? undefined : result.error.issues[0].message,
        }));
    }

    const validatePage = (): boolean => {
        // validate skills

        let pageHasErrors = false
        if(skills.length == 0){
            setSectionErrors(prev => ({
                ...prev,
                hasSkillsError: true,
            }));
            pageHasErrors = true
        }

        // validation education

        if(educationData.length == 0){
            setSectionErrors(prev => ({
                ...prev,
                hasEducationError: true,
            }));
            pageHasErrors = pageHasErrors && true
        }

        // validate summary

        if(summaryData.length == 0){
            setSectionErrors(prev => ({
                ...prev,
                hasSummaryError: true,
            }));
            pageHasErrors = pageHasErrors && true
        }

        

        return true
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
                                                                    placeholder={field.placeholder}
                                                                    col={0}                                                                    
                                                                    required={field.required}
                                                                    icon={field.icon}
                                                                    errorText={errors[field.name as keyof ResumeSectionInfo]}                                                            
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

            <SkillsSection callback={updateSkills} hasError={sectionErrors.hasSkillsError} />

            <EducationSection callback={updateEducationalData} hasError={sectionErrors.hasEducationError} />

            <SummarySection callback={updateSummaryData} hasError={sectionErrors.hasSummaryError} />

            <ProfessionalExperienceSection callback={updateProfessionalExperienceData} hasError={sectionErrors.hasProfessionalExperienceError} />

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


