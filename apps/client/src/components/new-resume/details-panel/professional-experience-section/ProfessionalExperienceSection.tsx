import { useState, type ChangeEvent, type FC, type FocusEvent, type KeyboardEvent } from "react";
import styles from './ProfessionalExperienceSection.module.scss'
import { Box, Button, ButtonBase, Divider, Grid, IconButton, TextField, Typography } from "@mui/material";
import CustomDialog from "../../../shared/dialogs/layout/CustomDialog";
import { faAward, faBriefcase, faCertificate, faClipboardList, faTrash } from "@fortawesome/free-solid-svg-icons";
import { PROFESSIONAL_EXPERIENCE_SECTIONS } from "./data/ProfessionalExperienceFields";
import { getDyanamicField } from "../../../../core/fields/DynamicField";
import type { ProfessionalExperienceInfo } from "../../../../core/template-data/TemplateData";
import dayjs, { Dayjs } from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ProfessionalExperienceSectionProps = {
    callback: (professionalExperienceData: ProfessionalExperienceInfo) => void
}

const ProfessionalExperienceSection: FC<ProfessionalExperienceSectionProps> = (props: ProfessionalExperienceSectionProps) => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [fieldData, setFieldData] = useState<Record<string, string>>({});
    const [responsibilities, setResponsibilities] = useState<string[]>([]);
    const [achievements, setAchievements] = useState<string[]>([]);
    const [professionalExperienceData, setprofessionalExperienceData] = useState<ProfessionalExperienceInfo[]>([]);

    const updateField = (evt: ChangeEvent<Element> | FocusEvent<Element> | Dayjs, fieldName: string) => {
            
        let value = "";

        if (dayjs.isDayjs(evt)) {
            value = evt.format("MM/YYYY");
        } else if (evt && "target" in evt) {
            value = (evt.target as HTMLInputElement).value;            
        }

        setFieldData((data) => ({...data,[fieldName]: value}));
        
    }

    const addResponsibility = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            const input = e.target as HTMLInputElement;
            const value = input.value.trim();
            if (value && !responsibilities.includes(value)) {
                setResponsibilities((prev) => [...prev, value]);
                input.value = '';
            }
        }
    }

    const addAchievement = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            const input = e.target as HTMLInputElement;
            const value = input.value.trim();
            if (value && !achievements.includes(value)) {
                setAchievements((prev) => [...prev, value]);
                input.value = '';
            }
        }
    }

    const getDataValue = (fieldName: string): string => {
        return fieldData[fieldName] || ''
    }

    const dialogClose = () => {
        let experienceData: ProfessionalExperienceInfo = {
                                                jobPosition: getDataValue('jobPosition'),
                                                companyName: getDataValue('companyName'),
                                                startDate: getDataValue('startDate'),
                                                endDate: getDataValue('endDate'),
                                                city: getDataValue('city'),
                                                state: getDataValue('state'),
                                                country: fieldData['country'],
                                                responsibilities: responsibilities,
                                                achievements: achievements
                                            }

        setprofessionalExperienceData([...professionalExperienceData, experienceData])
        props.callback(experienceData)
        setDialogOpen(false)        
        resetDialog()
    }

    const resetDialog = () => {
        setResponsibilities([]);
        setAchievements([]);
        setFieldData({});
    }

    return (
        <Grid className={`${styles.section}`}>
            <Box sx={{marginBottom:'1rem'}}>
                <Typography variant="h6">Professional Experience</Typography>
            </Box>

            {
                professionalExperienceData.length === 0 ? 
                <Grid container className={`${styles.row}`}>
                    <Grid sx={{textAlign:'center'}} size={12}>
                        <Typography variant="h6" color="textSecondary">No professional experience added</Typography>
                    </Grid>
                </Grid> :
                <Grid className={`${styles.timeline}`} sx={{marginLeft:'1rem'}}>
                    {
                        professionalExperienceData.map((item, index) => (
                            <Box key={index} sx={{marginBottom:'1rem'}} className={`${styles.timelineEvent}`}>
                                <Grid className={`${styles.eventHeader}`} container>
                                    <Grid size='auto'>
                                        <Typography variant="h6" sx={{textTransform: 'uppercase'}}>{item.jobPosition}</Typography>
                                        <Typography variant="subtitle1">{item.companyName}</Typography>
                                    </Grid>
                                    <Grid size='grow'>
                                        <Box className={`vertical-center`} sx={{right:0}}>
                                            <Typography variant="body2" color="textSecondary">{item.startDate} - {item.endDate}</Typography>
                                            <Typography variant="body2" color="textSecondary">{item.city}, {item.state} {item.country}</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                {
                                    item.responsibilities.length === 0 ? null :
                                    <Box sx={{marginTop:'0.5rem',position:'relative'}}>
                                        <Box sx={{position:'relative', height:'30px'}}>
                                            <Box className={`${styles.iconBox}`}>
                                                <FontAwesomeIcon icon={faClipboardList} className="centeralize" style={{fontSize:'1.2rem'}} />                                            
                                            </Box>
                                            <Typography variant="subtitle1">Role & Responsibilities</Typography>
                                        </Box>
                                        
                                        <ul >
                                            {
                                                item.responsibilities.map((resp, idx) => (
                                                    <li key={idx}>
                                                        <Typography variant="body2" color="textSecondary">{resp}</Typography>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </Box>
                                }
                                {

                                    item.achievements.length === 0 ? null :
                                    <Box sx={{marginTop:'0.5rem'}}>
                                        <Box sx={{position:'relative', height:'30px'}}>
                                            <Box className={`${styles.iconBox}`} style={{fontSize:'1.2rem'}}>
                                                <FontAwesomeIcon icon={faAward} className="centeralize" />                                            
                                            </Box>
                                            <Typography variant="subtitle1">Achievements</Typography>
                                        </Box>
                                        <ul >
                                            {
                                                item.achievements.map((ach, idx) => (
                                                    <li key={idx}>
                                                        <Typography variant="body2" color="textSecondary">{ach}</Typography>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </Box>
                                }

                                <Box sx={{position:'relative'}}>
                                    <ButtonBase className={`${styles.trashButton}`}>
                                        <FontAwesomeIcon icon={faTrash}/>
                                    </ButtonBase>
                                </Box>
                            </Box>
                        ))
                    }
                </Grid>
                
            }

            

            <Grid container className={`${styles.row}`}>
                <Grid sx={{textAlign:'center'}} size={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setDialogOpen(true)}
                        style={{ marginTop: "15px" }}
                    >
                        Add Professional Experience
                    </Button>
                </Grid>
            </Grid>

            <Box sx={{padding:'10px', margin:'1rem 0' }}>
                <Divider/>
            </Box>

            <CustomDialog 
                open={dialogOpen} 
                title="Professional Experience" 
                titleIcon={faBriefcase} 
                close={() => setDialogOpen(false)}
                actionButtons={[{label: 'Save', clickAction: dialogClose}]}
                >
                <Grid sx={{padding:'20px 30px'}} size={12} container>
                    <Grid sx={{padding:'0.5rem'}}>
                        <Typography variant="body1">
                            Enter your education details as they should appear on your resume. Include your institution, program, dates attended, and location.
                        </Typography>
                    </Grid>

                    {
                        PROFESSIONAL_EXPERIENCE_SECTIONS[0].rows.map((row, index) => {
                            return(
                                <Grid size={12} container key={index}>
                                    {
                                        row.fields.map((field, index) => {
                                            if (!field.type) return null;
                                            const FieldComponent = getDyanamicField(field.type);

                                            return(
                                                <Grid size={field.col} sx={{padding:'0.5rem'}} key={index}>
                                                    <FieldComponent 
                                                        label={field.label} 
                                                        id={field.id} 
                                                        name={field.name} 
                                                        col={0}
                                                        // value={getDataValue(field.name)}
                                                        required={field.required}                                                        
                                                        {
                                                            ...                                                            
                                                            (() =>{
                                                                if(field.type === 'text') {
                                                                    if(field.name === 'responsibilities') 
                                                                        return { onKeyDown: addResponsibility }
                                                                    else
                                                                        return { onBlur: (e: FocusEvent<Element>) => updateField(e, field.name) }
                                                                }
                                                                else if(field.type === 'date-picker') {
                                                                    return { onChange: (e: Dayjs) => updateField(e, field.name) }
                                                                }
                                                            })()                                                            
                                                        }                                                        
                                                    />
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            )
                        })
                    }

                    <Grid size={12} sx={{padding: '10px'}}>

                        {
                            responsibilities.length === 0 ? 
                            <Box sx={{textAlign:'center'}}>
                                <Typography variant="h6">No responsibilities added</Typography>
                            </Box> :
                            <Box sx={{marginBottom:'1rem'}}>
                                <Typography variant="subtitle1">Responsibilities</Typography>
                                <ul className={`${styles.timeline}`}>
                                    {
                                        responsibilities.map((item, index) => (
                                            <li key={index}>
                                                <Typography variant="body2" >{item}</Typography>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </Box>
                        }
                        
                    </Grid>

                    <Grid size={12} sx={{padding: '10px'}}>
                        <TextField fullWidth label="Achievements" required onKeyDown={addAchievement} />
                    </Grid>

                    <Grid size={12} sx={{padding: '10px'}}>

                        {
                            achievements.length === 0 ? 
                            <Box sx={{textAlign:'center'}}>
                                <Typography variant="h6">No achievements added</Typography>
                            </Box> :
                            <Box sx={{marginBottom:'1rem'}}>
                                <Typography variant="subtitle1">Achievements</Typography>
                                <ul className={`${styles.timeline}`}>
                                    {
                                        achievements.map((item, index) => (
                                            <li key={index}>
                                                <Typography variant="body2">{item}</Typography>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </Box>
                        }
                        
                    </Grid>
                </Grid>
            </CustomDialog>
        </Grid>
    )
}

export default ProfessionalExperienceSection