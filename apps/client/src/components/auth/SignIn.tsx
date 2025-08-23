import type { FC } from "react";
import styles from "./signin.module.scss";
import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";

const SignIn: FC = () => {
  return (
    <Box className={`${styles.signin}`}>
      <div className={`${styles.signinCard} centeralize`}>
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
      </div>
      {/* <Typography variant="subtitle2">&copy;</Typography> */}
    </Box>
  );
};

export default SignIn;
