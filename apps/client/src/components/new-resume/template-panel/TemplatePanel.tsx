import { Box, ButtonBase, Checkbox, Grid, Typography } from "@mui/material";
import type { FC } from "react";
import styles from './TemplatePanel.module.scss';

const TemplatePanel: FC = () => {
    return (
        <Grid className={`${styles.templatesPanel}`}>
            <header>
                <Typography variant="h5">Choose a template</Typography>
            </header>
            <Grid className={`${styles.templates}`} container gap={3}>
                <ButtonBase sx={{width:'100%'}}>
                    <Box className={`${styles.template} ${styles.selected}`}>
                        <Checkbox className={`${styles.checkbox}`}/>
                        <Box className={`${styles.banner}`}>
                            <Typography>Template 1</Typography>
                        </Box>
                    </Box>
                </ButtonBase>

                <ButtonBase sx={{width:'100%'}}>
                    <Box className={`${styles.template}`}>
                        <Checkbox className={`${styles.checkbox}`}/>
                        <Box className={`${styles.banner}`}>
                            <Typography>Template 1</Typography>
                        </Box>
                    </Box>
                </ButtonBase>
            </Grid>
        </Grid>
    );
};

export default TemplatePanel;
