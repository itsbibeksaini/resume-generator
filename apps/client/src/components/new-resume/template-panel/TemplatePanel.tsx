import { Grid, Typography } from "@mui/material";
import type { FC } from "react";
import styles from './TemplatePanel.module.scss';

const TemplatePanel: FC = () => {
    return (
        <Grid className={`${styles.templatesPanel}`}>
            <header>
                <Typography variant="h5">Choose a template</Typography>
            </header>
        </Grid>
    );
};

export default TemplatePanel;
