import type { FC } from "react";
import styles from "./signin.module.scss";
import { alpha, Box, Button, Card, Grid, TextField, Typography } from "@mui/material";

const SignIn: FC = () => {
  return (

    <Box className={`${styles.signin}`} sx={(theme) => ({
      '--shadow-color': alpha(theme.palette.primary.main, 0.4)
    })}>
      <Grid className={`${styles.signInCardWrapper} centeralize`} container>
        <Grid className={`${styles.signInCard}`}>
          <Typography variant="h3">Sign In</Typography>
          <Grid container size={12} gap={2} sx={{padding:'10px 15px', marginTop:'1rem'}}>
            <Grid size={12}>
                <TextField label='Username' sx={{ width: '80%' }} />
            </Grid>
            <Grid size={12}>
                <TextField label='Password' type='password' sx={{ width: '80%' }} />
            </Grid>
            <Grid size={12}>
                <Button variant="contained" color="primary">Sign In</Button>
            </Grid>
        </Grid>
        </Grid>
        <Grid className={`${styles.footer}`} size={12}>
          <Typography variant="subtitle1">&copy; Copyright {new Date().getFullYear()}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignIn;
