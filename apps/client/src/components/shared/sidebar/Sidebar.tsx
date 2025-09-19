import {  Box, ButtonBase, Grid } from "@mui/material";
import { useState } from "react";
import styles from "./Sidebar.module.scss";
import ChipAvatar from "../chip-avatar/ChipAvatar";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import SidebarItem from "./SidebarItem/SidebarItem";
import { faFile, faFilePdf, faGear, faHome } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);
    const [isTouched, setIsTouched] = useState(false);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
        showDropDown ? setShowDropDown(false) : setShowDropDown(false);
    };

    const toggleDropDown = () => {        
        setShowDropDown((prev) => !prev);  
        handleTouch();      
    }

    const handleTouch = () => {        
        if (!isTouched) 
            setIsTouched(true);
    };

    return (
        <>
        <Box className={`${styles.overlay} ${isExpanded ? styles.showOverlay : ''}`} onClick={toggleSidebar} />

        <Grid className={`${styles.sidebar} ${isExpanded ? styles.expandSidebar : ''}`} container direction="column">            

            <Grid sx={{marginTop:'0.5rem'}}>
                <SidebarItem isExpanded={isExpanded} icon={faHome} label="Home" navigateTo="/home" updateExpanded={setIsExpanded} />
                <SidebarItem isExpanded={isExpanded} icon={faFile} label="New Resume" navigateTo="/new-resume" updateExpanded={setIsExpanded} />
                <SidebarItem isExpanded={isExpanded} icon={faFilePdf} label="View Resumes" updateExpanded={setIsExpanded} />
            </Grid>

            <Grid sx={{position:"absolute", bottom:10, left:0, right:0, }}>
                <Grid sx={{marginBottom:'0.5rem'}}>
                    <SidebarItem isExpanded={isExpanded} icon={faGear} label="Settings" updateExpanded={setIsExpanded} />
                </Grid>
                
                <ButtonBase sx={{padding:'0.25rem 0.75rem', width:'100%', backgroundColor:'rgba(255,255,255,0.1)', '&:hover':{backgroundColor:'rgba(255,255,255,0.2)'}}} >
                    <ChipAvatar 
                        name="John Doe" 
                        avatar="jd" 
                        position="Software Engineer" 
                        isExpanded={isExpanded} 
                        toggleSidebar={toggleSidebar} 
                        toggleDropDown={toggleDropDown} 
                        showDropDown={showDropDown}
                    />
                </ButtonBase>
                <DropDownMenu showDropDown={showDropDown} isTouched={isTouched} />
            </Grid>
        </Grid>

        </>
    );
};

export default Sidebar;
