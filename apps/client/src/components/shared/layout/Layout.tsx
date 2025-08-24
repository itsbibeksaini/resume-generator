import { Box, Grid, Stack } from "@mui/material";
import type { FC } from "react";
import styles from "./Layout.module.scss";
import { Outlet } from "react-router";
import Menubar from "../menubar/Menubar";

const Layout: FC = () => {
  return (
    <Stack className={`${styles.layout}`}>
        <Box>
            <Menubar/>
        </Box>
        <Box>
            <Outlet/>
        </Box>
    </Stack>
  );
};

export default Layout;
