import { type FC, type ReactNode } from "react"
import styles from './CustomDialog.module.scss'
import { Button, Dialog, Divider, Grid, IconButton, Typography } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import type { IconProp } from "@fortawesome/fontawesome-svg-core"


type DialogLayoutProps = {
    open: boolean
    title: string
    titleIcon: IconProp
    children: ReactNode
    close: () => void
}

const CustomDialog: FC<DialogLayoutProps> = (props: DialogLayoutProps) => {

    const closeDialog = () => {
        props.close()
    }

    return(
        <Dialog open={props.open} className={`${styles.fadeInUpBig}`} slotProps={{
            paper: {
                sx:{
                    position:'absolute',
                    top: '50%',
                    left: '50%',
                    transform: "translate(-50%, -50%)"
                }
            }
        }}>
            <Grid className={`${styles.customDialog}`} container>
                <Grid size={12} className={`${styles.dialogLayoutHeader}`} container gap={1}>
                    <Grid sx={{position:'relative', width:'16px'}}>
                        <IconButton className={`${styles.closeButton}`} onClick={() => closeDialog()}>
                            <FontAwesomeIcon icon={faCircleXmark} style={{fontSize:'16px'}} className={`${styles.closeIcon}`} />                        
                        </IconButton>
                    </Grid>                
                    <Grid>
                        <Divider orientation="vertical" />
                    </Grid>
                    <Grid container>
                        <Grid sx={{position:'relative', width:'25px'}}>
                            <FontAwesomeIcon icon={props.titleIcon} className="vertical-center" />
                        </Grid>
                        <Grid>
                            <Typography variant="h5">{props.title}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={12} container>
                    {props.children}
                </Grid>
                <Grid className={`${styles.actionArea}`} size={12}>
                    <Button variant="contained" sx={{marginRight:'0.5rem'}}>
                        Save and Add
                    </Button>
                    <Button variant="contained">
                        Save
                    </Button>
                </Grid>
            </Grid>
        </Dialog>
    )
}

export default CustomDialog