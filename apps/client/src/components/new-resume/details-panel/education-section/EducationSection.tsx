import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { useState, type FC } from "react";
import styles from './EducationSection.module.scss'
import CustomDialog from "../../../shared/dialogs/layout/CustomDialog";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { EDUCATION_SECTIONS } from "./data/EducationFields";
import { getDyanamicField } from "../../../../core/fields/DynamicField";

const EducationSection: FC = () => {

    const [dialogOpen, setDialogOpen] = useState(false)

    

    return(
        <Grid className={`${styles.section}`}>
            <Box>
                <Typography variant="h6">Education</Typography>
            </Box>
            
            <Grid container className={`${styles.row}`}>
                <Grid sx={{textAlign:'center'}} size={12}>
                    <Typography variant="h6" color="textSecondary">No education details added yet.</Typography>
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
                
            <CustomDialog open={dialogOpen} title="Education" titleIcon={faGraduationCap} close={() => setDialogOpen(false)}>
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
                                                        // value={getDataValue(field.name)}
                                                        required={field.required}
                                                        // onChange={(e) => updateField(e, field.name)}
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