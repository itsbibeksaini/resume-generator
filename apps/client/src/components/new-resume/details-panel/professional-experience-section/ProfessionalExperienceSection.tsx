import { useRef, useState, type FC } from "react";
import styles from './ProfessionalExperienceSection.module.scss'
import sharedStyles from '../shared/DetailsPannelShared.module.scss'
import { Box, Button, ButtonBase, Divider, Grid, IconButton, Typography } from "@mui/material";
import CustomDialog from "../../../shared/dialogs/layout/CustomDialog";
import { faAward, faBriefcase, faClipboardList, faTrash } from "@fortawesome/free-solid-svg-icons";
import type { ProfessionalExperienceInfo } from "../../../../core/template-data/TemplateData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionRenderer, { type SectionRendererHandle } from "../../../../core/dynamic-fields/renderers/SectionRenderer";
import { PROFESSIONAL_EXPERIENCE_DETAILS } from "../../../../core/dynamic-fields/sections/professional-experience-details";

type ProfessionalExperienceSectionProps = {
    callback: (professionalExperienceData: ProfessionalExperienceInfo[]) => void
    hasError: boolean

}

const ProfessionalExperienceSection: FC<ProfessionalExperienceSectionProps> = (props: ProfessionalExperienceSectionProps) => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [professionalExperienceData, setprofessionalExperienceData] = useState<ProfessionalExperienceInfo[]>([]);
    const childRef = useRef<SectionRendererHandle>(null);

    const dialogClose = () => {
        let isValid = childRef.current?.validate()

        if (!isValid) {
            return
        }

        let experienceData = childRef.current?.getDataValue() as ProfessionalExperienceInfo

        setprofessionalExperienceData([...professionalExperienceData, experienceData])
        props.callback([...professionalExperienceData, experienceData])
        setDialogOpen(false)
    }

    const deleteExperience = (index: number) => {
        let updatedData = [...professionalExperienceData]

        updatedData.splice(index, 1)
        setprofessionalExperienceData(updatedData)
        props.callback(updatedData)
    }

    return (
        <Grid className={`${styles.section}`} sx={(theme) => ({
            '--background-color': theme.palette.background.default
        })}>
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
                                            <IconButton className={`${styles.trashButton}`} size="small" color="error" onClick={() => deleteExperience(index)}>
                                                <FontAwesomeIcon icon={faTrash} />
                                            </IconButton>
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
                    <SectionRenderer ref={childRef} section={PROFESSIONAL_EXPERIENCE_DETAILS} />

                </Grid>
            </CustomDialog>
        </Grid>
    )
}

export default ProfessionalExperienceSection