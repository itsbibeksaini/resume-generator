import { useRef, useState, type FC, type RefObject } from "react";
import styles from './TemplateLayout.module.scss';
import { Outlet, useLoaderData, useLocation, useNavigate } from "react-router";
import { Box, Button, Divider, Grid, IconButton, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import type { TemplateData } from "../../../core/template-data/TemplateData";
import html2pdf from "html2pdf.js";


const TemplateLayout: FC = () => {

    const location = useLocation();

    const navigate = useNavigate();

    const { title } = useLoaderData();

    const [templateRef, setTemplateRef] = useState<RefObject<null>>(useRef(null));

    const [resumeData] = useState<TemplateData>(location.state);

    const pdfOptions: any = {
        filename: resumeData.fullName + '_resume.pdf',        
        image: { type: "jpeg" as "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        margin: [16,0,16,0],
        jsPDF: { unit: 'px', format: 'letter', orientation: 'portrait', hotfixes: ["px_scaling"] },
        
    }

    const convertToPdf = () => {    
        const content = templateRef.current;
        if (!content) return;
        html2pdf().set(pdfOptions).from(content).save();
    }
    
    return (
        <Box className={`${styles.templateWrapper}`}>
            <Grid container className={`${styles.actionHeader}`}>
                <IconButton color='primary' onClick={() => navigate('/new-resume')} className={`${styles.actionButton}`}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </IconButton>
                <Divider orientation='vertical' flexItem />
                <Typography variant='h6' className={`${styles.headerTitle} vertical-center`}>{title} preview</Typography>
            </Grid>
            <Outlet context={{ setTemplateRef }} />
            <footer>
                <Button variant="contained" onClick={convertToPdf}>Generate</Button>
            </footer>
        </Box>
    )
}

export default TemplateLayout;