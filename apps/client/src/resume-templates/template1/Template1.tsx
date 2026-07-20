import type { FC, RefObject } from 'react';
import styles from './Template1.module.scss';
import { Box, Divider, Grid, Typography, } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useOutletContext } from 'react-router';
import Sidebar from './components/sidebar/Sidebar';
import Timeline from './components/timeline/Timeline';
import type { TemplateData } from '../../core/template-data/TemplateData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faGlobe, faLocationPin, faMobileAndroid } from '@fortawesome/free-solid-svg-icons';
import resumeStyles from "../shared/ResumeTemplate.module.scss";
import { faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

type OutletContextType = {
    setTemplateRef?: (ref: RefObject<null>) => void;
};

const Template1: FC = () => {

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
        // <Grid ref={contentRef} className={styles.template1} sx={(theme) => ({
        //     backgroundColor: theme.palette.background.default
        // })}>
        //     {/* Your HTML content that you want to convert to PDF */}
        //     <header>
        //         <Typography variant="h2">{resumeData.fullName}</Typography>
        //         <Typography variant="h6" sx={{textTransform: 'uppercase', marginTop: '0.5rem'}}>{resumeData.jobTitle}</Typography>
        //         <Divider sx={{margin: '1rem 0'}}/>
        //     </header>

        //     <Grid container sx={{padding: '0.5rem'}} gap={2}>
        //         <Sidebar 
        //             contactInfo={resumeData.contactInfo} 
        //             skills={resumeData.skills} 
        //             educationalData={resumeData.educationInfo}
        //         />
        //         <Timeline 
        //             summary={resumeData.summary}
        //             professionalExperience={resumeData.professionalExperience}
        //             projects={resumeData.projects}
        //             awardsAndCertifications={resumeData.awardsAndCertifications}
        //         />
        //     </Grid>
        // </Grid>

        <Grid ref={contentRef} sx={(theme) => ({
            backgroundColor: theme.palette.background.default
        })}>
            <Grid container sx={{ padding: '20px 30px' }}>
                <Grid sx={{ borderBottom: '1px solid', paddingBottom: '0.75rem' }} size={12} container gap={1}>
                    <Grid size="grow" container>
                        <Grid>
                            <Box sx={{ height: '30px', width: '30px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#1a1a1a', color: '#f5f5f5' }}>
                                <FontAwesomeIcon icon={faEnvelopeOpen} />
                            </Box>
                        </Grid>
                        <Grid size="grow" sx={{ position: 'relative' }}>
                            <Box sx={{ marginLeft: '0.25rem' }} className="vertical-center">
                                <Typography className={`${resumeStyles.resumeBody}`}>itsbibeksaini@gmail.com</Typography>
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
                                <Typography className={`${resumeStyles.resumeBody}`}>linkedin.com/in/itsbibeksaini/</Typography>
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
                                <Typography className={`${resumeStyles.resumeBody}`}>github.com/itsbibeksaini/</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid size="grow" container>
                        <Grid>
                            <Box sx={{ height: '30px', width: '30px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#1a1a1a', color: '#f5f5f5' }}>
                                <FontAwesomeIcon icon={faGlobe} />
                            </Box>
                        </Grid>
                        <Grid size="grow" sx={{ position: 'relative' }}>
                            <Box sx={{ marginLeft: '0.25rem' }} className="vertical-center">
                                <Typography className={`${resumeStyles.resumeBody}`}>itsbibeksaini.com</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid sx={{ padding: '20px 30px', borderBottom: '1px solid', paddingLeft: 0 }} container size={12}>
                    <Grid sx={{ width: '250px', border: '1px solid red' }}>
                        {/* Badge */}
                        <Box className={`${styles.profileBadge}`}>
                            <Box className={`${styles.hexClip}`}></Box>
                            <Box className={`${styles.badgeTag}`}>
                                <Typography className={`${styles.tagTitle}`}>RESUME</Typography>
                                <Divider sx={{ borderColor: '#f5f5f5' }} />
                                <Typography className={`${styles.tagInitials}`}>B | S</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size="grow" sx={{ padding: '20px 30px' }}>
                        <Grid size={12} container sx={{ borderBottom: '1px solid' }}>
                            <Grid size={8}>
                                <Typography sx={{ fontSize: '3rem' }} variant='body1'>BIBEK</Typography>
                                <Typography sx={{ fontSize: '3rem', fontWeight: 600, lineHeight: 0.5 }}>SAINI</Typography>
                                <Typography sx={{ fontSize: '1.5rem', textTransform: 'uppercase', lineHeight: '3.5', fontWeight: '100' }}>Java Fullstack Developer</Typography>
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
                                            <Typography className={`${resumeStyles.resumeBody}`} sx={{ whiteSpace: 'nowrap' }}>Toronto, ON</Typography>
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
                                            <Typography className={`${resumeStyles.resumeBody}`} sx={{ whiteSpace: 'nowrap' }}>+1 (416) 559-9209</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid size={12} sx={{ mt: '1rem' }}>
                            <Typography sx={{ fontSize: '1.3rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }}>HIGHLIGHTS</Typography>
                            <Box sx={{ mt: '0.5rem' }}>
                                <Typography className={`${styles.resumeBody}`}><strong>8+ Years of Cloud Engineering:</strong> Led end-to-end design and deployment of enterprise-scale distributed systems.</Typography>
                                <Typography className={`${styles.resumeBody}`}><strong>Java & Kotlin Expert:</strong> Built high-throughput microservices using advanced Java 17+, Kotlin, and Spring Boot.</Typography>
                                <Typography className={`${styles.resumeBody}`}><strong>Event-Driven Architect:</strong> Engineered highly scalable asynchronous systems using Apache Kafka for real-time processing.</Typography>
                                <Typography className={`${styles.resumeBody}`}><strong>Technical Team Leader:</strong> Mentored cross-functional engineering teams while spearheading delivery in Agile environments.</Typography>
                                <Typography className={`${styles.resumeBody}`}><strong>Secure API Specialist:</strong> Designed resilient RESTful APIs integrated with enterprise-grade Spring Security protocols.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid size={12} container>
                    <Grid sx={{ width: '250px', padding: '20px 30px', paddingLeft: '0' }}>
                        <Typography sx={{ fontSize: '1.3rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }}>Skills</Typography>
                        <Divider sx={{ border: '1px solid' }} />
                    </Grid>
                    <Grid sx={{ borderLeft: '1px solid', padding: '20px 30px', paddingRight: 0 }} size="grow">
                        <Typography sx={{ fontSize: '1.3rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }}>Work Hirtory</Typography>
                        <Divider sx={{ border: '1px solid' }} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default Template1;