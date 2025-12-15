import { useRef, useState, type FC } from "react"
import styles from './ProjectsSection.module.scss'
import sharedStyles from '../shared/DetailsPannelShared.module.scss'
import { Box, Button, ButtonBase, Divider, Grid, IconButton, TextField, Typography } from "@mui/material"
import CustomDialog from "../../../shared/dialogs/layout/CustomDialog"
import { faClipboardList, faLaptopCode, faTrash } from "@fortawesome/free-solid-svg-icons"
import type { ProjectInfo } from "../../../../core/template-data/TemplateData"
import SectionRenderer, { type SectionRendererHandle } from "../../../../core/dynamic-fields/renderers/SectionRenderer"
import { PROJECT_DETAILS } from "../../../../core/dynamic-fields/sections/project-details"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type ProjectsSectionProps = {
    callback: (newProject: ProjectInfo[]) => void,
    hasError: boolean
}

const ProjectsSection: FC<ProjectsSectionProps> = (props: ProjectsSectionProps) => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [projects, setProjects] = useState<ProjectInfo[]>([]);
    const childRef = useRef<SectionRendererHandle>(null);

    const dialogClose = () => {

        let isValid = childRef.current?.validate()

        if (!isValid) {
            return
        }

        let projectData = childRef.current?.getDataValue() as ProjectInfo

        setProjects((prev) => [...prev, projectData])
        props.callback([...projects, projectData])
        setDialogOpen(false)
    }

    const deleteProject = (index: number) => {
        let updatedData = [...projects]

        updatedData.splice(index, 1)
        setProjects(updatedData)
    }

    return (
        <Grid className={`${styles.section}`}>
            <Box className={`${sharedStyles.errorBox} ${props.hasError ? sharedStyles.showError + ' shake' : ''}`}>
                <Box>
                    <Typography variant="h6">Projects</Typography>
                </Box>

                <Grid container className={`${styles.row}`}>

                    {
                        projects.length === 0 ?
                            <Grid container className={`${styles.row}`}>
                                <Grid sx={{ textAlign: 'center' }} size={12}>
                                    <Typography variant="h6" color={props.hasError ? "error" : "textSecondary"}>No project added</Typography>
                                </Grid>
                            </Grid> :
                            <Grid className={`${styles.timeline}`} sx={{ marginLeft: '1rem' }} size={12}>
                                {
                                    projects.map((proj, index) => {

                                        return (
                                            <Box key={index} sx={{ marginBottom: '1rem' }} className={`${styles.timelineEvent}`}>
                                                <Grid className={`${styles.eventHeader}`} container>
                                                    <Grid size='auto'>
                                                        <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>{proj.projectName}</Typography>
                                                        <Typography variant="subtitle1">{proj.subtitle}</Typography>
                                                    </Grid>
                                                    <Grid size='grow'>
                                                        <Box className={`vertical-center`} sx={{ right: 0 }}>
                                                            <Typography variant="body2" color="textSecondary">{proj.startDate} - {proj.endDate}</Typography>
                                                            {/* <Typography variant="body2" color="textSecondary">{proj.city}, {proj.state} {proj.country}</Typography> */}
                                                        </Box>
                                                    </Grid>
                                                </Grid>

                                                {
                                                    proj.projectDescription.length === 0 ? null :
                                                        <Box sx={{ marginTop: '0.5rem', position: 'relative' }}>
                                                            <Box sx={{ position: 'relative', height: '30px' }}>
                                                                <Box className={`${styles.iconBox}`}>
                                                                    <FontAwesomeIcon icon={faClipboardList} className="centeralize" style={{ fontSize: '1.2rem' }} />
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
                                                                    <Typography variant="body2" sx={{ display: 'inline-block' }}>Technologies used:&nbsp;</Typography>
                                                                    <Typography variant="body2" sx={{ display: 'inline-block' }} color="textSecondary">{proj.projectTechnologies.join(', ')}</Typography>
                                                                </li>
                                                            </ul>
                                                        </Box>
                                                }

                                                <Box sx={{ position: 'relative' }}>
                                                    <IconButton className={`${styles.trashButton}`} size="small" color="error" onClick={() => deleteProject(index)}>
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </IconButton>
                                                </Box>
                                            </Box>
                                        )
                                    })
                                }
                            </Grid>
                    }

                </Grid>

                <Grid container className={`${styles.row}`}>
                    <Grid sx={{ textAlign: 'center' }} size={12}>
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

                <Grid className={`${sharedStyles.errorMessageBox}`} gap={0.25}>
                    <Grid >
                        <Typography color="textPrimary">Looks like you skipped this step! Add one or two professional experience for your resume.</Typography>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ padding: '10px', margin: '1rem 0' }}>
                <Divider />
            </Box>

            <CustomDialog
                open={dialogOpen}
                title="Projects"
                titleIcon={faLaptopCode}
                close={() => setDialogOpen(false)}
                actionButtons={[{ label: 'Save', clickAction: dialogClose }]}
            >
                <Grid sx={{ padding: '20px 30px' }} size={12} container>
                    <SectionRenderer ref={childRef} section={PROJECT_DETAILS} />
                </Grid>
            </CustomDialog>

        </Grid>
    )
}

export default ProjectsSection