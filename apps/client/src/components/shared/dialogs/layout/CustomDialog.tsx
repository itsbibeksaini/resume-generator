import { type FC, type ReactNode } from "react"
import styles from './CustomDialog.module.scss'
import { alpha, Button, Dialog, Divider, Grid, IconButton, Typography } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import type { IconProp } from "@fortawesome/fontawesome-svg-core"


type DialogLayoutProps = {
    open: boolean
    title: string
    titleIcon: IconProp
    children: ReactNode
    actionButtons?: ActionButton[]
    close: () => void
}

type ActionButton = {
    label:string,
    clickAction: () => void
}

const CustomDialog: FC<DialogLayoutProps> = (props: DialogLayoutProps) => {

    const closeDialog = () => {                
        props.close()
    }

    return(
        <Dialog open={props.open} onClose={closeDialog} className={`${styles.fadeInUpBig}`} slotProps={{
            paper: {
                sx:(theme) => ({
                    position:'absolute',
                    top: '50%',
                    left: '50%',
                    transform: "translate(-50%, -50%)",
                    boxShadow: `10px 10px 10px ${alpha(theme.palette.primary.main, 0.4)}, -10px -10px 10px ${alpha(theme.palette.primary.main, 0.4)}`,
                    backgroundImage: 'none !important'
                    
                })
            }
        }}>
            <Grid className={`${styles.customDialog}`} container sx={(theme) => ({
                '--shadow-color': alpha(theme.palette.primary.main, 0.4)
            })}>
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
                    {/* <Button variant="contained" sx={{marginRight:'0.5rem'}}>
                        Save and Add
                    </Button>
                    <Button variant="contained">
                        Save
                    </Button> */}

                    {
                        props.actionButtons?.map((actionButton, index) => {
                            return(
                                <Button variant="contained" onClick={actionButton.clickAction} key={index}>
                                    {actionButton.label}
                                </Button>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </Dialog>
    )
}

export default CustomDialog