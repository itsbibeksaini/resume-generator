import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { useState, type FC, type FocusEvent, type MouseEventHandler } from "react";
import styles from './EducationSection.module.scss'
import CustomDialog from "../../../shared/dialogs/layout/CustomDialog";
import { faGraduationCap, faTrash } from "@fortawesome/free-solid-svg-icons";
import { EDUCATION_SECTIONS, EducationInfoSchema } from "./data/EducationFields";
import { getDyanamicField } from "../../../../core/fields/DynamicField";
import type { EducationInfo } from "../../../../core/template-data/TemplateData";
import type { Dayjs } from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from "dayjs";

type EdicationalSectionProps = {
    callback: (educationalData: EducationInfo) => void
}

const EducationSection: FC<EdicationalSectionProps> = (props: EdicationalSectionProps) => {

    const [dialogOpen, setDialogOpen] = useState(false)
    const [fieldData, setFieldData] = useState<Record<string, string>>({});
    const [educationalData, setEducationalData] = useState<EducationInfo[]>([]);
    const [errors, setErrors] = useState<Partial<Record<keyof EducationInfo, string>>>({});

    function updateField(evt: React.FocusEvent<Element> | Dayjs, fieldName: string) {
        
        let value = "";

        if (dayjs.isDayjs(evt)) {
            value = evt.format("MM/YYYY");
        } else if (evt && "target" in evt) {
            value = (evt.target as HTMLInputElement).value;    
        }

        validateField(fieldName, value)

        setFieldData((data) => ({
            ...data,
            [fieldName]: value,
        }));
        
    }

    const validateField = (name:string, value:string) => {
        debugger
        let fieldSchema = EducationInfoSchema.shape[name as keyof EducationInfo]
        if(!fieldSchema) return

        let result = fieldSchema.safeParse(value)

        if(result.error){
            console.log(result.error)
        }

        setErrors((prev) => ({
            ...prev,
            [name]: result.success ? undefined : result.error.issues[0].message,
        }));
     }

     const validateAll = (data: EducationInfo): boolean => {

        let result = EducationInfoSchema.safeParse(data)
        if(!result.success){
            const flattened = result.error.flatten();
            const fieldErrors: Partial<Record<keyof typeof data, string>> = {};

            // Map first error per field
            for (const key in flattened.fieldErrors) {
            const messages = flattened.fieldErrors[key as keyof typeof data];
            if (messages && messages.length > 0) {
                fieldErrors[key as keyof typeof data] = messages[0];
            }
            }

            setErrors(fieldErrors);
        }

        return result.success
            
     }

    const getDataValue = (fieldName: string): string => {
        return fieldData[fieldName] || ''
    }

    const dialogClose = () => {        
        let educationData: EducationInfo = {
                                                schoolName: fieldData['schoolName'],
                                                course: fieldData['course'],
                                                startDate: fieldData['startDate'],
                                                completionDate: fieldData['completionDate'],
                                                city: fieldData['city'],
                                                state: fieldData['state'],
                                                country: fieldData['country']
                                            }

        let isValid =  validateAll(educationData)

        if(isValid){
            props.callback(educationData)
            setEducationalData([...educationalData, educationData])
            setDialogOpen(false)
            setFieldData({})
        }        
    }
    

    const deleteEducationData = (data: EducationInfo) => {
        setEducationalData(educationalData.filter(s => s !== data))    
    }

    return(
        <Grid className={`${styles.section}`}>
            <Box>
                <Typography variant="h6">Education</Typography>
            </Box>
            
            <Grid container className={`${styles.row}`}>

                {
                    educationalData.length == 0 && (<Grid sx={{textAlign:'center'}} size={12}>
                        <Typography variant="h6" color="textSecondary">No education details added yet.</Typography>
                    </Grid>)                                        
                }

                <Grid container size={12} className={`${styles.row}`} gap={2} sx={{justifyContent: 'center'}}>
                    {
                        educationalData.map((data, index) => {
                            return(                                
                                <Grid key={index} sx={{border:'1px solid', padding:'0.5rem', borderRadius:'0.25rem'}} size={3}>
                                    <Box sx={{ textAlign:'right'}}>
                                        <FontAwesomeIcon icon={faTrash} style={{color:'red'}} onClick={() => {deleteEducationData(data)}} />
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
                <Grid sx={{textAlign:'center'}} size={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setDialogOpen(true)}
                        style={{ marginTop: "15px" }}
                    >
                        Add Education
                    </Button>
                </Grid>
            </Grid>

            <Box sx={{padding:'10px', margin:'1rem 0' }}>
                <Divider/>
            </Box>
                
            <CustomDialog 
                open={dialogOpen} 
                title="Education" 
                titleIcon={faGraduationCap} 
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
                        EDUCATION_SECTIONS[0].rows.map((row, index) => {
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
                                                            errorText={errors[field.name as keyof EducationInfo]}                                                            
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

export default EducationSection