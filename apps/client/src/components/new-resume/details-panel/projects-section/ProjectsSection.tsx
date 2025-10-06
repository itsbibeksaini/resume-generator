import { useState, type FC } from "react"
import styles from './ProjectsSection.module.scss'
import { Box, Button, Divider, Grid, Typography } from "@mui/material"
import CustomDialog from "../../../shared/dialogs/layout/CustomDialog"
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons"
import { PROJECT_SECTION } from "./data/ProjectsFields"
import { getDyanamicField } from "../../../../core/fields/DynamicField"

const ProjectsSection: FC = () => {
    const [dialogOpen, setDialogOpen] = useState(false)

    return(
        <Grid className={`${styles.section}`}>
            <Box>
                <Typography variant="h6">Projects</Typography>
            </Box>

            <Grid container className={`${styles.row}`}>
                <Grid sx={{textAlign:'center'}} size={12}>
                    <Typography variant="h6" color="textSecondary">No project added</Typography>
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
                        Add Project
                    </Button>
                </Grid>
            </Grid>

            <Box sx={{padding:'10px', margin:'1rem 0' }}>
                <Divider/>
            </Box>

            <CustomDialog  open={dialogOpen} title="Projects" titleIcon={faLaptopCode} close={() => setDialogOpen(false)}>
                <Grid sx={{padding:'20px 30px'}} size={12} container>
                    <Grid sx={{padding:'0.5rem'}}>
                        <Typography variant="body1">
                           
                        </Typography>
                    </Grid>

                    {
                        PROJECT_SECTION[0].rows.map((row,index) => {
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

                    <Grid size={12} sx={{padding: '10px'}}>
                        <Box sx={{textAlign:'center'}}>
                            <Typography variant="h6">No project description added</Typography>
                        </Box>

                        {/* <ul className={`${styles.timeline}`}>
                            <li>
                                <Typography variant="body2">Senior Back-End Developer with 10 years of experience delivering high-performance, scalable, and secure server-side applications.</Typography>
                            </li>
                            <li>
                                <Typography variant="body2">Senior Back-End Developer with 10 years of experience delivering high-performance, scalable, and secure server-side applications.</Typography>
                            </li>
                            <li>
                                <Typography variant="body2">Senior Back-End Developer with 10 years of experience delivering high-performance, scalable, and secure server-side applications.</Typography>
                            </li>
                            <li>
                                <Typography variant="body2">Senior Back-End Developer with 10 years of experience delivering high-performance, scalable, and secure server-side applications.</Typography>
                            </li>
                            <li>
                                <Typography variant="body2">Senior Back-End Developer with 10 years of experience delivering high-performance, scalable, and secure server-side applications.</Typography>
                            </li>
                        </ul> */}
                    </Grid>
                </Grid>
            </CustomDialog>
        </Grid>
    )
}

export default ProjectsSection