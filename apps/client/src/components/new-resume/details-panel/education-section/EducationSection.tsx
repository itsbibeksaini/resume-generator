import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useState, type FC } from "react";
import styles from './EducationSection.module.scss'
import CustomDialog from "../../../shared/dialogs/layout/CustomDialog";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const EducationSection: FC = () => {

    const [dialogOpen, setDialogOpen] = useState(false)

    

    return(
        <Grid className={`${styles.section}`}>
            <Box>
                <Typography variant="h6">Education</Typography>
            </Box>
            <Grid container className={`${styles.row}`}>
                <Typography variant="body2">No education details added yet.</Typography>
            </Grid>

            <Button
                variant="contained"
                color="primary"
                onClick={() => setDialogOpen(true)}
                style={{ marginTop: "15px" }}
            >
                Add Education
            </Button>
                
            <CustomDialog open={dialogOpen} title="Education" titleIcon={faGraduationCap} close={() => setDialogOpen(false)}>
                <Grid sx={{padding:'20px 30px'}} size={12} container>
                    <Grid sx={{padding:'0.5rem'}}>
                        <Typography variant="body1">
                            Enter your education details as they should appear on your resume. Include your institution, program, dates attended, and location.
                        </Typography>
                    </Grid>
                    <Grid size={12} container>
                        <Grid size={6} sx={{padding:'0.5rem'}}>
                            <TextField fullWidth label='School / College' />
                        </Grid>
                        <Grid size={6} sx={{padding:'0.5rem'}}>
                            <TextField fullWidth label='Course' />
                        </Grid>
                    </Grid>
                    <Grid size={12} container>
                        <Grid size={6} sx={{padding:'0.5rem'}}>                                
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker sx={{width:'100%'}} views={["year", "month"]} format="MM/YYYY" label='Start date'/>
                            </LocalizationProvider>
                        </Grid>
                        <Grid size={6} sx={{padding:'0.5rem'}}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker sx={{width:'100%'}} views={["year", "month"]} format="MM/YYYY" label='Completion date'/>
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                    <Grid size={12} container>
                        <Grid size={4} sx={{padding:'0.5rem'}}>
                            <TextField fullWidth label='City' />
                        </Grid>
                        <Grid size={4} sx={{padding:'0.5rem'}}>
                            <TextField fullWidth label='Province / State' />
                        </Grid>
                        <Grid size={4} sx={{padding:'0.5rem'}}>
                            <TextField fullWidth label='Country' />
                        </Grid>
                    </Grid>
                </Grid>
            </CustomDialog>
        </Grid>
    )
}

export default EducationSection