import type { FC } from "react";
import styles from "./ContactInformation.module.scss";
import { Card, Divider, Typography } from "@mui/material";
import { Grid } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faGlobe, faIdBadge, faLocationPin, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import type { ResumeContactInfo } from "../../../../data/resumeDetails";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const ContactInformation:FC<{contactInfo: ResumeContactInfo}> = ({contactInfo}) => {

    return(
        <Card className={`${styles.section}`}>
            <Grid container gap={1}>
                <Grid sx={{textAlign:'center'}} size={1.2}>
                <FontAwesomeIcon icon={faIdBadge}/>
                </Grid>
                <Grid>
                <Typography className='resume-heading'>Contact Information</Typography>
                </Grid>                          
                <Grid size={12}>
                <Divider style={{marginBottom:'0.5rem'}}/>
                </Grid>
            </Grid>

            <Grid container style={{padding:'0.25rem 0'}} gap={1}>
                <Grid sx={{textAlign:'center'}} size={1.2}>
                    <FontAwesomeIcon icon={faLocationPin} />
                </Grid>
                <Grid>
                    <Typography className='resume-body'>{contactInfo.location.city} {contactInfo.location.state}, {contactInfo.location.country} - {contactInfo.location.postalCode}</Typography>
                </Grid>
            </Grid>

            <Grid container style={{padding:'0.25rem 0'}} gap={1}>
                <Grid sx={{textAlign:'center'}} size={1.2}>
                <FontAwesomeIcon icon={faMobileAlt} />
                </Grid>
                <Grid>
                <Typography className='resume-body'>({contactInfo.phoneNumber?.areaCode}) {contactInfo.phoneNumber?.number}</Typography>
                </Grid>
            </Grid>

            <Grid container style={{padding:'0.25rem 0'}} gap={1}>
                <Grid sx={{textAlign:'center'}} size={1.2}>
                <FontAwesomeIcon icon={faEnvelopeOpen} />
                </Grid>
                <Grid>
                <Typography className='resume-body'>{contactInfo.email}</Typography>
                </Grid>
            </Grid>

            <Grid container style={{padding:'0.25rem 0'}} gap={1}>
                <Grid sx={{textAlign:'center'}} size={1.2}>
                <FontAwesomeIcon icon={faLinkedinIn} />
                </Grid>
                <Grid>
                <Typography className='resume-body'>{contactInfo.linkedIn}</Typography>
                </Grid>
            </Grid>

            <Grid container style={{padding:'0.25rem 0'}} gap={1}>
                <Grid sx={{textAlign:'center'}} size={1.2}>
                <FontAwesomeIcon icon={faGithub} />
                </Grid>
                <Grid>
                <Typography className='resume-body'>{contactInfo.github}</Typography>
                </Grid>
            </Grid>
            
            <Grid container style={{padding:'0.25rem 0'}} gap={1}>
                <Grid sx={{textAlign:'center'}} size={1.2}>
                <FontAwesomeIcon icon={faGlobe} />
                </Grid>
                <Grid>
                <Typography className='resume-body'>{contactInfo.website}</Typography>
                </Grid>
            </Grid>
        </Card>
    )
}

export default ContactInformation;