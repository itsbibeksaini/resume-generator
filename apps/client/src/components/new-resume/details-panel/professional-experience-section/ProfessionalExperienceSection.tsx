import { useRef, useState, type ChangeEvent, type FC, type FocusEvent, type KeyboardEvent } from "react";
import styles from './ProfessionalExperienceSection.module.scss'
import sharedStyles from '../shared/DetailsPannelShared.module.scss'
import { Box, Button, ButtonBase, Divider, Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import CustomDialog from "../../../shared/dialogs/layout/CustomDialog";
import { faAward, faBriefcase, faCertificate, faCircleExclamation, faClipboardList, faTrash } from "@fortawesome/free-solid-svg-icons";
import { PROFESSIONAL_EXPERIENCE_SECTIONS } from "./data/ProfessionalExperienceFields";
import { getDyanamicField } from "../../../../core/fields/DynamicField";
import type { ProfessionalExperienceInfo } from "../../../../core/template-data/TemplateData";
import dayjs, { Dayjs } from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionRenderer, { type SectionRendererHandle } from "../../../../core/dynamic-fields/renderers/SectionRenderer";
import { PROFESSIONAL_EXPERIENCE_DETAILS } from "../../../../core/dynamic-fields/sections/professional-experience-details";

type ProfessionalExperienceSectionProps = {
    callback: (professionalExperienceData: ProfessionalExperienceInfo) => void
    hasError: boolean

}

const ProfessionalExperienceSection: FC<ProfessionalExperienceSectionProps> = (props: ProfessionalExperienceSectionProps) => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [fieldData, setFieldData] = useState<Record<string, string>>({});
    const [responsibilities, setResponsibilities] = useState<string[]>([]);
    const [achievements, setAchievements] = useState<string[]>([]);
    const [professionalExperienceData, setprofessionalExperienceData] = useState<ProfessionalExperienceInfo[]>([]);
    const childRef = useRef<SectionRendererHandle>(null);


    const getDataValue = (fieldName: string): string => {
        return fieldData[fieldName] || ''
    }

    const dialogClose = () => {



        let isValid = childRef.current?.validate()
        
        let experienceData = childRef.current?.getDataValue() as ProfessionalExperienceInfo

        if (!isValid) {
            return
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
            <Box className={`${sharedStyles.errorBox} ${props.hasError ? sharedStyles.showError + ' shake' : ''}`}>
                <Box sx={{ marginBottom: '1rem' }}>
                    <Typography variant="h6">Professional Experience</Typography>
                </Box>

                {
                    professionalExperienceData.length === 0 ?
                        <Grid container className={`${styles.row}`}>
                            <Grid sx={{ textAlign: 'center' }} size={12}>
                                <Typography variant="h6" color={props.hasError ? "error" : "textSecondary"}>No professional experience added</Typography>
                            </Grid>
                        </Grid> :
                        <Grid className={`${styles.timeline}`} sx={{ marginLeft: '1rem' }}>
                            {
                                professionalExperienceData.map((item, index) => (
                                    <Box key={index} sx={{ marginBottom: '1rem' }} className={`${styles.timelineEvent}`}>
                                        <Grid className={`${styles.eventHeader}`} container>
                                            <Grid size='auto'>
                                                <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>{item.jobPosition}</Typography>
                                                <Typography variant="subtitle1">{item.companyName}</Typography>
                                            </Grid>
                                            <Grid size='grow'>
                                                <Box className={`vertical-center`} sx={{ right: 0 }}>
                                                    <Typography variant="body2" color="textSecondary">{item.startDate} - {item.endDate}</Typography>
                                                    <Typography variant="body2" color="textSecondary">{item.city}, {item.state} {item.country}</Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                        {
                                            item.responsibilities.length === 0 ? null :
                                                <Box sx={{ marginTop: '0.5rem', position: 'relative' }}>
                                                    <Box sx={{ position: 'relative', height: '30px' }}>
                                                        <Box className={`${styles.iconBox}`}>
                                                            <FontAwesomeIcon icon={faClipboardList} className="centeralize" style={{ fontSize: '1.2rem' }} />
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
                                                <Box sx={{ marginTop: '0.5rem' }}>
                                                    <Box sx={{ position: 'relative', height: '30px' }}>
                                                        <Box className={`${styles.iconBox}`} style={{ fontSize: '1.2rem' }}>
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

                                        <Box sx={{ position: 'relative' }}>
                                            <ButtonBase className={`${styles.trashButton}`}>
                                                <FontAwesomeIcon icon={faTrash} />
                                            </ButtonBase>
                                        </Box>
                                    </Box>
                                ))
                            }
                        </Grid>

                }



                <Grid container className={`${styles.row}`}>
                    <Grid sx={{ textAlign: 'center' }} size={12}>
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
                <Grid className={`${sharedStyles.errorMessageBox}`} gap={0.25}>
                    <Grid >
                        <Typography color="textPrimary">Looks like you skipped this step! Add one or two professional experience for your resume.</Typography>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ padding: '10px', margin: '1rem 0' }}>
                <Divider />
            </Box>

            <CustomDialog
                open={dialogOpen}
                title="Professional Experience"
                titleIcon={faBriefcase}
                close={() => setDialogOpen(false)}
                actionButtons={[{ label: 'Save', clickAction: dialogClose }]}
            >
                <Grid sx={{ padding: '20px 30px' }} size={12} container>
                    <Grid sx={{ padding: '0.5rem' }}>
                        <Typography variant="body1">
                            Enter your education details as they should appear on your resume. Include your institution, program, dates attended, and location.
                        </Typography>
                    </Grid>

                    <SectionRenderer ref={childRef} section={PROFESSIONAL_EXPERIENCE_DETAILS} />

                </Grid>
            </CustomDialog>
        </Grid>
    )
}

export default ProfessionalExperienceSection