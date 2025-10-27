import { Box, ButtonBase, Checkbox, Grid, Typography } from "@mui/material";
import { useEffect, useState, type FC } from "react";
import styles from './TemplatePanel.module.scss';
import { TEMPLATES, type Template } from "../../../core/template-data/Template";

type TemplatePanelProps = {    
    updateSelectedTemplate: (template: Template) => void;
}

const TemplatePanel: FC<TemplatePanelProps> = ({ updateSelectedTemplate }) => {

    const [templateList, setTemplateList] = useState<Template[]>(TEMPLATES);

    useEffect(() => {
        const selected = templateList.find(template => template.isSelected);
        if (selected) {
            updateSelectedTemplate(selected);
        }
    }, []);

    const selectTemplate = (templateId: string) => {
        const updatedTemplates = TEMPLATES.map(template => {
            if (template.id === templateId) {
                return { ...template, isSelected: true };
            } else {
                return { ...template, isSelected: false };
            }
        });
        const selected = updatedTemplates.find(template => template.isSelected);
        if (selected) {
            updateSelectedTemplate(selected);
            setTemplateList(updatedTemplates);
        }
    }


    return (
        <Grid className={`${styles.templatesPanel}`}>
            <header>
                <Typography variant="h5">Choose a template</Typography>
            </header>
            <Grid className={`${styles.templates}`}>

                {
                    templateList.map((template, index) => {
                        return(
                            <ButtonBase className={`${styles.templateWrapper} ${template.isSelected ? styles.selected : ''}`} key={index} onClick={() => selectTemplate(template.id)}>
                                <Box className={`${styles.template}`}>
                                    <img src={template.thumbnail} style={{width:'100%', height:'100%'}} />                                                                        
                                    <Box className={`${styles.banner}`}>
                                        <Typography color="textSecondary">{template.name}</Typography>
                                    </Box>
                                </Box>
                            </ButtonBase>
                        )
                    })
                }                
            </Grid>
        </Grid>
    );
};

export default TemplatePanel;
