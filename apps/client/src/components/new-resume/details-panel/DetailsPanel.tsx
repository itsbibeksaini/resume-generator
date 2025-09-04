import type { FC } from "react";
import styles from './DetailsPanel.module.scss';
import { Grid, Typography } from "@mui/material";

const DetailsPanel: FC = () => {
    return (
        <Grid className={`${styles.detailsPanel}`} size='grow'>
            <header>
                <Typography variant="h5">Resume details</Typography>
            </header>
        </Grid>
    );
};

export default DetailsPanel;
