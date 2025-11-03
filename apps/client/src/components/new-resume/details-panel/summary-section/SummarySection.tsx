import { useState, type FC } from "react"
import styles from './SummarySection.module.scss'
import { Box, Divider, Grid, InputAdornment, TextField, Typography } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboardList, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons"

type SummarySectionProps = {
    callback: (newSummary: string) => void
}


const SummarySection: FC<SummarySectionProps> = (props: SummarySectionProps) =>{

    const [summary, setSummary] = useState<string[]>([]);

    const addSummary = (e: React.KeyboardEvent<HTMLInputElement>) => {        
        if (e.key === 'Enter') {
            const input = e.target as HTMLInputElement;
            const value = input.value.trim();
            
            setSummary(prev => [
                ...prev,
                value
            ])
            
            props.callback(value)
                        
            input.value = '';
        }
    }

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
                        onKeyDown={addSummary}     
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <FontAwesomeIcon icon={faClipboardList} />
                                    </InputAdornment>
                                )
                            }
                        }}                    
                    />
                </Grid>
            </Grid>

            <Grid container className={styles.row} spacing={2}>
                {summary.length === 0 ? (
                    <Grid size={12} sx={{ textAlign: "center" }}>
                        <Typography variant="h6" color="textSecondary">
                            No summary added
                        </Typography>
                    </Grid>
                ) : (
                <ul className={`${styles.timeline}`}>
                    {
                        summary.map((data, index) => {
                            return(
                                <li key={index} style={{position:'relative'}}>
                                    <Typography variant="body1">{data}</Typography>
                                    <FontAwesomeIcon icon={faTrash} style={{position:'absolute', right:'0', top:'50%', transform:'translateY(-50%)'}} />
                                </li>
                            )
                        })
                    }
                </ul>
            )}
            </Grid>

            <Box sx={{padding:'10px', marginTop:'1rem'}}>
                <Divider/>
            </Box>
        </Grid>
    )
}

export default SummarySection