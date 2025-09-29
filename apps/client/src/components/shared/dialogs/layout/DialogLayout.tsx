import type { FC, ReactNode } from "react"
import styles from './DialogLayout.module.scss'
import { Button, Dialog, Divider, Grid, IconButton, Typography } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark, faGraduationCap, faHome } from "@fortawesome/free-solid-svg-icons"
import type { IconProp } from "@fortawesome/fontawesome-svg-core"

type DialogLayoutProps = {
    open: boolean
    title: string
    titleIcon: IconProp
    children: ReactNode
}

const DialogLayout: FC<DialogLayoutProps> = (props: DialogLayoutProps) => {
    return(
        <Dialog open={props.open}>
            <Grid className={`${styles.dialogLayout}`} container>
                <Grid size={12} className={`${styles.dialogLayoutHeader}`} container gap={1}>
                    <Grid sx={{position:'relative', width:'18px'}}>
                        <IconButton className={`${styles.closeButton}`}>
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
                <Grid size={12} sx={{height:'200px'}}>
                    {props.children}
                </Grid>
                <Grid className={`${styles.actionArea}`} size={12}>
                    <Button variant="contained">
                        Done
                    </Button>
                </Grid>
            </Grid>
        </Dialog>
    )
}

export default DialogLayout