import type { FC, RefObject } from 'react';
import styles from './Template1.module.scss';
import resumeStyles from '../shared/ResumeTemplate.module.scss';
import { Box, Button, Divider, Grid, IconButton, Typography, } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft  } from '@fortawesome/free-solid-svg-icons';

import { useLocation, useNavigate, useOutletContext } from 'react-router';
import Sidebar from './components/sidebar/Sidebar';
import Timeline from './components/timeline/Timeline';
import type { TemplateData } from '../../core/template-data/TemplateData';

type OutletContextType = {
    setTemplateRef?: (ref: RefObject<null>) => void;
};

const Template1: FC = () => {

    const location = useLocation();
    
    const [resumeData] = useState<TemplateData>(location.state);

    const contentRef = useRef(null);

    const { setTemplateRef } = useOutletContext<OutletContextType>();

    useEffect(() => {
        if(setTemplateRef) {
            setTemplateRef(contentRef);
        }
    }, [setTemplateRef]);

    return (
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
    );
}
export default Template1;