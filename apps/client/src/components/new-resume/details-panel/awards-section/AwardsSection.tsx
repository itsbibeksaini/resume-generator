import { Box, Button, ButtonBase, Divider, Grid, Tab, Tabs, Typography } from "@mui/material";
import { useState, type ChangeEvent, type FC, type FocusEvent, type SyntheticEvent } from "react";
import styles from './AwardsSection.module.scss'
import CustomDialog from "../../../shared/dialogs/layout/CustomDialog";
import { faAward, faCertificate, faHome, faTrash, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AWARDS_SECTION } from "./data/AwardsFields";
import { getDyanamicField } from "../../../../core/fields/DynamicField";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import type { AwardsAndCertificationsInfo } from "../../../../core/template-data/TemplateData";

type AwardsSectionProps = {
    callback: (data: AwardsAndCertificationsInfo[]) => void
}

const AwardsSection: FC<AwardsSectionProps> = (props: AwardsSectionProps) => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [isCertificate, setIsCertificate] = useState(false)
    const [isAward, setIsAward] = useState(false)
    const [fieldData, setFieldData] = useState<Record<string, string>>({});
    const [awards, setAwards] = useState<AwardsAndCertificationsInfo[]>([]);


    const updateField = (evt: ChangeEvent<Element> | FocusEvent<Element> | Dayjs, fieldName: string) => {
        let value = "";

        if (dayjs.isDayjs(evt)) {
            value = evt.format("MM/YYYY");
        } else if (evt && "target" in evt) {
            value = (evt.target as HTMLInputElement).value;            
        }

        setFieldData((data) => ({...data,[fieldName]: value}));
    }

    const getDataValue = (fieldName: string): string => {
        return fieldData[fieldName] || ''
    }

    const selectType = (type: 'award' | 'certificate') => {
        if(type === 'award') {
            setIsAward(true)
            setIsCertificate(false)
        }
        else {
            setIsCertificate(true)
            setIsAward(false)
        }
    }

    const dialogClose = () => {

        let newAward: AwardsAndCertificationsInfo = {
            type: isAward ? 'award' : 'certificate',
            title: getDataValue('awardName'),
            issuer: getDataValue('institution'),
            issueDate: getDataValue('issueDate'),
            expirationDate: getDataValue('expirationDate')
        }

        setAwards((prev) => [...prev, newAward])
        setDialogOpen(false)
        resetDialog()
    }

    const resetDialog = () => {
        setIsAward(false)
        setIsCertificate(false)
        setFieldData({})
    }

    return(
        <Grid className={`${styles.section}`}>
            <Box>
                <Typography variant="h6">Awards and Certifications</Typography>
            </Box>

            <Grid container className={`${styles.row}`}>

                {
                    awards.length === 0 ?
                    <Grid sx={{textAlign:'center'}} size={12}>
                        <Typography variant="h6" color="textSecondary">No award or certification details added yet</Typography>
                    </Grid> : 
                    <Grid className={`${styles.timeline}`} sx={{marginLeft:'1rem'}} size={12}>
                        {
                            awards.map((award, index) => {
                                return(
                                    <Box key={index} sx={{marginBottom:'1rem'}} className={`${styles.timelineEvent}`}>
                                        <Grid className={`${styles.eventHeader}`} container>
                                            <Grid size='auto'>
                                                <Typography variant="h6" sx={{textTransform: 'uppercase'}}>{award.title}</Typography>
                                                <Typography variant="subtitle1">{award.issuer}</Typography>
                                                <Box className={`${styles.timelineIcon}`}>
                                                    <FontAwesomeIcon icon={award.type === 'award' ? faAward : faCertificate} style={{fontSize:'1.2rem'}} className="centeralize" />
                                                </Box>
                                            </Grid>
                                            <Grid size='grow'>
                                                <Box className={`vertical-center`} sx={{right:0}}>
                                                    <Typography variant="body2" color="textSecondary">
                                                        {award.issueDate}
                                                        {award.expirationDate && award.expirationDate.length > 0 ? ` - ${award.expirationDate}` : ''}
                                                    </Typography>
                                                    {/* <Typography variant="body2" color="textSecondary">{proj.city}, {proj.state} {proj.country}</Typography> */}
                                                </Box>
                                            </Grid>
                                        </Grid>

                                        <Box sx={{position:'relative'}}>
                                            <ButtonBase className={`${styles.trashButton}`}>
                                                <FontAwesomeIcon icon={faTrash}/>
                                            </ButtonBase>
                                        </Box>
                                    </Box>
                                )
                            })
                        }
                    </Grid>
                }
                
            </Grid>

            <Grid container className={`${styles.row}`}>
                <Grid sx={{textAlign:'center'}} size={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setDialogOpen(true)}
                        style={{ marginTop: "15px" }}
                    >
                        Add award or certification
                    </Button>
                </Grid>
            </Grid>

            <Box sx={{padding:'10px', margin:'1rem 0' }}>
                <Divider/>
            </Box>

            <CustomDialog 
                open={dialogOpen} 
                title="Awards & Certifications" 
                titleIcon={faAward} 
                close={() => setDialogOpen(false)}
                actionButtons={[{label: 'Save', clickAction: dialogClose}]}
                >
                <Grid sx={{padding:'20px 30px'}} size={12} container>
                    <Grid sx={{padding:'0.5rem'}}>
                        <Typography variant="body1">
                            Enter your education details as they should appear on your resume. Include your institution, program, dates attended, and location.
                        </Typography>
                    </Grid>

                    <Grid size={12} container gap={2} className={`${styles.certificateTypes}`}>
                        <Grid className={`${styles.type} ${isAward ? styles.selected : ''}`}>
                            <ButtonBase className={`${styles.iconButton}`} onClick={() => selectType('award')}>
                                <FontAwesomeIcon icon={faAward} className={`${styles.icon}`} />                                
                                <Typography className={`${styles.label}`} variant="body1">Award</Typography>
                            </ButtonBase>
                        </Grid>
                        <Grid className={`${styles.type} ${isCertificate ? styles.selected : ''}`}>
                            <ButtonBase className={`${styles.iconButton}`} onClick={() => selectType('certificate')}>
                                <FontAwesomeIcon icon={faCertificate} className={`${styles.icon}`} />
                                <Typography className={`${styles.label}`} variant="body2">Certificate</Typography>
                            </ButtonBase>
                        </Grid>                        
                    </Grid>

                    {
                        AWARDS_SECTION[0].rows.map((row, index) => {
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
                                                        required={field.required}
                                                        {
                                                            ...                                                            
                                                            (() =>{
                                                                if(field.type === 'text') {                                                                    
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
                </Grid>
            </CustomDialog>
        </Grid>
    )
}

export default AwardsSection