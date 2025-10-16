import type { FC } from 'react';
import styles from './Template1.module.scss';
import resumeStyles from '../shared/ResumeTemplate.module.scss';
import { Box, Button, Divider, Grid, IconButton, Typography, } from '@mui/material';
import { useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft  } from '@fortawesome/free-solid-svg-icons';

import { useLocation, useNavigate } from 'react-router';
import Sidebar from './components/sidebar/Sidebar';
import Timeline from './components/timeline/Timeline';
import type { TemplateData } from '../../core/template-data/TemplateData';

const Template1: FC = () => {

    const location = useLocation();
    
    const [resumeData] = useState<TemplateData>(location.state);

    const navigate = useNavigate();

    const contentRef = useRef(null);

    const pdfOptions: any = {
        filename: resumeData.fullName + '_resume.pdf',        
        image: { type: "jpeg" as "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        margin: [16,0,16,0],
        jsPDF: { unit: 'px', format: 'letter', orientation: 'portrait', hotfixes: ["px_scaling"] },
        
    }

    const convertToPdf = () => {    
        const content = contentRef.current;
        if (!content) return;
        html2pdf().set(pdfOptions).from(content).save();
    }


    return (
       <Box className={`${resumeStyles.templateWrapper}`}>
            <Grid container className={`${resumeStyles.actionHeader}`}>
                <IconButton color='primary' onClick={() => navigate('/new-resume')} >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </IconButton>
                <Divider orientation='vertical' flexItem />
                <Typography variant='h6' className={`${resumeStyles.headerTitle} vertical-center`}> Template 1 preview </Typography>
            </Grid>
            <Grid ref={contentRef} className={styles.template1}>
                {/* Your HTML content that you want to convert to PDF */}
                <header>
                    <Typography variant="h2">{resumeData.fullName}</Typography>
                    <Typography variant="h6" sx={{textTransform: 'uppercase', marginTop: '0.5rem'}}>{resumeData.jobTitle}</Typography>
                    <Divider sx={{margin: '1rem 0'}}/>
                </header>

                <Grid container sx={{padding: '0.5rem'}} gap={2}>
                    <Sidebar 
                        contactInfo={resumeData.contactInfo} 
                        skills={resumeData.skills} 
                        educationalData={resumeData.educationInfo}
                    />
                    <Timeline 
                        summary={resumeData.summary}
                        professionalExperience={resumeData.professionalExperience}
                        projects={resumeData.projects}
                        awardsAndCertifications={resumeData.awardsAndCertifications}
                    />
                </Grid>
            </Grid>

            <footer>
                <Button variant="contained" onClick={convertToPdf}>Generate</Button>
            </footer>
        </Box>
    );
}
export default Template1;