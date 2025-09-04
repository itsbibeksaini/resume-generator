import { Grid } from "@mui/material";
import { type FC } from "react";
import styles from "./Layout.module.scss";
import Sidebar from "../sidebar/Sidebar";

const Layout: FC = () => {
  return (
    <Grid className={`${styles.layout}`} container >
      <Sidebar/>        
    </Grid>
  );
};

export default Layout;
