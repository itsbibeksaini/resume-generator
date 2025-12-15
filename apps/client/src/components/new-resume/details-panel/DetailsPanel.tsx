import { useState, type FocusEvent, type FC, useRef } from "react";
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
import { FieldRenderer } from "../../../core/dynamic-fields/renderers/FieldRenderer";
import SectionRenderer, { type SectionRendererHandle } from "../../../core/dynamic-fields/renderers/SectionRenderer";
import { EDUCATION_SECTIONS } from "./education-section/data/EducationFields";
import { PERSONAL_DETAILS } from "../../../core/dynamic-fields/sections/personal-details";
import { SOCIAL_MEDIA_DETAILS } from "../../../core/dynamic-fields/sections/social-media-details";

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
        hasProfessionalExperienceError: false,
        hasProjectsError: false,
        hasAwardsError: false
    })

    const navigate = useNavigate();
    const childRef = useRef<SectionRendererHandle[]>([]);

    const updateField = (evt: FocusEvent<Element>, fieldID: string) => {
        const value = (evt.target as HTMLInputElement).value;
        validateField(fieldID, value)
        setResumeData((data) => ({ ...data, [fieldID]: value }));
    };

    const getDataValue = (fieldId: string): string => {
        return resumeData[fieldId] || '';
    }

    const previewResume = () => {
        childRef.current?.map((ref) => ref.validate());
        if (validatePage())
            return

        if (selectedTemplate)
            navigate(selectedTemplate?.route, { state: compileResumeData() });
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

    const updateProfessionalExperienceData = (newData: ProfessionalExperienceInfo[]) => {
        setProfessionalExperienceData(newData);
        setSectionErrors(prev => ({
            ...prev,
            hasProfessionalExperienceError: false,
        }));
    }

    const updateProjectsData = (newData: ProjectInfo[]) => {
        setProjects(newData);
        setSectionErrors(prev => ({
            ...prev,
            hasProjectsError: false,
        }));
    }

    const updateAwardsData = (newData: AwardsAndCertificationsInfo[]) => {
        setAwards(newData);
    }

    const validateField = (name: string, value: string) => {
        let fieldSchema = ResumeSectionInfoSchema.shape[name as keyof ResumeSectionInfo]
        if (!fieldSchema) return

        let result = fieldSchema.safeParse(value)

        setErrors((prev) => ({
            ...prev,
            [name]: result.success ? undefined : result.error.issues[0].message,
        }));
    }

    const validatePage = (): boolean => {
        // validate skills

        let pageHasErrors = false
        if (skills.length == 0) {
            setSectionErrors(prev => ({
                ...prev,
                hasSkillsError: true,
            }));
            pageHasErrors = true
        }

        // validation education

        if (educationData.length == 0) {
            setSectionErrors(prev => ({
                ...prev,
                hasEducationError: true,
            }));
            pageHasErrors = pageHasErrors && true
        }

        // validate summary

        if (summaryData.length == 0) {
            setSectionErrors(prev => ({
                ...prev,
                hasSummaryError: true,
            }));
            pageHasErrors = pageHasErrors && true
        }

        // validate professional experience

        if (professionalExperienceData.length == 0) {
            setSectionErrors(prev => ({
                ...prev,
                hasProfessionalExperienceError: true,
            }));
            pageHasErrors = pageHasErrors && true
        }

        // validate projects

        if (projects.length == 0) {
            setSectionErrors(prev => ({
                ...prev,
                hasProjectsError: true,
            }));
            pageHasErrors = pageHasErrors && true
        }

        // validate awards

        if (awards.length == 0) {
            setSectionErrors(prev => ({
                ...prev,
                hasAwardsError: true,
            }));
            pageHasErrors = pageHasErrors && true
        }

        return pageHasErrors
    }

    return (
        <Grid className={`${styles.detailsPanel}`} size='grow'>
            <header>
                <Typography variant="h5">Resume details</Typography>
            </header>

            <Box sx={{ padding: '0 30px', marginTop: '20px' }}>
                <SectionRenderer ref={(el) => {
                    childRef.current[0] = el!
                }} section={PERSONAL_DETAILS} hasError={false} addDivider />

                <SectionRenderer ref={(el) => {
                    childRef.current[1] = el!
                }} section={SOCIAL_MEDIA_DETAILS} hasError={false} addDivider />
            </Box>




            <SkillsSection callback={updateSkills} hasError={sectionErrors.hasSkillsError} />

            <EducationSection callback={updateEducationalData} hasError={sectionErrors.hasEducationError} />

            <SummarySection callback={updateSummaryData} hasError={sectionErrors.hasSummaryError} />

            <ProfessionalExperienceSection callback={updateProfessionalExperienceData} hasError={sectionErrors.hasProfessionalExperienceError} />

            <ProjectsSection callback={updateProjectsData} hasError={sectionErrors.hasProjectsError} />

            <AwardsSection callback={updateAwardsData} />

            <footer>
                <Button sx={{ marginRight: '1rem' }}>Save</Button>
                <Button variant="contained" color="primary" onClick={previewResume}>Preview</Button>
            </footer>
        </Grid>
    );
};

export default DetailsPanel;


