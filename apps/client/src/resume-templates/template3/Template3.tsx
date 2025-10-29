import { Box, Divider, Grid, Typography } from "@mui/material";
import { useEffect, useRef, useState, type FC, type RefObject } from "react";
import styles from './Template3.module.scss'
import resumeStyles from '../shared/ResumeTemplate.module.scss'
import { useLocation, useOutletContext } from "react-router";
import type { TemplateData } from "../../core/template-data/TemplateData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

type OutletContextType = {
    setTemplateRef?: (ref: RefObject<null>) => void;
};

const Template3: FC = () => {

    const location = useLocation();

    const [resumeData] = useState<TemplateData>(location.state);

    const contentRef = useRef(null);

    const { setTemplateRef } = useOutletContext<OutletContextType>();

    useEffect(() => {
            if(setTemplateRef) {
                setTemplateRef(contentRef);
            }
        }, [setTemplateRef]);

    return(
        <Grid ref={contentRef} className={`${styles.template3}`} container gap={1} sx={(theme) => ({
            backgroundColor: theme.palette.background.default
        })}>
            <Grid className={`${styles.templateHeader}`} container size={12}>
                
            </Grid>
        </Grid>
    )
}

export default Template3