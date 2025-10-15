import { useState, type ChangeEvent, type FC, type FocusEvent, type KeyboardEvent } from "react"
import styles from './ProjectsSection.module.scss'
import { Box, Button, ButtonBase, Divider, Grid, TextField, Typography } from "@mui/material"
import CustomDialog from "../../../shared/dialogs/layout/CustomDialog"
import { faClipboardList, faLaptopCode, faTrash } from "@fortawesome/free-solid-svg-icons"
import { PROJECT_SECTION } from "./data/ProjectsFields"
import { getDyanamicField } from "../../../../core/fields/DynamicField"
import type { Dayjs } from "dayjs"
import dayjs from "dayjs"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { ProjectInfo } from "../../../../core/template-data/TemplateData"

type ProjectsSectionProps = {
    callback: (newProject: ProjectInfo) => void
}

const ProjectsSection: FC<ProjectsSectionProps> = (props: ProjectsSectionProps) => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [fieldData, setFieldData] = useState<Record<string, string>>({});
    const [projectDescription, setProjectDescription] = useState<string[]>([]);
    const [projectTechnologies, setProjectTechnologies] = useState<string[]>([]);
    const [projects, setProjects] = useState<ProjectInfo[]>([]);

    const updateField = (evt: ChangeEvent<Element> | FocusEvent<Element> | Dayjs, fieldName: string) => {
        let value = "";

        if (dayjs.isDayjs(evt)) {
            value = evt.format("MM/YYYY");
        } else if (evt && "target" in evt) {
            value = (evt.target as HTMLInputElement).value;            
        }

        setFieldData((data) => ({...data,[fieldName]: value}));
    }

    const getDataValue = (fieldName: string): string => {
        return fieldData[fieldName] || ''
    }


    const addProjectDescription = (e: KeyboardEvent) => {                
        if (e.key === 'Enter') {
            const input = e.target as HTMLInputElement;
            const value = input.value.trim();
            if (value && !projectDescription.includes(value)) {
                setProjectDescription((prev) => [...prev, value]);
                input.value = '';
            }
        }        
    }

    const addProjectTechnology = (e: KeyboardEvent) => {                
        if (e.key === 'Enter') {
            const input = e.target as HTMLInputElement;
            const value = input.value.trim();
            if (value && !projectTechnologies.includes(value)) {
                setProjectTechnologies((prev) => [...prev, value]);
                input.value = '';
            }
        }        
    }

    const dialogClose = () => {

        let projects: ProjectInfo = {
            projectName: getDataValue('projectName'),
            subtitle: getDataValue('subtitle'),
            startDate: getDataValue('startDate'),
            endDate: getDataValue('endDate'),
            projectDescription: projectDescription,
            projectTechnologies: projectTechnologies
        }

        setProjects((prev) => [...prev, projects])
        props.callback(projects)
        setDialogOpen(false)        
        resetDialog()
    }

    const resetDialog = () => {
        setFieldData({})
        setProjectDescription([])
        setProjectTechnologies([])        
    }

    return(
        <Grid className={`${styles.section}`}>
            <Box>
                <Typography variant="h6">Projects</Typography>
            </Box>

            <Grid container className={`${styles.row}`}>

                {
                    projects.length === 0 ? 
                    <Grid container className={`${styles.row}`}>
                        <Grid sx={{textAlign:'center'}} size={12}>
                            <Typography variant="h6" color="textSecondary">No project added</Typography>
                        </Grid>
                    </Grid> : 
                    (<Grid className={`${styles.timeline}`} sx={{marginLeft:'1rem'}} size={12}>
                        {
                            projects.map((proj, index) => {
                                return(
                                    <Box key={index} sx={{marginBottom:'1rem'}} className={`${styles.timelineEvent}`}>
                                        <Grid className={`${styles.eventHeader}`} container>
                                            <Grid size='auto'>
                                                <Typography variant="h6" sx={{textTransform: 'uppercase'}}>{proj.projectName}</Typography>
                                                <Typography variant="subtitle1">{proj.subtitle}</Typography>
                                            </Grid>
                                            <Grid size='grow'>
                                                <Box className={`vertical-center`} sx={{right:0}}>
                                                    <Typography variant="body2" color="textSecondary">{proj.startDate} - {proj.endDate}</Typography>
                                                    {/* <Typography variant="body2" color="textSecondary">{proj.city}, {proj.state} {proj.country}</Typography> */}
                                                </Box>
                                            </Grid>
                                        </Grid>

                                        {
                                            proj.projectDescription.length === 0 ? null : 
                                            <Box sx={{marginTop:'0.5rem',position:'relative'}}>
                                                <Box sx={{position:'relative', height:'30px'}}>
                                                    <Box className={`${styles.iconBox}`}>
                                                        <FontAwesomeIcon icon={faClipboardList} className="centeralize" style={{fontSize:'1.2rem'}} />                                            
                                                    </Box>
                                                    <Typography variant="subtitle1">Project description</Typography>
                                                </Box>
                                                
                                                <ul >
                                                    {
                                                        proj.projectDescription.map((desc, idx) => (
                                                            <li key={idx}>
                                                                <Typography variant="body2" color="textSecondary">{desc}</Typography>
                                                            </li>
                                                        ))
                                                    }
                                                    <li>
                                                        <Typography variant="body2" sx={{display:'inline-block'}}>Technologies used:&nbsp;</Typography>
                                                        <Typography variant="body2" sx={{display:'inline-block'}} color="textSecondary">{proj.projectTechnologies.join(', ')}</Typography>
                                                    </li>
                                                </ul>
                                            </Box>
                                        }

                                        <Box sx={{position:'relative'}}>
                                            <ButtonBase className={`${styles.trashButton}`}>
                                                <FontAwesomeIcon icon={faTrash}/>
                                            </ButtonBase>
                                        </Box>
                                    </Box>
                                )
                            })
                        }                    
                    </Grid>)
                }




                
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

            <CustomDialog  
                open={dialogOpen} 
                title="Projects" 
                titleIcon={faLaptopCode} 
                close={() => setDialogOpen(false)}
                actionButtons={[{label: 'Save', clickAction: dialogClose}]}
                >
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
                                                    required={field.required}
                                                    {
                                                            ...                                                            
                                                            (() =>{
                                                                if(field.type === 'text') {
                                                                    if(field.name === 'projectDescription') 
                                                                        return { onKeyDown: addProjectDescription }
                                                                    else
                                                                        return { onBlur: (e: FocusEvent<Element>) => updateField(e, field.name) }
                                                                }
                                                                else if(field.type === 'date-picker') {
                                                                    return { onChange: (e: Dayjs) => updateField(e, field.name) }
                                                                }
                                                            })()                                                            
                                                    }
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

                        {
                            projectDescription.length === 0 ? 
                            (<Box sx={{textAlign:'center'}}>
                                <Typography variant="h6" color="textSecondary">No project description added</Typography>
                            </Box>) : (
                                <Box sx={{marginBottom:'1rem'}}>
                                    <Typography variant="subtitle1">Project Descriptions</Typography>
                                    <ul className={`${styles.timeline}`}>
                                        {
                                            projectDescription.map((desc, index) => (
                                                <li key={index}>
                                                    <Typography variant="body2">{desc}</Typography>
                                                </li>
                                            ))
                                        }                            
                                    </ul>
                                </Box>                                                                
                            )
                        }
                    </Grid>

                    <Grid size={12}>
                        <Grid size={12} sx={{padding:'0.5rem'}}>
                            <TextField fullWidth label="Technologies used" required onKeyDown={addProjectTechnology}/>
                        </Grid>
                    </Grid>

                    <Grid size={12} sx={{padding: '10px'}}>
                        {
                            projectTechnologies.length === 0 ? 
                            (<Box sx={{textAlign:'center'}}>
                                <Typography variant="h6" color="textSecondary">No technologies added</Typography>
                            </Box>) : (
                                <Grid sx={{marginBottom:'1rem'}} container gap={1}>
                                    {
                                        projectTechnologies.map((tech, index) => {
                                            return (
                                                <Grid container className={`${styles.techChip}`} key={index}>
                                                    <Grid size='grow' sx={{padding: '0.5rem'}}>
                                                        <Typography>{tech}</Typography>
                                                    </Grid>
                                                    <Grid className={`${styles.techAction}`}>
                                                        <ButtonBase className={`${styles.deleteBtn}`} >
                                                            <FontAwesomeIcon icon={faTrash} style={{fontSize:'1rem', color:'red'}} />
                                                        </ButtonBase>
                                                    </Grid>
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            )
                        }
                    </Grid>
                </Grid>
            </CustomDialog>
        </Grid>
    )
}

export default ProjectsSection