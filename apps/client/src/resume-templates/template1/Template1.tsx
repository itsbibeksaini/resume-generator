import type { FC, RefObject } from 'react';
import styles from './Template1.module.scss';
import { CssBaseline, Divider, Grid, ThemeProvider, Typography, } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useOutletContext } from 'react-router';
import Sidebar from './components/sidebar/Sidebar';
import Timeline from './components/timeline/Timeline';
import type { TemplateData } from '../../core/template-data/TemplateData';
import { resumeTemplateTheme } from '../../core/themes/customTheme';

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
         <ThemeProvider theme={resumeTemplateTheme}>
            <CssBaseline enableColorScheme />
            <Grid ref={contentRef} className={styles.template1} sx={(theme) => ({
                backgroundColor: theme.palette.background.default
            })}>
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
         </ThemeProvider>
       
    );
}
export default Template1;