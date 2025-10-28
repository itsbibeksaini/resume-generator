import { alpha, Grid, useTheme } from "@mui/material";
import { useState, type CSSProperties, type FC } from "react";
import styles from './NewResume.module.scss';
import DetailsPanel from "./details-panel/DetailsPanel";
import TemplatePanel from "./template-panel/TemplatePanel";
import type { Template } from "../../core/template-data/Template";

const NewResume:FC = () => {

    const theme = useTheme()

    const [selectedTemplate, setSelectedTemplate] = useState<Template>();

    const updateSelectedTemplate = (template: Template) => {
        setSelectedTemplate(template);
    }

    return(
        <Grid container 
        className={`${styles.newResume}`}
        sx={{'--background-color': theme.palette.background.default, '--shadow-color': alpha(theme.palette.primary.main, 0.4)} as CSSProperties}
        >
            <TemplatePanel updateSelectedTemplate={updateSelectedTemplate} />
            <DetailsPanel selectedTemplate={selectedTemplate} />
        </Grid>
    )
}

export default NewResume;