import type { FC } from "react";
import type { SectionConfig } from "../SectionConfig";
import { Grid, Typography } from "@mui/material";

type SectionRendererProps = {
    section:  SectionConfig
}

const SectionRenderer: FC<SectionRendererProps> = ({section}) => {
    return(
        <Grid>
            <Typography>{section.header}</Typography>
        </Grid>
    )
}

export default SectionRenderer