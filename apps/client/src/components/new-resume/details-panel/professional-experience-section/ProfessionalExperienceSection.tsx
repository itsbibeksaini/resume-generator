import type { FC } from "react";
import styles from './ProfessionalExperienceSection.module.scss'
import { Box, Button, Divider, Grid, Typography } from "@mui/material";

const ProfessionalExperienceSection: FC = () => {
    return (
        <Grid className={`${styles.section}`}>
            <Box>
                <Typography variant="h6">Professional Experience</Typography>
            </Box>

            <Grid container className={`${styles.row}`}>
                <Grid sx={{textAlign:'center'}} size={12}>
                    <Typography variant="h6" color="textSecondary">No professional experience added</Typography>
                </Grid>
            </Grid>

            <Grid container className={`${styles.row}`}>
                <Grid sx={{textAlign:'center'}} size={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        // onClick={() => setDialogOpen(true)}
                        style={{ marginTop: "15px" }}
                    >
                        Add Professional Experience
                    </Button>
                </Grid>
            </Grid>

            <Box sx={{padding:'10px', margin:'1rem 0' }}>
                <Divider/>
            </Box>
        </Grid>
    )
}

export default ProfessionalExperienceSection