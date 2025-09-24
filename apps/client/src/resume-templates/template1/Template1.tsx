import type { FC } from 'react';
import styles from './Template1.module.scss';
import resumeStyles from '../shared/ResumeTemplate.module.scss';
import { Box, Button, Divider, Grid, IconButton, Typography, } from '@mui/material';
import { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft  } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router';
import Sidebar from './components/sidebar/Sidebar';
import Timeline from './components/timeline/Timeline';

const Template1: FC = () => {

    const navigate = useNavigate();

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
                    <Typography variant="h2">Bibek Saini</Typography>
                    <Typography variant="h6" sx={{textTransform: 'uppercase', marginTop: '0.5rem'}}>Senior fullstack software engineer</Typography>
                    <Divider sx={{margin: '1rem 0'}}/>
                </header>

                <Grid container sx={{padding: '0.5rem'}} gap={2}>
                    <Sidebar/>
                    <Timeline/>
                </Grid>
            </Grid>

            <footer >
                <Button variant="contained" onClick={convertToPdf}>Generate</Button>
            </footer>
        </Box>
    );
}
export default Template1;