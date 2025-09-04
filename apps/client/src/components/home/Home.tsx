import { Grid } from "@mui/material";
import type { FC } from "react";
import styles from './Home.module.scss'

const Home: FC = () => {
  return (
    <Grid className={`${styles.home}`}>
      Home
    </Grid>
  );
};

export default Home;
