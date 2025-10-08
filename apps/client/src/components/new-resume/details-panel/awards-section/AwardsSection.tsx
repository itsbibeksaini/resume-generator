import { Box, Button, ButtonBase, Divider, Grid, Tab, Tabs, Typography } from "@mui/material";
import { useState, type FC, type SyntheticEvent } from "react";
import styles from './AwardsSection.module.scss'
import CustomDialog from "../../../shared/dialogs/layout/CustomDialog";
import { faAward, faCertificate, faHome, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AWARDS_SECTION } from "./data/AwardsFields";
import { getDyanamicField } from "../../../../core/fields/DynamicField";

const AwardsSection: FC = () => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [tabValue, setTabValue] = useState(0);

    const switchTab = (event: SyntheticEvent, newValue: number) => {
        setTabValue(newValue)
    }

    return(
        <Grid className={`${styles.section}`}>
            <Box>
                <Typography variant="h6">Awards and Certifications</Typography>
            </Box>

            <Grid container className={`${styles.row}`}>
                <Grid sx={{textAlign:'center'}} size={12}>
                    <Typography variant="h6" color="textSecondary">No award or certification details added yet</Typography>
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
                        Add award or certification
                    </Button>
                </Grid>
            </Grid>

            <Box sx={{padding:'10px', margin:'1rem 0' }}>
                <Divider/>
            </Box>

            <CustomDialog open={dialogOpen} title="Awards & Certifications" titleIcon={faAward} close={() => setDialogOpen(false)}>
                <Grid sx={{padding:'20px 30px'}} size={12} container>
                    <Grid sx={{padding:'0.5rem'}}>
                        <Typography variant="body1">
                            Enter your education details as they should appear on your resume. Include your institution, program, dates attended, and location.
                        </Typography>
                    </Grid>

                    <Grid size={12} container gap={2} sx={{padding:'0.5rem', marginBottom:'0.5rem'}}>
                        <Grid sx={{border:'1px solid #1876d2', width:'100px', height:'100px', borderRadius:'0.25rem', boxShadow:'5px 5px 0px rgb(24,118,210, 0.4)'}}>
                            <ButtonBase sx={{height:'100%', width:'100%', display:'flex', flexDirection:'column'}}>
                                <FontAwesomeIcon icon={faAward} style={{display:'block', fontSize:'3rem'}} />                                
                                <Typography sx={{textTransform:'uppercase', marginTop:'0.5rem'}} variant="body1">Award</Typography>
                            </ButtonBase>
                        </Grid>
                        <Grid sx={{border:'1px solid #1876d2', width:'100px', height:'100px', borderRadius:'0.25rem'}}>
                            <ButtonBase sx={{height:'100%', width:'100%', display:'flex', flexDirection:'column'}}>
                                <FontAwesomeIcon icon={faCertificate} style={{display:'block', fontSize:'3rem'}} />                                
                                <Typography sx={{textTransform:'uppercase', marginTop:'0.5rem'}} variant="body2">Certificate</Typography>
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

export default AwardsSection