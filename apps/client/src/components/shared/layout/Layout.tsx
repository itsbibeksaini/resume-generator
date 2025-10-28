import { Box, Grid, Typography } from "@mui/material";
import { type FC } from "react";
import styles from "./Layout.module.scss";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router";

const Layout: FC = () => {
  return (
    <Grid className={`${styles.layout}`} container gap={2} sx={(theme) => ({
      backgroundColor: theme.palette.background.default
    })}>
      <Sidebar/>        
      <Grid className={styles.outlet} size='grow'>
        <Box className={styles.contentArea} >
          <Outlet/>
        </Box>
        <Box className={styles.mobileMessage} >
          <Typography variant="h4" align="center" color="textSecondary">
            Please use a device with a larger screen to access this application.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Layout;
