import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import type { SectionConfig } from "../SectionConfig";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export const SOCIAL_MEDIA_INFO: SectionConfig = {
    header: "Social media Information",
    rows: [
        {
                subSection: false,
                fields: [
                  {
                    id:'txt-linkedin',
                    name:'linkedin',
                    type: "text",
                    label:'LinkedIn',
                    placeholder:"Add your LinkedIn profile URL",
                    icon: faLinkedin,
                    col: 4,
                    required:true
                  },
                  {
                    id:'txt-github',
                    name:'github',
                    type: "text",
                    label:'Github',
                    placeholder:"Add your GitHub profile URL",
                    icon: faGithub,
                    col: 4,
                    required:true
                  },
                  {
                    id:'txt-website-portfolio',
                    name:'websitePortfolio',
                    type:'text',
                    label:'Website - Portfolio',
                    placeholder:"Add your website or portfolio URL",
                    icon: faGlobe,
                    col: 4,
                    required:false
                  }
                ]
              }
    ]
}