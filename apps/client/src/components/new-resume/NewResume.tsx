import { Grid } from "@mui/material";
import type { FC } from "react";
import styles from './NewResume.module.scss';
import DetailsPanel from "./details-panel/DetailsPanel";
import TemplatePanel from "./template-panel/TemplatePanel";

const NewResume:FC = () => {

    return(
        <Grid container className={`${styles.newResume}`}>
            <TemplatePanel />
            <DetailsPanel/>
        </Grid>
    )
}

export default NewResume;