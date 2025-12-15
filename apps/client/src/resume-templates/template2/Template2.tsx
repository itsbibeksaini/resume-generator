import { Box, Divider, Grid, Grow, Typography } from "@mui/material";
import { useEffect, useRef, useState, type FC, type RefObject } from "react";
import styles from './Template2.module.scss'
import resumeStyles from '../shared/ResumeTemplate.module.scss';
import { useLocation, useOutletContext } from "react-router";
import type { TemplateData } from "../../core/template-data/TemplateData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faBriefcase, faEnvelopeOpen, faGlobe, faGraduationCap, faIdBadge, faLaptopCode, faLocationPin, faMobileAlt, faScrewdriverWrench, faStar } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

type OutletContextType = {
    setTemplateRef?: (ref: RefObject<null>) => void;
};

const Template2: FC = () => {

    const location = useLocation();

    const [resumeData] = useState<TemplateData>(location.state);

    const contentRef = useRef(null);

    const { setTemplateRef } = useOutletContext<OutletContextType>();

    useEffect(() => {
        if (setTemplateRef) {
            setTemplateRef(contentRef);
        }
    }, [setTemplateRef]);

    return (
        <Grid ref={contentRef} className={`${styles.template2}`} container gap={1} sx={(theme) => ({
            backgroundColor: theme.palette.background.default
        })}>
            {/* SideBar */}
            <Grid sx={{ width: '250px' }}>
                <header>
                    <Typography sx={{ fontSize: '4rem', lineHeight: '1.1 !important' }}>{resumeData.fullName}</Typography>
                    <Typography className={`${resumeStyles.resumeHeading}`} sx={{ lineHeight: '1.2 !important', marginTop: '0.30rem' }}>{resumeData.jobTitle}</Typography>
                    {/* <Typography className={`${resumeStyles.resumeBody}`} sx={{marginTop:'0.5rem'}}>{resumeData.contactInfo.location}</Typography> */}
                    <Divider variant="middle" sx={{ margin: '1rem 0' }} />
                </header>

                <Grid sx={{ padding: '0 0.5rem', marginBottom: '1.5rem' }}>
                    <Grid container gap={1}>
                        <Grid sx={{ position: 'relative' }} size={1}>
                            <FontAwesomeIcon icon={faIdBadge} />
                        </Grid>
                        <Grid size='grow'>
                            <Typography className={`${resumeStyles.resumeHeading}`}>contact information</Typography>
                        </Grid>
                        <Grid size={12}>
                            <Divider sx={{ margin: '0 0.5rem' }} />
                        </Grid>
                    </Grid>
                    <Grid container gap={1} sx={{ marginTop: '0.5rem' }}>
                        <Grid sx={{ position: 'relative' }} size={1}>
                            <FontAwesomeIcon icon={faLocationPin} />
                        </Grid>
                        <Grid size='grow'>
                            <Typography className={`${resumeStyles.resumeBody}`}>{resumeData.contactInfo.location}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container gap={1} sx={{ marginTop: '0.5rem' }}>
                        <Grid sx={{ position: 'relative' }} size={1}>
                            <FontAwesomeIcon icon={faMobileAlt} />
                        </Grid>
                        <Grid size='grow'>
                            <Typography className={`${resumeStyles.resumeBody}`}>{resumeData.contactInfo.phone}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container gap={1} sx={{ marginTop: '0.5rem' }}>
                        <Grid sx={{ position: 'relative' }} size={1}>
                            <FontAwesomeIcon icon={faEnvelopeOpen} />
                        </Grid>
                        <Grid size='grow'>
                            <Typography className={`${resumeStyles.resumeBody}`}>{resumeData.contactInfo.email}</Typography>
                        </Grid>
                    </Grid>
                    {resumeData.contactInfo.linkedin && (
                        <Grid container gap={1} sx={{ marginTop: '0.5rem' }}>
                            <Grid sx={{ position: 'relative' }} size={1}>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </Grid>
                            <Grid size='grow'>
                                <Typography className={`${resumeStyles.resumeBody}`}>{resumeData.contactInfo.linkedin}</Typography>
                            </Grid>
                        </Grid>
                    )}
                    {resumeData.contactInfo.github && (
                        <Grid container gap={1} sx={{ marginTop: '0.5rem' }}>
                            <Grid sx={{ position: 'relative' }} size={1}>
                                <FontAwesomeIcon icon={faGithub} />
                            </Grid>
                            <Grid size='grow'>
                                <Typography className={`${resumeStyles.resumeBody}`}>{resumeData.contactInfo.github}</Typography>
                            </Grid>
                        </Grid>
                    )}
                    {resumeData.contactInfo.website && (
                        <Grid container gap={1} sx={{ marginTop: '0.5rem' }}>
                            <Grid sx={{ position: 'relative' }} size={1}>
                                <FontAwesomeIcon icon={faGlobe} />
                            </Grid>
                            <Grid size='grow'>
                                <Typography className={`${resumeStyles.resumeBody}`}>{resumeData.contactInfo.website}</Typography>
                            </Grid>
                        </Grid>
                    )}
                </Grid>

                <Grid sx={{ padding: '0 0.5rem', marginBottom: '1.5rem' }}>
                    <Grid container gap={1}>
                        <Grid sx={{ position: 'relative' }} size={1}>
                            <FontAwesomeIcon icon={faScrewdriverWrench} />
                        </Grid>
                        <Grid size='grow'>
                            <Typography className={`${resumeStyles.resumeHeading}`}>skills</Typography>
                        </Grid>
                        <Grid size={12}>
                            <Divider sx={{ margin: '0.25rem 0.5rem' }} />
                        </Grid>
                        <Grid container size={12} gap={1}>
                            {
                                resumeData.skills?.map((skill, index) => {
                                    return (
                                        <Grid size='auto' className={`${styles.skill}`} key={index}>
                                            <Typography className={`${resumeStyles.resumeBody}`}>{skill}</Typography>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                </Grid>

                <Grid sx={{ padding: '0 0.5rem' }}>
                    <Grid container gap={1}>
                        <Grid sx={{ position: 'relative' }} size={1}>
                            <FontAwesomeIcon icon={faGraduationCap} />
                        </Grid>
                        <Grid size='grow'>
                            <Typography className={`${resumeStyles.resumeHeading}`}>education</Typography>
                        </Grid>
                        <Grid size={12}>
                            <Divider sx={{ margin: '0 0.5rem' }} />
                        </Grid>
                        <Grid gap={1} className={`${styles.educationalSection}`} size={12}>
                            {
                                resumeData.educationInfo.length === 0 && <Typography>No educational Data</Typography>
                            }
                            {
                                resumeData.educationInfo.map((data, index) => {
                                    return (
                                        <Grid className={`${styles.education}`} size={12} key={index}>
                                            <Typography className={`${resumeStyles.resumeHeading}`} sx={{ textTransform: 'none' }}>{data.schoolName}</Typography>
                                            <Typography className={`${resumeStyles.resumeSubHeading}`} sx={{ lineHeight: '1.5 !important' }}>{data.city} {data.state} - {data.country}</Typography>
                                            <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary" >{data.course}</Typography>
                                            <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary" >{data.startDate} - {data.completionDate}</Typography>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid>
                <Divider orientation="vertical" variant="middle" />
            </Grid>
            <Grid size='grow' >
                <Grid sx={{ padding: '10px 15px' }}>
                    <Box className={`${styles.timeline}`}>
                        <Box className={`${styles.heading}`}>
                            <Box className={`${styles.headingIcon}`}>
                                <FontAwesomeIcon icon={faStar} />
                            </Box>
                            <Typography className={`${resumeStyles.resumeHeading}`}>summary</Typography>
                            <Divider sx={{ margin: '0.75rem 0' }} />
                        </Box>
                        <ul>

                            {
                                resumeData.summary.map((data, index) => {
                                    return (
                                        <li key={index}>
                                            <Typography className={`${resumeStyles.resumeBody}`}>{data}</Typography>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </Box>
                </Grid>
                <Grid sx={{ padding: '10px 15px' }}>
                    <Box className={`${styles.timeline}`}>
                        <Box className={`${styles.heading}`}>
                            <Box className={`${styles.headingIcon}`}>
                                <FontAwesomeIcon icon={faBriefcase} />
                            </Box>
                            <Typography className={`${resumeStyles.resumeHeading}`}>professional summary</Typography>
                            <Divider sx={{ margin: '0.75rem 0' }} />
                        </Box>
                        {
                            resumeData.professionalExperience.map((exp, index) => {
                                return (
                                    <Box className={`${styles.subSection}`} key={index}>
                                        <Grid className={`${styles.subSectionHeading}`} container>
                                            <Grid size='grow'>
                                                <Typography className={`${resumeStyles.resumeHeading}`} sx={{ textTransform: 'none' }}>{exp.jobPosition}</Typography>
                                                <Typography className={`${resumeStyles.resumeSubHeading}`} sx={{ marginTop: '0.5rem' }}>{exp.companyName}</Typography>
                                            </Grid>
                                            <Grid sx={{ textAlign: 'right' }}>
                                                <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary">{exp.startDate} - {exp.endDate}</Typography>
                                                <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary">{exp.city} {exp.state}, {exp.country}</Typography>
                                            </Grid>
                                        </Grid>
                                        <ul>
                                            {
                                                exp.responsibilities.map((resp, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary">{resp}</Typography>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <Box className={`${styles.achievements}`}>
                                            <Box className={`${styles.achievementIcon}`}>
                                                <FontAwesomeIcon icon={faAward} />
                                            </Box>
                                            <Typography className={`${resumeStyles.resumeHeading}`} sx={{ textTransform: 'none' }}>Achievements</Typography>

                                        </Box>
                                        <ul>
                                            {
                                                exp.achievements.map((ach, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary">{ach}</Typography>
                                                        </li>
                                                    )
                                                })
                                            }

                                        </ul>

                                    </Box>
                                )
                            })
                        }
                    </Box>
                </Grid>
                <Grid sx={{ padding: '10px 15px' }}>
                    <Box className={`${styles.timeline}`}>
                        <Box className={`${styles.heading}`}>
                            <Box className={`${styles.headingIcon}`}>
                                <FontAwesomeIcon icon={faLaptopCode} />
                            </Box>
                            <Typography className={`${resumeStyles.resumeHeading}`}>project</Typography>
                            <Divider sx={{ margin: '0.75rem 0' }} />
                        </Box>
                        {
                            resumeData.projects.map((project, index) => {
                                return (
                                    <Box className={`${styles.subSection}`} key={index}>
                                        <Grid className={`${styles.subSectionHeading}`} container>
                                            <Grid size='grow'>
                                                <Typography className={`${resumeStyles.resumeHeading}`} sx={{ textTransform: 'none' }}>{project.projectName}</Typography>
                                                <Typography className={`${resumeStyles.resumeSubHeading}`} sx={{ marginTop: '0.5rem' }}>{project.subtitle}</Typography>
                                            </Grid>
                                            <Grid sx={{ textAlign: 'right' }}>
                                                <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary">{project.startDate} - {project.endDate}</Typography>
                                                {/* <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary">{exp.city} {exp.state}, {exp.country}</Typography> */}
                                            </Grid>
                                        </Grid>
                                        <ul>
                                            {
                                                project.projectDescription.map((desc, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary">{desc}</Typography>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <Box sx={{ marginTop: '0.5rem', marginLeft: '1rem' }}>
                                            <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary" sx={{ fontStyle: 'italic' }}><strong>Technologies:</strong> {project.projectTechnologies.join(', ')}</Typography>
                                        </Box>
                                    </Box>
                                )
                            })
                        }
                    </Box>
                </Grid>
                {
                    resumeData.awardsAndCertifications && resumeData.awardsAndCertifications?.length > 0 && (
                        <Grid sx={{ padding: '10px 15px' }}>
                            <Box className={`${styles.timeline}`}>
                                <Box className={`${styles.heading}`}>
                                    <Box className={`${styles.headingIcon}`}>
                                        <FontAwesomeIcon icon={faAward} />
                                    </Box>
                                    <Typography className={`${resumeStyles.resumeHeading}`}>awards & certifications</Typography>
                                    <Divider sx={{ margin: '0.75rem 0' }} />
                                </Box>
                                {
                                    resumeData.awardsAndCertifications?.map((award, index) => {
                                        return (
                                            <Box className={`${styles.subSection}`} key={index}>
                                                <Grid className={`${styles.subSectionHeading}`} container>
                                                    <Grid size='grow'>
                                                        <Typography className={`${resumeStyles.resumeHeading}`} sx={{ textTransform: 'none' }}>{award.title}</Typography>
                                                        <Typography className={`${resumeStyles.resumeSubHeading}`} sx={{ marginTop: '0.5rem' }}>{award.issuer}</Typography>
                                                    </Grid>
                                                    <Grid sx={{ textAlign: 'right' }}>
                                                        <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary">{award.issueDate} {award.expirationDate ? `- ${award.expirationDate}` : ''}</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                        </Grid>
                    )}
            </Grid>
        </Grid>
    )
}

export default Template2