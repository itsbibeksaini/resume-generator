import { Box, Grid } from "@mui/material";
import { type FC } from "react";
import styles from "./Layout.module.scss";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router";

const Layout: FC = () => {
  return (
    <Grid className={`${styles.layout}`} container gap={2}>
      <Sidebar/>        
      <Grid className={styles.outlet} size='grow'>
        <Box className={styles.contentArea} >
          <Outlet/>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Layout;
