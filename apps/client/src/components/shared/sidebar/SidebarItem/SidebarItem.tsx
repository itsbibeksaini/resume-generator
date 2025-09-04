import { Box, ButtonBase, Grid, Typography } from "@mui/material";
import type { FC } from "react";
import styles from "./SidebarItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type IconDefinition } from "@fortawesome/free-solid-svg-icons";

type SidebarItemProps = {
    isExpanded: boolean,
    icon: IconDefinition,
    label: string
}

const SidebarItem: FC<SidebarItemProps> = (props: SidebarItemProps) => {
  
    return (
        <Grid className={styles.sidebarItem}>
            <ButtonBase className={`${styles.item} ${props.isExpanded ? styles.expandItem : ""}`}>
                <Grid container size={12} sx={{ position:'relative' }}>
                    <Grid className={styles.iconContainer}>
                        <FontAwesomeIcon icon={props.icon} className="centeralize" style={{ fontSize: "24px" }} />
                    </Grid>                    
                    {props.isExpanded && (
                        <Grid size='grow' sx={{ position:'absolute', left:'70px', top:'0', bottom:'0', right:'0' }}>
                            <Box className="vertical-center" sx={{width:'100%', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>
                                <Typography variant="h5" sx={{whiteSpace:'nowrap'}}>{props.label}</Typography>                                
                            </Box>                            
                        </Grid>
                    )}
                </Grid>
            </ButtonBase>
        </Grid>
    )
};

export default SidebarItem;
