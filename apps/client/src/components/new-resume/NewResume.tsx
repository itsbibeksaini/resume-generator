import { Grid } from "@mui/material";
import { useState, type FC } from "react";
import styles from './NewResume.module.scss';
import DetailsPanel from "./details-panel/DetailsPanel";
import TemplatePanel from "./template-panel/TemplatePanel";
import type { Template } from "../../core/template-data/Template";

const NewResume:FC = () => {

    const [selectedTemplate, setSelectedTemplate] = useState<Template>();

    const updateSelectedTemplate = (template: Template) => {
        setSelectedTemplate(template);
    }

    return(
        <Grid container className={`${styles.newResume}`}>
            <TemplatePanel updateSelectedTemplate={updateSelectedTemplate} />
            <DetailsPanel selectedTemplate={selectedTemplate} />
        </Grid>
    )
}

export default NewResume;