import { Avatar, Box, ButtonBase, Grid, Typography } from "@mui/material";
import styles from "./ChipAvatar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons/faAngleDown";

type ChipProps = {
    name: string,
    avatar: string,
    position?: string,
    showDropDown?: boolean,
    isExpanded?: boolean,
    toggleSidebar?: () => void,
    toggleDropDown?: () => void
}

const ChipAvatar = (props: ChipProps) => {

    return (
        <Grid sx={{borderRadius:'28px'}} >
            <Grid className={`${styles.chipAvatar} ${props.isExpanded ? styles.expandChipAvatar : ''}`} container>
                <Grid sx={{position:'relative'}}>
                    <Avatar className={`${styles.avatar} `} onClick={props.toggleSidebar} >
                        <Typography variant="h5" className={`${styles.initials}`} >{props.avatar}</Typography>
                    </Avatar>   
                </Grid>

                {
                    props.isExpanded && (
                        <Grid size='grow' container className={`${styles.infoCard}`} onClick={props.toggleDropDown}>
                            <Grid size='grow' sx={{position:'relative'}}>
                                <Box className={`vertical-center`} sx={{ width:'100%', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>
                                    <Typography variant="h5">{props.name}</Typography>
                                    <Typography variant="body2">{props.position}</Typography>
                                </Box>                    
                            </Grid>

                            <Grid size={1.5}>                    
                                <Box className={`vertical-center`}>
                                    <FontAwesomeIcon icon={props.showDropDown ? faAngleDown : faAngleUp} />
                                </Box>
                            </Grid>
                        </Grid>
                    )
                }
            </Grid>
        </Grid>
    );
};

export default ChipAvatar;
