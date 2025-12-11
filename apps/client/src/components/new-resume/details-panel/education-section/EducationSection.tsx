import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { useRef, useState, type FC } from "react";
import styles from './EducationSection.module.scss'
import sharedStyles from '../shared/DetailsPannelShared.module.scss'
import CustomDialog from "../../../shared/dialogs/layout/CustomDialog";
import { faGraduationCap, faTrash } from "@fortawesome/free-solid-svg-icons";
import type { EducationInfo } from "../../../../core/template-data/TemplateData";
import SectionRenderer, { type SectionRendererHandle } from "../../../../core/dynamic-fields/renderers/SectionRenderer";
import { EDUCATIONAL_DETAILS } from "../../../../core/dynamic-fields/sections/education-details";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type EdicationalSectionProps = {
    callback: (educationalData: EducationInfo[]) => void
    hasError: boolean
}

const EducationSection: FC<EdicationalSectionProps> = (props: EdicationalSectionProps) => {

    const [dialogOpen, setDialogOpen] = useState(false)
    const [educationalData, setEducationalData] = useState<EducationInfo[]>([]);
    const childRef = useRef<SectionRendererHandle>(null);


    const dialogClose = () => {

        let isValid = childRef.current?.validate()
        let updatedEducationalData = [...educationalData, childRef.current?.getDataValue() as EducationInfo]

        if (isValid) {
            props.callback(updatedEducationalData)
            setEducationalData(updatedEducationalData)
            setDialogOpen(false)
        }
    }


    const deleteEducationData = (data: EducationInfo) => {
        let updatedEducationalData = educationalData.filter(s => s !== data)
        setEducationalData(updatedEducationalData)
        props.callback(updatedEducationalData)
    }

    return (
        <Grid className={`${styles.section}`}>
            <Box className={`${sharedStyles.errorBox} ${props.hasError ? sharedStyles.showError + ' shake' : ''}`}>
                <Box>
                    <Typography variant="h6">Education</Typography>
                </Box>

                <Grid container className={`${styles.row}`}>

                    {
                        educationalData.length == 0 && (<Grid sx={{ textAlign: 'center' }} size={12}>
                            <Typography variant="h6" color={props.hasError ? "error" : "textSecondary"}>No education details added yet.</Typography>
                        </Grid>)
                    }

                    <Grid container size={12} className={`${styles.row}`} gap={2} sx={{ justifyContent: 'center' }}>
                        {
                            educationalData.map((data, index) => {
                                return (
                                    <Grid key={index} sx={{ border: '1px solid', padding: '0.5rem', borderRadius: '0.25rem' }} size={3}>
                                        <Box sx={{ textAlign: 'right' }}>
                                            <FontAwesomeIcon icon={faTrash} style={{ color: 'red' }} onClick={() => { deleteEducationData(data) }} />
                                        </Box>
                                        <Typography variant="h4">{data.schoolName}</Typography>
                                        <Typography variant="body1">{data.course}</Typography>
                                        <Typography variant="body1">{data.startDate} - {data.completionDate}</Typography>
                                        <Typography variant="subtitle2">
                                            {data.city} {data.state} - {data.country}
                                        </Typography>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>

                <Grid container className={`${styles.row}`}>
                    <Grid sx={{ textAlign: 'center' }} size={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => setDialogOpen(true)}
                        >
                            Add Education
                        </Button>
                    </Grid>
                </Grid>

                <Grid className={`${sharedStyles.errorMessageBox}`} gap={0.25}>
                    <Grid >
                        <Typography color="textPrimary">Looks like you missed this step — please enter at least one education detail to continue.</Typography>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ padding: '10px', margin: '1rem 0' }}>
                <Divider />
            </Box>

            <CustomDialog
                open={dialogOpen}
                title="Education"
                titleIcon={faGraduationCap}
                close={() => { setDialogOpen(false) }}
                actionButtons={[{ label: 'Save', clickAction: dialogClose }]}
            >
                <Grid sx={{ padding: '20px 30px' }} size={12} container>
                    <Grid sx={{ padding: '0.5rem' }}>
                        <Typography variant="body1">
                            Enter your education details as they should appear on your resume. Include your institution, program, dates attended, and location.
                        </Typography>
                    </Grid>

                    <SectionRenderer ref={childRef} section={EDUCATIONAL_DETAILS} hasError={false} />
                </Grid>
            </CustomDialog>
        </Grid>
    )
}

export default EducationSection