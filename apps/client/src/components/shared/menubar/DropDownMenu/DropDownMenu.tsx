import { Box, ButtonBase, Grid, Typography } from "@mui/material";
import { useState, type FC } from "react";
import styles from "./DropDownMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";

type DropDownMenuProps = {
    showDropDown: boolean   
}

const DropDownMenu: FC<DropDownMenuProps> = ({ showDropDown }) => {

  return (
    <>
    {showDropDown && (
        <Box className={`${styles.dropDownMenu} ${styles.hideDropDown}`}>
            <Box sx={{ marginTop:'46px'}}>
                <Box sx={{ padding:'0 1rem'}}>
                    <ButtonBase sx={{width:'100%', textAlign:'left'}}>
                        <Grid sx={{ borderBottom:'1px solid #ccc', padding:'15px 10px', width:'100%' }} container>
                            <Grid sx={{ position: 'relative', width:"30px" }}>
                                <FontAwesomeIcon icon={faUser} className="centeralize" style={{fontSize:'21px'}} />
                            </Grid>
                            <Grid sx={{  }} size='grow'>
                                <Typography variant="body1" sx={{display:'inline-block', marginLeft:'10px'}}>View account</Typography>
                            </Grid>
                        </Grid>
                    </ButtonBase>                
                </Box>
                <Box sx={{ padding:'0 1rem'}}>
                    <ButtonBase sx={{width:'100%', textAlign:'left'}}>
                        <Grid sx={{ borderBottom:'1px solid #ccc', padding:'15px 10px', width:'100%' }} container>
                            <Grid sx={{ position: 'relative', width:"30px" }}>
                                <FontAwesomeIcon icon={faUserPlus} className="centeralize" style={{fontSize:'21px'}} />
                            </Grid>
                            <Grid sx={{  }} size='grow'>
                                <Typography variant="body1" sx={{display:'inline-block', marginLeft:'10px'}}>Create account</Typography>
                            </Grid>
                        </Grid>
                    </ButtonBase>
                    
                </Box>
                <Box sx={{ padding:'0 1rem'}}>
                    <ButtonBase sx={{width:'100%', textAlign:'left'}}>
                        <Grid sx={{  padding:'15px 10px', width:'100%' }} container>
                            <Grid sx={{ position: 'relative', width:"30px" }}>
                                <FontAwesomeIcon icon={faSignOut} className="centeralize" style={{fontSize:'21px'}} />
                            </Grid>
                            <Grid sx={{  }} size='grow'>
                                <Typography variant="body1" sx={{display:'inline-block', marginLeft:'10px'}}>Sign out</Typography>
                            </Grid>
                        </Grid>
                    </ButtonBase>
                    
                </Box>
            </Box>
        </Box>
    )}
    </>
  );
};

export default DropDownMenu;