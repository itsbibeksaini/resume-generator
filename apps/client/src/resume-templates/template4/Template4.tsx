import { faBriefcase, faEnvelopeOpen, faGlobe, faGraduationCap, faLaptopCode, faLocationPin, faMobileAndroid, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import type { FC } from "react";
import resumeStyles from "../shared/ResumeTemplate.module.scss";
import { faGithub, faLinkedin, faUpwork } from "@fortawesome/free-brands-svg-icons";
import styles from './Template4.module.scss';
import portfolioQR from '../../assets/portfolio-QR.png';
import { DUMMY_DATA } from "../../core/template-data/TemplateData";
import parse from 'html-react-parser';

const Template4: FC = () => {
    return (
        <Grid sx={(theme) => ({
            backgroundColor: theme.palette.background.default,


        })} size={12}>
            <Grid container >
                <Grid sx={{ borderBottom: '1px solid', paddingBottom: '0.75rem' }} size={12} container gap={8}>
                    <Grid size="grow" container>
                        <Grid>
                            <Box sx={{ height: '30px', width: '30px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#1a1a1a', color: '#f5f5f5' }}>
                                <FontAwesomeIcon icon={faEnvelopeOpen} />
                            </Box>
                        </Grid>
                        <Grid size="grow" sx={{ position: 'relative' }}>
                            <Box sx={{ marginLeft: '0.25rem' }} className="vertical-center">
                                <Typography className={`${resumeStyles.resumeBody}`}>{DUMMY_DATA.contactInfo.email}</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid size="grow" container>
                        <Grid>
                            <Box sx={{ height: '30px', width: '30px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#1a1a1a', color: '#f5f5f5' }}>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </Box>
                        </Grid>
                        <Grid size="grow" sx={{ position: 'relative' }}>
                            <Box sx={{ marginLeft: '0.25rem' }} className="vertical-center">
                                <Typography className={`${resumeStyles.resumeBody}`}>{DUMMY_DATA.contactInfo.linkedin}</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid size="grow" container>
                        <Grid>
                            <Box sx={{ height: '30px', width: '30px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#1a1a1a', color: '#f5f5f5' }}>
                                <FontAwesomeIcon icon={faGithub} />
                            </Box>
                        </Grid>
                        <Grid size="grow" sx={{ position: 'relative' }}>
                            <Box sx={{ marginLeft: '0.25rem' }} className="vertical-center">
                                <Typography className={`${resumeStyles.resumeBody}`}>{DUMMY_DATA.contactInfo.github}</Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid size="grow" container>
                        <Grid>
                            <Box sx={{ height: '30px', width: '30px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#1a1a1a', color: '#f5f5f5' }}>
                                <FontAwesomeIcon icon={faGlobe} />
                            </Box>
                        </Grid>
                        <Grid sx={{ position: 'relative' }}>
                            <Box sx={{ marginLeft: '0.25rem' }} className="vertical-center">
                                <Typography className={`${resumeStyles.resumeBody}`}>{DUMMY_DATA.contactInfo.website}</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>



                <Grid sx={{ padding: '5px 0px', borderBottom: '1px solid' }} container size={12}>
                    <Grid sx={{ width: '220px' }}>
                        {/* Badge */}
                        <Box className={`${styles.profileBadge}`}>
                            <Box className={`${styles.hexClip}`}></Box>
                            <Box className={`${styles.badgeTag}`}>
                                <Typography className={`${styles.tagTitle}`}>RESUME</Typography>
                                <Divider sx={{ borderColor: '#f5f5f5' }} />
                                <Typography className={`${styles.tagInitials}`}>B | S</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ padding: '10px 20px', textAlign: 'center' }}>
                            <Typography className={`${resumeStyles.resumeBody}`}>Scan the QR code and see my Portfolio</Typography>
                            <Box sx={{ width: '180px', height: '180px' }}>
                                <img src={portfolioQR} alt="" style={{ width: '100%', height: '100%' }} />
                            </Box>
                        </Box>
                    </Grid>

                    <Grid size="grow" sx={{ padding: '20px 30px', paddingRight: 0, pb: 0 }}>
                        <Grid size={12} container sx={{ borderBottom: '1px solid' }}>
                            <Grid size={8}>
                                <Typography sx={{ fontSize: '3rem' }} variant='body1'>{DUMMY_DATA.fullName.split(' ')[0]}</Typography>
                                <Typography sx={{ fontSize: '3rem', fontWeight: 600, lineHeight: 0.5 }}>{DUMMY_DATA.fullName.split(' ')[1]}</Typography>
                                <Typography sx={{ fontSize: '1rem', textTransform: 'uppercase', lineHeight: '3.5', fontWeight: '100' }}>{DUMMY_DATA.jobTitle}</Typography>
                            </Grid>
                            <Grid sx={{ borderLeft: '1px solid', padding: '1.7rem' }}>
                                <Grid size="grow" container>
                                    <Grid>
                                        <Box sx={{ height: '30px', width: '30px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#1a1a1a', color: '#f5f5f5' }}>
                                            <FontAwesomeIcon icon={faLocationPin} />
                                        </Box>
                                    </Grid>
                                    <Grid size="grow" sx={{ position: 'relative' }}>
                                        <Box sx={{ marginLeft: '0.25rem' }} className="vertical-center">
                                            <Typography className={`${resumeStyles.resumeBody}`} sx={{ whiteSpace: 'nowrap' }}>{DUMMY_DATA.contactInfo.location}</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid size="grow" container sx={{ marginTop: '0.75rem' }}>
                                    <Grid>
                                        <Box sx={{ height: '30px', width: '30px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#1a1a1a', color: '#f5f5f5' }}>
                                            <FontAwesomeIcon icon={faMobileAndroid} />
                                        </Box>
                                    </Grid>
                                    <Grid size="grow" sx={{ position: 'relative' }}>
                                        <Box sx={{ marginLeft: '0.25rem' }} className="vertical-center">
                                            <Typography className={`${resumeStyles.resumeBody}`} sx={{ whiteSpace: 'nowrap' }}>{DUMMY_DATA.contactInfo.phone}</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid size={12} sx={{ mt: '1rem' }}>
                            <Typography sx={{ fontSize: '1.3rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }}>HIGHLIGHTS</Typography>
                            <Box sx={{ mt: '0.5rem' }}>
                                {/* <Typography className={`${resumeStyles.resumeBody}`}><strong>8+ Years of Cloud Engineering:</strong> Led end-to-end design and deployment of enterprise-scale distributed systems.</Typography>
                                <Typography className={`${resumeStyles.resumeBody}`}><strong>Java & Kotlin Expert:</strong> Built high-throughput microservices using advanced Java 17+, Kotlin, and Spring Boot.</Typography>
                                <Typography className={`${resumeStyles.resumeBody}`}><strong>Event-Driven Architect:</strong> Engineered highly scalable asynchronous systems using Apache Kafka for real-time processing.</Typography>
                                <Typography className={`${resumeStyles.resumeBody}`}><strong>Technical Team Leader:</strong> Mentored cross-functional engineering teams while spearheading delivery in Agile environments.</Typography>
                                <Typography className={`${resumeStyles.resumeBody}`}><strong>Secure API Specialist:</strong> Designed resilient RESTful APIs integrated with enterprise-grade Spring Security protocols.</Typography> */}

                                {
                                    DUMMY_DATA.summary?.map((item, index) => (
                                        <Typography key={index} className={`${resumeStyles.resumeBody}`} sx={{ '&:not(:last-of-type)': { mb: '0.5rem' } }}>{parse(item)}</Typography>
                                    ))
                                }
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid sx={{ padding: '10px 0px' }} container size={12}>
                    <Grid sx={{}} container>
                        <Grid sx={{ position: 'relative', width: '22px' }}>
                            <Box className="vertical-center" >
                                <FontAwesomeIcon icon={faScrewdriverWrench} />
                            </Box>
                        </Grid>
                        <Grid >
                            <Typography sx={{ fontSize: '1.3rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }}>Skills</Typography>
                        </Grid>
                    </Grid>

                    <TableContainer sx={{ ml: '0.45rem' }}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ width: '225px' }}>
                                        <Typography className={`${resumeStyles.resumeHeading}`}>Category</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography className={`${resumeStyles.resumeHeading}`}>Skills</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody  >
                                {
                                    DUMMY_DATA.skills?.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <Typography className={`${resumeStyles.resumeBody}`} sx={{ fontWeight: '600' }}>{item.category}</Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography className={`${resumeStyles.resumeBody}`}>{item.skills?.join(", ")}</Typography>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

                <Grid size={12} container>
                    <Grid sx={{ width: '250px', padding: '20px 30px', paddingLeft: '0' }}>
                        {/* <Grid sx={{ borderBottom: '1px solid' }} container>
                            <Grid sx={{ position: 'relative', width: '22px' }}>
                                <Box className="vertical-center" >
                                    <FontAwesomeIcon icon={faScrewdriverWrench} />
                                </Box>
                            </Grid>
                            <Grid >
                                <Typography sx={{ fontSize: '1.3rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }}>Skills</Typography>
                            </Grid>
                        </Grid>

                        {
                            DUMMY_DATA.skills?.map((item, index) => (
                                <Box key={index} sx={{ mt: '1rem', ml: 1, pl: 1.5, borderLeft: '3px solid' }}>
                                    <Typography className={`${resumeStyles.resumeHeading}`} >{item.category}</Typography>
                                    <Grid container sx={{ padding: '0.5rem 0' }} gap={1.3}>
                                        {item?.skills?.map((skill, idx) => (
                                            <Grid key={idx} sx={{ border: '1px solid', padding: '0.25rem' }}>
                                                <Typography className={`${resumeStyles.resumeBody}`} >{skill}</Typography>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            ))
                        } */}



                        <Grid sx={{ borderBottom: '1px solid' }} container>
                            <Grid sx={{ position: 'relative', width: '22px' }}>
                                <Box className="vertical-center" >
                                    <FontAwesomeIcon icon={faGraduationCap} />
                                </Box>
                            </Grid>
                            <Grid >
                                <Typography sx={{ fontSize: '1.3rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }}>Education</Typography>
                            </Grid>
                        </Grid>

                        {
                            DUMMY_DATA.educationInfo.map((item, index) => (
                                <Box key={index} sx={{ mt: '1rem', ml: 1, pl: 1.5, borderLeft: '3px solid' }}>
                                    <Typography className={`${resumeStyles.resumeHeading}`} sx={{ textTransform: 'none' }}>{item.schoolName}</Typography>
                                    <Typography className={`${resumeStyles.resumeSubHeading}`} sx={{ lineHeight: '1.5 !important' }}>{item.city} - {item.state}</Typography>
                                    <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary" >{item.course}</Typography>
                                    <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary" >{item.startDate} - {item.completionDate}</Typography>
                                </Box>
                            ))
                        }
                    </Grid>
                    <Grid sx={{ borderLeft: '1px solid', padding: '20px 30px', paddingRight: 0 }} size="grow">
                        <Grid sx={{ borderBottom: '1px solid' }} container>
                            <Grid sx={{ position: 'relative', width: '22px' }}>
                                <Box className="vertical-center" sx={{ left: '-7px' }}>
                                    <FontAwesomeIcon icon={faBriefcase} />
                                </Box>
                            </Grid>
                            <Grid sx={{ marginLeft: '-5px' }}>
                                <Typography sx={{ fontSize: '1.3rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }}>Work Hirtory</Typography>
                            </Grid>
                        </Grid>

                        <Box className={`${styles.timeline}`}>
                            {
                                DUMMY_DATA.professionalExperience.map((item, index) => (
                                    <Box key={index} className={`${styles.event}`}>
                                        <Grid container>
                                            <Grid size="grow">
                                                <Typography className={`${resumeStyles.resumeHeading}`} sx={{ fontWeight: 600 }}>{item.jobPosition}</Typography>
                                                <Typography className={`${resumeStyles.resumeSubHeading}`} sx={{ fontStyle: 'italic' }}>{item.companyName}</Typography>
                                            </Grid>
                                            <Grid sx={{ textAlign: 'right' }}>
                                                <Box>
                                                    <Typography className={`${resumeStyles.resumeBody}`}>{item.startDate} - {item.endDate}</Typography>
                                                    <Typography className={`${resumeStyles.resumeBody}`}>{item.city}, {item.state}</Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                        <ul className={`${styles.points}`}>
                                            {item?.responsibilities?.map((description, idx) => (
                                                <li key={idx}>
                                                    <Typography className={`${resumeStyles.resumeBody}`}>{description}</Typography>
                                                </li>
                                            ))}
                                        </ul>

                                    </Box>
                                ))
                            }

                        </Box>

                        <Grid sx={{ borderBottom: '1px solid', mt: 1.5 }} container>
                            <Grid sx={{ position: 'relative', width: '22px' }}>
                                <Box className="vertical-center" sx={{ left: '-7px' }}>
                                    <FontAwesomeIcon icon={faLaptopCode} />
                                </Box>
                            </Grid>
                            <Grid sx={{ marginLeft: '-5px' }}>
                                <Typography sx={{ fontSize: '1.3rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }}>Projects</Typography>
                            </Grid>
                        </Grid>

                        <Box className={`${styles.timeline}`}>

                            {
                                DUMMY_DATA.projects.map((item, index) => (
                                    <Box key={index} className={`${styles.event}`}>
                                        <Typography className={`${resumeStyles.resumeHeading}`} sx={{ fontWeight: 600 }}>{item.projectName}</Typography>
                                        <Typography className={`${resumeStyles.resumeSubHeading}`} sx={{ fontStyle: 'italic' }}>{item.subtitle}</Typography>
                                        <ul className={`${styles.points}`}>
                                            {item?.projectDescription?.map((description, idx) => (
                                                <li key={idx}>
                                                    <Typography className={`${resumeStyles.resumeBody}`}>{description}</Typography>
                                                </li>
                                            ))}
                                        </ul>
                                        <Box sx={{ marginTop: '0.5rem' }}>
                                            <Typography className={`${resumeStyles.resumeBody}`} color="textSecondary" sx={{ fontStyle: 'italic' }}><strong>Technologies:</strong> {item.projectTechnologies.join(', ')}</Typography>
                                        </Box>
                                    </Box>
                                ))
                            }

                        </Box>

                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    );
};

export default Template4;