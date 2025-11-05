import { useState, type FC } from "react"
import styles from './SummarySection.module.scss'
import sharedStyles from '../shared/DetailsPannelShared.module.scss'
import { Box, Divider, Grid, InputAdornment, TextField, Typography } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboardList, faTrash } from "@fortawesome/free-solid-svg-icons"

type SummarySectionProps = {
    callback: (newSummary: string[]) => void,
    hasError:boolean
}

const SummarySection: FC<SummarySectionProps> = (props: SummarySectionProps) =>{

    const [summary, setSummary] = useState<string[]>([]);

    const addSummary = (e: React.KeyboardEvent<HTMLInputElement>) => {        
        if (e.key === 'Enter') {
            const input = e.target as HTMLInputElement;
            const value = input.value.trim();
            
            let updatedSummaryData =  [...summary,value]

            setSummary(updatedSummaryData)
            
            props.callback(updatedSummaryData)
                        
            input.value = '';
        }
    }
    
    const deleteSummaryPoint = (summaryPoint:String) => {
        let updatedSummaryData = summary.filter(s => s !== summaryPoint)
        setSummary(updatedSummaryData)
        props.callback(updatedSummaryData)
    }

    return(
        <Grid className={`${styles.section}`}>
            <Box className={`${sharedStyles.errorBox} ${props.hasError ? sharedStyles.showError + ' shake' : ''}`}>
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
                            error={props.hasError}
                            slotProps={{
                                input: {
                                    sx:{
                                        color: props.hasError ? "#212121" : ""
                                    },
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <FontAwesomeIcon icon={faClipboardList} style={{color: props.hasError ? "#212121" : ""}}/>
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
                            <Typography variant="h6" color={props.hasError ? "error" : "textSecondary"}>
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
                                        <FontAwesomeIcon icon={faTrash} style={{position:'absolute', right:'0', top:'50%', transform:'translateY(-50%)'}} onClick={() => deleteSummaryPoint(data)} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                )}
                </Grid>
                <Grid className={`${sharedStyles.errorMessageBox}`} gap={0.25}>                    
                    <Grid >
                        <Typography color="textPrimary">Looks like you skipped this step! Type summary points for your resume.</Typography>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{padding:'10px', marginTop:'1rem'}}>
                <Divider/>
            </Box>
        </Grid>
    )
}

export default SummarySection