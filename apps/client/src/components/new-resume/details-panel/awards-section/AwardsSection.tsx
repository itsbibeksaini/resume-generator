import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import type { FC } from "react";
import styles from './AwardsSection.module.scss'

const AwardsSection: FC = () => {
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
                        // onClick={() => setDialogOpen(true)}
                        style={{ marginTop: "15px" }}
                    >
                        Add award or certification
                    </Button>
                </Grid>
            </Grid>

            <Box sx={{padding:'10px', margin:'1rem 0' }}>
                <Divider/>
            </Box>
        </Grid>
    )
}

export default AwardsSection