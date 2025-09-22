import type { FC } from 'react';
import styles from './Template1.module.scss';
import resumeStyles from '../shared/ResumeTemplate.module.scss';
import { Box, Button, Divider, Grid, Typography, } from '@mui/material';
import { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faBriefcase, faEnvelopeOpen, faGlobe, faGraduationCap, faIdBadge, faLaptopCode, faLocationPin, faMobileAlt, faScrewdriverWrench, faStar, faWrench } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Template1: FC = () => {

    const contentRef = useRef(null);

    const pdfOptions: any = {
        filename: 'my-document.pdf',        
        image: { type: "jpeg" as "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        margin: 16,
        jsPDF: { unit: 'px', format: 'letter', orientation: 'portrait', hotfixes: ["px_scaling"] },
        
    }

    const convertToPdf = () => {    
        const content = contentRef.current;
        if (!content) return;
        html2pdf().set(pdfOptions).from(content).save();
    }


    return (
       <div style={{width:'1440px', position:'relative', height:'100vh', overflowY:'auto'}}>
            <Grid ref={contentRef} className={styles.template1}>
                {/* Your HTML content that you want to convert to PDF */}
                <header>
                    <Typography variant="h2">Bibek Saini</Typography>
                    <Typography variant="h6" sx={{textTransform: 'uppercase', marginTop: '0.5rem'}}>Senior fullstack software engineer</Typography>
                    <Divider sx={{margin: '1rem 0'}}/>
                </header>

                <Grid container sx={{padding: '0.5rem'}} gap={2}>
                    <Grid sx={{width:'250px'}}>
                        <Box sx={{border:'1px solid #ccc', padding:'10px', marginBottom:'1rem', backgroundColor:'#f5f5f5', borderRadius:'0.25rem'}}>
                            <Grid container gap={1}>
                                <Grid sx={{position:'relative'}} size={1}>
                                    <FontAwesomeIcon icon={faIdBadge}/>
                                </Grid>
                                <Grid  size='grow'>
                                    <Typography className={`${resumeStyles.resumeHeading}`}>contact information</Typography>
                                </Grid>
                                <Grid size={12}>
                                    <Divider sx={{margin: '0.25rem 0.5rem'}} />
                                </Grid>
                            </Grid>
                            <Grid container gap={1} sx={{marginTop:'0.5rem'}}>
                                <Grid sx={{position:'relative'}} size={1}>
                                    <FontAwesomeIcon icon={faLocationPin}/>
                                </Grid>
                                <Grid  size='grow'>
                                    <Typography className={`${resumeStyles.resumeBody}`}>Toronto Ontario, Canada N5V - OC2</Typography>
                                </Grid>
                            </Grid>
                            <Grid container gap={1} sx={{marginTop:'0.5rem'}}>
                                <Grid sx={{position:'relative'}} size={1}>
                                    <FontAwesomeIcon icon={faMobileAlt}/>
                                </Grid>
                                <Grid  size='grow'>
                                    <Typography className={`${resumeStyles.resumeBody}`}>+1 (123) 456-7890</Typography>
                                </Grid>
                            </Grid>
                            <Grid container gap={1} sx={{marginTop:'0.5rem'}}>
                                <Grid sx={{position:'relative'}} size={1}>
                                    <FontAwesomeIcon icon={faEnvelopeOpen}/>
                                </Grid>
                                <Grid  size='grow'>
                                    <Typography className={`${resumeStyles.resumeBody}`}>example@example.com</Typography>
                                </Grid>
                            </Grid>
                            <Grid container gap={1} sx={{marginTop:'0.5rem'}}>
                                <Grid sx={{position:'relative'}} size={1}>
                                    <FontAwesomeIcon icon={faLinkedin}/>
                                </Grid>
                                <Grid  size='grow'>
                                    <Typography className={`${resumeStyles.resumeBody}`}>linkedin.com/in/yourprofile</Typography>
                                </Grid>
                            </Grid>
                            <Grid container gap={1} sx={{marginTop:'0.5rem'}}>
                                <Grid sx={{position:'relative'}} size={1}>
                                    <FontAwesomeIcon icon={faGithub}/>
                                </Grid>
                                <Grid  size='grow'>
                                    <Typography className={`${resumeStyles.resumeBody}`}>github.com/yourprofile</Typography>
                                </Grid>
                            </Grid>
                            <Grid container gap={1} sx={{marginTop:'0.5rem'}}>
                                <Grid sx={{position:'relative'}} size={1}>
                                    <FontAwesomeIcon icon={faGlobe}/>
                                </Grid>
                                <Grid  size='grow'>
                                    <Typography className={`${resumeStyles.resumeBody}`}>www.yourwebsite.com</Typography>
                                </Grid>
                            </Grid>
                        </Box>

                        <Box sx={{border:'1px solid #ccc', padding:'10px', marginBottom:'1rem', backgroundColor:'#f5f5f5', borderRadius:'0.25rem'}}>
                            <Grid container gap={1}>
                                <Grid sx={{position:'relative'}} size={1}>
                                    <FontAwesomeIcon icon={faScrewdriverWrench}/>
                                </Grid>
                                <Grid  size='grow'>
                                    <Typography className={`${resumeStyles.resumeHeading}`}>skills</Typography>
                                </Grid>
                                <Grid size={12}>
                                    <Divider sx={{margin: '0.25rem 0.5rem'}} />
                                </Grid>
                            </Grid>
                            <Grid container gap={1} sx={{marginTop:'0.5rem'}}>
                                <Grid sx={{position:'relative'}} size={1}>
                                    <FontAwesomeIcon icon={faLocationPin}/>
                                </Grid>
                                <Grid  size='grow'>
                                    <Typography className={`${resumeStyles.resumeBody}`}>Toronto Ontario, Canada N5V - OC2</Typography>
                                </Grid>
                            </Grid>
                            <Grid container gap={1} sx={{marginTop:'0.5rem'}}>
                                <Grid sx={{position:'relative'}} size={1}>
                                    <FontAwesomeIcon icon={faMobileAlt}/>
                                </Grid>
                                <Grid  size='grow'>
                                    <Typography className={`${resumeStyles.resumeBody}`}>+1 (123) 456-7890</Typography>
                                </Grid>
                            </Grid>
                            <Grid container gap={1} sx={{marginTop:'0.5rem'}}>
                                <Grid sx={{position:'relative'}} size={1}>
                                    <FontAwesomeIcon icon={faEnvelopeOpen}/>
                                </Grid>
                                <Grid  size='grow'>
                                    <Typography className={`${resumeStyles.resumeBody}`}>example@example.com</Typography>
                                </Grid>
                            </Grid>
                            <Grid container gap={1} sx={{marginTop:'0.5rem'}}>
                                <Grid sx={{position:'relative'}} size={1}>
                                    <FontAwesomeIcon icon={faLinkedin}/>
                                </Grid>
                                <Grid  size='grow'>
                                    <Typography className={`${resumeStyles.resumeBody}`}>linkedin.com/in/yourprofile</Typography>
                                </Grid>
                            </Grid>
                            <Grid container gap={1} sx={{marginTop:'0.5rem'}}>
                                <Grid sx={{position:'relative'}} size={1}>
                                    <FontAwesomeIcon icon={faGithub}/>
                                </Grid>
                                <Grid  size='grow'>
                                    <Typography className={`${resumeStyles.resumeBody}`}>github.com/yourprofile</Typography>
                                </Grid>
                            </Grid>
                            <Grid container gap={1} sx={{marginTop:'0.5rem'}}>
                                <Grid sx={{position:'relative'}} size={1}>
                                    <FontAwesomeIcon icon={faGlobe}/>
                                </Grid>
                                <Grid  size='grow'>
                                    <Typography className={`${resumeStyles.resumeBody}`}>www.yourwebsite.com</Typography>
                                </Grid>
                            </Grid>
                        </Box>

                        <Box sx={{border:'1px solid #ccc', padding:'10px', marginBottom:'1rem', backgroundColor:'#f5f5f5', borderRadius:'0.25rem'}}>
                            <Grid container gap={1}>
                                <Grid sx={{position:'relative'}} size={1}>
                                    <FontAwesomeIcon icon={faGraduationCap}/>
                                </Grid>
                                <Grid  size='grow'>
                                    <Typography className={`${resumeStyles.resumeHeading}`}>education</Typography>
                                </Grid>
                                <Grid size={12}>
                                    <Divider sx={{margin: '0.25rem 0.5rem'}} />
                                </Grid>
                            </Grid>
                            <Grid container gap={1} sx={{marginTop:'0.5rem'}}>
                                <Grid sx={{position:'relative'}} size={1}>
                                    <FontAwesomeIcon icon={faLocationPin}/>
                                </Grid>
                                <Grid  size='grow'>
                                    <Typography className={`${resumeStyles.resumeBody}`}>Toronto Ontario, Canada N5V - OC2</Typography>
                                </Grid>
                            </Grid>
                            <Grid container gap={1} sx={{marginTop:'0.5rem'}}>
                                <Grid sx={{position:'relative'}} size={1}>
                                    <FontAwesomeIcon icon={faMobileAlt}/>
                                </Grid>
                                <Grid  size='grow'>
                                    <Typography className={`${resumeStyles.resumeBody}`}>+1 (123) 456-7890</Typography>
                                </Grid>
                            </Grid>
                            <Grid container gap={1} sx={{marginTop:'0.5rem'}}>
                                <Grid sx={{position:'relative'}} size={1}>
                                    <FontAwesomeIcon icon={faEnvelopeOpen}/>
                                </Grid>
                                <Grid  size='grow'>
                                    <Typography className={`${resumeStyles.resumeBody}`}>example@example.com</Typography>
                                </Grid>
                            </Grid>
                            <Grid container gap={1} sx={{marginTop:'0.5rem'}}>
                                <Grid sx={{position:'relative'}} size={1}>
                                    <FontAwesomeIcon icon={faLinkedin}/>
                                </Grid>
                                <Grid  size='grow'>
                                    <Typography className={`${resumeStyles.resumeBody}`}>linkedin.com/in/yourprofile</Typography>
                                </Grid>
                            </Grid>
                            <Grid container gap={1} sx={{marginTop:'0.5rem'}}>
                                <Grid sx={{position:'relative'}} size={1}>
                                    <FontAwesomeIcon icon={faGithub}/>
                                </Grid>
                                <Grid  size='grow'>
                                    <Typography className={`${resumeStyles.resumeBody}`}>github.com/yourprofile</Typography>
                                </Grid>
                            </Grid>
                            <Grid container gap={1} sx={{marginTop:'0.5rem'}}>
                                <Grid sx={{position:'relative'}} size={1}>
                                    <FontAwesomeIcon icon={faGlobe}/>
                                </Grid>
                                <Grid  size='grow'>
                                    <Typography className={`${resumeStyles.resumeBody}`}>www.yourwebsite.com</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                       
                        
                        
                    </Grid>
                    <Grid size='grow' className={`${styles.timeline}`}>
                        <Box className={`${styles.section}`}>
                            <Box>
                                <Box className={`${styles.sectionIcon}`}>
                                    <FontAwesomeIcon icon={faStar}/>
                                </Box>
                                <Typography className={`${resumeStyles.resumeHeading}`}>summary</Typography>
                                <Divider sx={{margin: '0.75rem 0'}} />
                            </Box>
                        </Box>
                        <Box className={`${styles.section}`}>
                            <Box>
                                <Box className={`${styles.sectionIcon}`}>
                                    <FontAwesomeIcon icon={faBriefcase}/>
                                </Box>
                                <Typography className={`${resumeStyles.resumeHeading}`}>professional experience</Typography>
                                <Divider sx={{margin: '0.75rem 0'}} />
                            </Box>
                        </Box>
                        <Box className={`${styles.section}`}>
                            <Box>
                                <Box className={`${styles.sectionIcon}`}>
                                    <FontAwesomeIcon icon={faLaptopCode}/>
                                </Box>
                                <Typography className={`${resumeStyles.resumeHeading}`}>projects</Typography>
                                <Divider sx={{margin: '0.75rem 0'}} />
                            </Box>
                        </Box>
                        <Box className={`${styles.section}`}>
                            <Box>
                                <Box className={`${styles.sectionIcon}`}>
                                    <FontAwesomeIcon icon={faAward}/>
                                </Box>
                                <Typography className={`${resumeStyles.resumeHeading}`}>awards & certifications</Typography>
                                <Divider sx={{margin: '0.75rem 0'}} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>

            <footer >
                <Button variant="contained" onClick={convertToPdf}>Generate</Button>
            </footer>
        </div>
    );
}
export default Template1;