import { Avatar, Box, ButtonBase, Grid, Typography } from "@mui/material";
import styles from "./ChipAvatar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

type ChipProps = {
    name: string,
    avatar: string,
    position?: string
    toggleDropDown?: () => void
}

const ChipAvatar = (props: ChipProps) => {
    return (
        <ButtonBase sx={{borderRadius:'28px'}} onClick={props.toggleDropDown}>
            <Grid className={styles.chipAvatar} container gap={1}>
                <Grid sx={{position:'relative'}}>
                    <Avatar className={`${styles.avatar}`} >
                        <Typography variant="h5" className={`${styles.initials}`} >{props.avatar}</Typography>
                    </Avatar>   
                </Grid>
                <Grid size='grow' sx={{position:'relative'}}>
                    <Box className={`vertical-center`} sx={{ width:'100%', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>
                        <Typography variant="h5">{props.name}</Typography>
                        <Typography variant="body2">{props.position}</Typography>
                    </Box>                    
                </Grid>

                <Grid size={1.5}>                    
                    <Box className={`vertical-center`}>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </Box>
                </Grid>

            </Grid>
        </ButtonBase>
    );
};

export default ChipAvatar;
