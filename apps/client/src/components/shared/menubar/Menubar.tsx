import { Box, ButtonBase, Grid, Typography } from "@mui/material";
import { useState, type FC } from "react";
import styles from "./Menubar.module.scss";
import ChipAvatar from "../chip-avatar/ChipAvatar";
import DropDownMenu from "./DropDownMenu/DropDownMenu";

const Menubar: FC = () => {
    
    const [showDropDown, setShowDropDown] = useState(false);

    const toggleDropDown = () => {
        setShowDropDown((prev) => !prev);        
    }

  return (
    <Grid className={`${styles.menubar}`} container>
        <Grid size={6} sx={{position: 'relative'}}>
            <Typography variant="h4" className="vertical-center">Resume Generator</Typography>
        </Grid>
        <Grid container size={6} sx={{justifyContent: 'flex-end', position: 'relative'}}>
            <ChipAvatar name="John Doe" avatar="jd" position="Software Engineer" toggleDropDown={toggleDropDown} />            
            <DropDownMenu showDropDown={showDropDown}/>
        </Grid>
    </Grid>
  );
};

export default Menubar;
