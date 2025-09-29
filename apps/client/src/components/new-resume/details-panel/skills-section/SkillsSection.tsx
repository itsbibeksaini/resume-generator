import { Box, ButtonBase, Divider, Grid, TextField, Typography } from "@mui/material";
import { useState, type FC } from "react";
import styles from './SkillsSection.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

type SkillSectionProps = {
    callback: (newSkills: string[]) => void
}

const SkillsSection: FC<SkillSectionProps> = (props: SkillSectionProps) => {

    const [skills, setSkills] = useState<string[]>([]);

    const addSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {      
        
        if (e.key === 'Enter') {
            const input = e.target as HTMLInputElement;
            const value = input.value.trim();
            let newSkills = value
                            .split(',')
                            .map(skill => skill.trim())
                            .filter(skill => skill && !skills.includes(skill));

            setSkills(prevSkills => [...new Set([...prevSkills, ...newSkills])]);     
            
            props.callback(newSkills)
            
            
            input.value = '';
        }
    }

    const removeSkill = (skill: string) => {
        setSkills(skills.filter(s => s !== skill));
    }

    return (
        <Grid className={`${styles.section}`}>
            <Box>
                <Typography variant="h6">Skills</Typography>
            </Box>
            <Grid container className={`${styles.row}`}>
                <Grid size={12} className={`${styles.col}`}>
                    <TextField 
                        fullWidth 
                        label="Skills" 
                        placeholder="Type your skills here and press enter" 
                        onKeyDown={addSkill} 
                        helperText="Type one or more skills, separated by commas, then press Enter."
                    />
                </Grid>
            </Grid>
            <Grid container className={`${styles.row}`} gap={1} >
                {
                    skills.length === 0 ? (
                        <Grid sx={{textAlign:'center'}} size={12}>
                            <Typography variant="h6" color="textSecondary">No skills added</Typography>
                        </Grid>
                    ) : (
                        skills.map((skill, index) => {
                            return (
                                <Grid container className={`${styles.skillChip}`} key={index}>
                                    <Grid size='grow' sx={{padding: '0.5rem'}}>
                                        <Typography>{skill}</Typography>
                                    </Grid>
                                    <Grid className={`${styles.skillAction}`}>
                                        <ButtonBase className={`${styles.deleteBtn}`} onClick={() => removeSkill(skill)}>
                                            <FontAwesomeIcon icon={faTrash} style={{fontSize:'1rem', color:'red'}} />
                                        </ButtonBase>
                                    </Grid>
                                </Grid>
                            )
                        })
                    )
                }
                
                
            </Grid>
            <Box sx={{padding:'10px', marginTop:'1rem'}}>
                <Divider/>
            </Box>
        </Grid>
    );
}
export default SkillsSection;