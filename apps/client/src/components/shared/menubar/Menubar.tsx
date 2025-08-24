import { Grid, Typography } from "@mui/material";
import { type FC } from "react";
import styles from "./Menubar.module.scss";
import ChipAvatar from "../chip-avatar/ChipAvatar";

const Menubar: FC = () => {
    
  return (
    <Grid className={`${styles.menubar}`} container>
        <Grid size={6} sx={{position: 'relative'}}>
            <Typography variant="h4" className="vertical-center">Resume Generator</Typography>
        </Grid>
        <Grid container size={6} sx={{justifyContent: 'flex-end'}}>
            <ChipAvatar name="John Doe" avatar="jd" position="Software Engineer" />
        </Grid>
    </Grid>
  );
};

export default Menubar;
