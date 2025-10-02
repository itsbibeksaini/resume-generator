import type { FC } from "react"
import styles from './ProjectsSection.module.scss'
import { Box, Button, Divider, Grid, Typography } from "@mui/material"

const ProjectsSection: FC = () => {
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
                        // onClick={() => setDialogOpen(true)}
                        style={{ marginTop: "15px" }}
                    >
                        Add Project
                    </Button>
                </Grid>
            </Grid>

            <Box sx={{padding:'10px', margin:'1rem 0' }}>
                <Divider/>
            </Box>
        </Grid>
    )
}

export default ProjectsSection