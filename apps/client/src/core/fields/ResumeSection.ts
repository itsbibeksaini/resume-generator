import z from "zod";
import type { DynamicFieldProps } from "./DynamicField";
import { faBriefcase, faCity, faEnvelopeOpen, faGlobe, faLocationDot, faMapLocationDot, faMobileAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

type ResumeSection = {
    rows: ResumeSectionRow[]
    header: string
}

type ResumeSectionRow = {
  subSection: boolean
  header?: string
  fields: DynamicFieldProps[]
}

export const ResumeSectionInfoSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters long")
    .max(50, "First name cannot exceed 50 characters")
    .regex(/^[A-Za-zÀ-ÿ ]+$/, "First name can only contain letters and spaces"),

  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters long")
    .max(50, "Last name cannot exceed 50 characters")
    .regex(/^[A-Za-zÀ-ÿ ]+$/, "Last name can only contain letters and spaces"),

  jobTitle: z
    .string()
    .min(2, "Job title must be at least 2 characters long")
    .max(100, "Job title cannot exceed 100 characters"),

  email: z
    .string()
    .email("Invalid email address format"),

  city: z
    .string()
    .min(2, "City must be at least 2 characters long")
    .max(100, "City cannot exceed 100 characters")
    .regex(/^[A-Za-zÀ-ÿ ]+$/, "City can only contain letters and spaces"),

  countryCode: z
    .string()
    .regex(/^\d{1,3}$/, "Country code must contain 1–3 digits (e.g., 1, 44, 91)"),

  areaCode: z
    .string()
    .regex(/^\d{3}$/, "Area code must be exactly 3 digits"),

  number: z
    .string()
    .regex(/^\d{7}$/, "Phone number must be exactly 7 digits"),

  province: z
    .string()
    .min(2, "Province/state must be at least 2 characters long")
    .max(100, "Province/state cannot exceed 100 characters")
    .regex(/^[A-Za-zÀ-ÿ ]+$/, "Province/state can only contain letters and spaces"),

  country: z
    .string()
    .min(2, "Country must be at least 2 characters long")
    .max(100, "Country cannot exceed 100 characters")
    .regex(/^[A-Za-zÀ-ÿ ]+$/, "Country can only contain letters and spaces"),

  postalCode: z
    .string()
    .regex(/^[A-Za-z0-9 ]{3,10}$/, "Postal code must be 3–10 characters long, using only letters, numbers, or spaces"),

  linkedin: z
    .string()
    .url("Invalid LinkedIn URL")
    .regex(
      /^https?:\/\/(www\.)?linkedin\.com\/(in|pub)\/[A-Za-z0-9_-]+\/?$/,
      "LinkedIn URL must be in the format: https://www.linkedin.com/in/username"
    )
    .optional()
    .or(z.literal("")),

  github: z
    .string()
    .url("Invalid GitHub URL")
    .regex(
      /^https?:\/\/(www\.)?github\.com\/[A-Za-z0-9_-]+\/?$/,
      "GitHub URL must be in the format: https://github.com/username"
    )
    .optional()
    .or(z.literal("")),

  websitePortfolio: z
    .string()
    .url("Invalid portfolio URL")
    .optional()
    .or(z.literal("")),
});


export type ResumeSectionInfo = z.infer<typeof ResumeSectionInfoSchema>

export const RESUME_SECTIONS: ResumeSection[] = [
{
    header:'Person & Contact Information',
    rows: [
      {
        subSection: false,
        fields: [
          {
            id:'txt-firstname',
            name:'firstName',
            type: "text",
            label:'First Name',
            placeholder: 'Type your first name, e.g., John',
            icon: faUser,
            col: 4,
            required:true
            
          }, {
            id:'txt-lastname',
            name:'lastName',
            type: "text",
            label:'Last Name',
            placeholder:"Type your last name, e.g., Doe",
            icon: faUser,
            col: 4,
            required:true
          }
        ]
      },
      {
        subSection: false,
        fields: [
          {
            id:'txt-jobtitle',
            name:'jobTitle',
            type: "text",
            label:'Job Title',
            placeholder:"Your current role, e.g., Software Engineer",
            icon: faBriefcase,
            col: 4,
            required:true
          }, {
            id:'txt-email',
            name:'email',
            type: "text",
            label:'E-Mail',
            placeholder:"Enter your email, e.g., john.doe@example.com",
            icon: faEnvelopeOpen,
            col: 4,
            required:true
          }
        ]
      },
      {
        subSection: true,
        header: 'Phone Number',
        fields: [
          {
            id:'txt-countrycode',
            name:'countryCode',
            type: "text",
            label:'+',
            col: 1,
            required:true
          }, {
            id:'txt-areacode',
            name:'areaCode',
            type: "text",
            label:'Area Code',
            placeholder:"Your area code, e.g., 416",
            icon: faLocationDot,
            col: 1.5,
            required:true
          }, {
            id:'txt-number',
            name:'number',
            type: "text",
            label:'Number',
            placeholder:"Enter phone number, e.g., 5551234",
            icon: faMobileAlt,
            col: 1.5,
            required:true
          }
        ]
      },
      {
        subSection: false,
        fields: [
          {
            id:'txt-city',
            name:'city',
            type: "text",
            label:'City',
            placeholder:"Where you live, e.g., San Francisco",
            icon: faCity,
            col: 3,
            required:true
          }, {
            id:'txt-province',
            name:'province',
            type: "text",
            label:'Province/State',
            placeholder:"Type your state/province, e.g., ON",
            icon: faMapLocationDot,
            col: 3,
            required:true
          }, {
            id:'txt-country',
            name:'country',
            type: "text",
            label:'Country',
            placeholder:"Your country, e.g., Canada",
            icon: faGlobe,
            col: 3,
            required:true
          }, {
            id:'txt-postalcode',
            name:'postalCode',
            type: "text",
            label:'Postal Code',
            placeholder:"Enter postal code, e.g., A1B 2C3",
            col: 3,
            required:false
          }
        ]
      }    
    ]
}, {
    header:'Social media Information',
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
]