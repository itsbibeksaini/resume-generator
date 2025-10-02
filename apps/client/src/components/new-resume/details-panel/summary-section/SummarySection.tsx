import type { FC } from "react"
import styles from './SummarySection.module.scss'
import { Box, Divider, Grid, TextField, Typography } from "@mui/material"

const SummarySection: FC = () =>{
    return(
        <Grid className={`${styles.section}`}>
            <Box>
                <Typography variant="h6">Summary</Typography>
            </Box>

            <Grid container className={`${styles.row}`}>
                <Grid size={12} className={`${styles.col}`}>
                    <TextField
                        fullWidth 
                        label="Summary" 
                        placeholder="Type your summary points here and press enter" 
                        // onKeyDown={addSkill}                         
                    />
                </Grid>
            </Grid>

            {/* <Grid container className={`${styles.row}`}>
                <Grid sx={{textAlign:'center'}} size={12}>
                    <Typography variant="h6" color="textSecondary">No summary added</Typography>
                </Grid>
            </Grid> */}

            <Grid container className={`${styles.row}`}>
                <ul className={`${styles.timeline}`}>
                    <li>
                        <Typography variant="body1">Senior Back-End Developer with 10 years of experience delivering high-performance, scalable, and secure server-side applications.</Typography>
                    </li>
                    <li>
                        <Typography variant="body1">Senior Back-End Developer with 10 years of experience delivering high-performance, scalable, and secure server-side applications.</Typography>
                    </li>
                    <li>
                        <Typography variant="body1">Senior Back-End Developer with 10 years of experience delivering high-performance, scalable, and secure server-side applications.</Typography>
                    </li>
                    <li>
                        <Typography variant="body1">Senior Back-End Developer with 10 years of experience delivering high-performance, scalable, and secure server-side applications.</Typography>
                    </li>
                </ul>
            </Grid>

            <Box sx={{padding:'10px', marginTop:'1rem'}}>
                <Divider/>
            </Box>
        </Grid>
    )
}

export default SummarySection