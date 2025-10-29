import { Box, Divider, Grid, Typography } from "@mui/material";
import { useEffect, useRef, useState, type FC, type RefObject } from "react";
import styles from './Template3.module.scss'
import resumeStyles from '../shared/ResumeTemplate.module.scss'
import { useLocation, useOutletContext } from "react-router";
import type { TemplateData } from "../../core/template-data/TemplateData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faGlobe, faHSquare, faLocationPin, faMobileAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

type OutletContextType = {
    setTemplateRef?: (ref: RefObject<null>) => void;
};

const Template3: FC = () => {

    const location = useLocation();

    const [resumeData] = useState<TemplateData>(location.state);

    const contentRef = useRef(null);

    const { setTemplateRef } = useOutletContext<OutletContextType>();

    useEffect(() => {
            if(setTemplateRef) {
                setTemplateRef(contentRef);
            }
        }, [setTemplateRef]);

    return(
        <Grid ref={contentRef} className={`${styles.template3}`} container gap={1} sx={(theme) => ({
            backgroundColor: theme.palette.background.default
        })}>
            <Grid className={`${styles.templateHeader}`} container size={12}>
                <Grid className={`${styles.row}`} container>
                    <Grid>
                        <Typography sx={{fontSize:'4rem', lineHeight:'1.1 !important'}}>{resumeData.fullName}</Typography>
                        <Typography className={`${resumeStyles.resumeHeading}`} sx={{lineHeight:'1.2 !important', marginTop:'0.30rem'}}>{resumeData.jobTitle}</Typography>
                    </Grid>
                    <Grid sx={{justifyContent: "flex-end", alignItems: "center", position:'relative'}} size='grow'>
                        <Box sx={{right:0}} className={`vertical-center`}>
                            <Grid container gap={0.5} >
                                <Grid>
                                    <FontAwesomeIcon icon={faMobileAlt} />
                                </Grid>
                                <Grid>
                                    <Typography className={`${resumeStyles.resumeBody}`} sx={{lineHeight:2}}>{resumeData.contactInfo.phone}</Typography>
                                </Grid>                                
                            </Grid>
                            <Grid container gap={0.5}>
                                <Grid>
                                    <FontAwesomeIcon icon={faEnvelopeOpen} />
                                </Grid>
                                <Grid>
                                    <Typography className={`${resumeStyles.resumeBody}`} sx={{lineHeight:2}}>{resumeData.contactInfo.email}</Typography>
                                </Grid>                                
                            </Grid>
                            <Grid container gap={0.5}>
                                <Grid>
                                    <FontAwesomeIcon icon={faLocationPin} />
                                </Grid>
                                <Grid>
                                    <Typography className={`${resumeStyles.resumeBody}`} sx={{lineHeight:2}}>{resumeData.contactInfo.location}</Typography>
                                </Grid>                                
                            </Grid>
                        </Box>
                    </Grid>
                    <Divider variant="middle" sx={{margin: '0.5rem 0', width:'100%'}}/>
                    <Grid sx={{ justifyContent: "center", alignItems: "center"}} container size={12} gap={1}>
                        <Grid container gap={0.5}>
                            <Grid>
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </Grid>
                            <Grid>
                                <Typography className={`${resumeStyles.resumeBody}`} sx={{lineHeight:2}}>{resumeData.contactInfo.linkedin}</Typography>
                            </Grid>                                
                            <Grid>
                                <Divider orientation="vertical" sx={{marginLeft:'0.5rem'}} />
                            </Grid>
                        </Grid>
                        <Grid container gap={0.5} >
                            <Grid>
                                <FontAwesomeIcon icon={faGithub}/>
                            </Grid>
                            <Grid>
                                <Typography className={`${resumeStyles.resumeBody}`} sx={{lineHeight:2}}>{resumeData.contactInfo.github}</Typography>
                            </Grid>
                            <Grid>
                                <Divider orientation="vertical" sx={{marginLeft:'0.5rem'}} />
                            </Grid>                                
                        </Grid>
                        <Grid container gap={0.5} >
                            <Grid>
                                <FontAwesomeIcon icon={faGlobe}/>
                            </Grid>
                            <Grid>
                                <Typography className={`${resumeStyles.resumeBody}`} sx={{lineHeight:2}}>{resumeData.contactInfo.website}</Typography>
                            </Grid>                                
                        </Grid>
                    </Grid>
                    <Divider variant="middle" sx={{margin: '0.5rem 0', width:'100%'}}/>
                </Grid>
                <Grid className={`${styles.row}`}>
                    <Grid container gap={1}>
                        <Grid sx={{position:'relative'}}>
                            <FontAwesomeIcon icon={faStar}/>
                        </Grid>
                        <Grid  size='grow'>
                            <Typography className={`${resumeStyles.resumeHeading}`}>highlights</Typography>
                        </Grid>
                        <Grid size={12}>
                            <Divider sx={{margin: '0 0.5rem'}} />
                        </Grid>
                        <Box className={`${styles.section}`}>
                            <Box className={`${styles.timeline}`}>
                                <ul>
                                    {
                                        resumeData.summary.map((data, index) => {
                                            return(
                                                <li key={index}>
                                                    <Typography className={`${resumeStyles.resumeBody}`}>{data}</Typography>
                                                </li>
                                            )
                                        })
                                    }                            
                                </ul>
                            </Box>
                        </Box>
                    </Grid>                    
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Template3