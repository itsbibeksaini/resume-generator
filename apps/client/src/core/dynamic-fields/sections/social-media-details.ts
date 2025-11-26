import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import type { Section } from "../renderers/SectionRenderer";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import z from "zod";

export const SOCIAL_MEDIA_DETAILS: Section = {
    header: "Social Media Information",
    rows: [
        {
            subSection: false,
            fields: [
                {
                    id: 'txt-linkedin',
                    name: 'linkedin',
                    type: "text",
                    label: 'LinkedIn',
                    placeholder: "Add your LinkedIn profile URL",
                    icon: faLinkedin,
                    col: 4,
                    required: false,
                    events: [{
                        type: 'blur'
                    }],
                    validations: z
                        .string().trim()
                        .url("Invalid LinkedIn URL")
                        .regex(
                            /^https?:\/\/(www\.)?linkedin\.com\/(in|pub)\/[A-Za-z0-9_-]+\/?$/,
                            "LinkedIn URL must be in the format: https://www.linkedin.com/in/username"
                        )
                        .optional()
                        .or(z.literal(""))
                },
                {
                    id: 'txt-github',
                    name: 'github',
                    type: "text",
                    label: 'Github',
                    placeholder: "Add your GitHub profile URL",
                    icon: faGithub,
                    col: 4,
                    required: false,
                    events: [{
                        type: 'blur'
                    }],
                    validations: z
                        .string().trim()
                        .url("Invalid GitHub URL")
                        .regex(
                            /^https?:\/\/(www\.)?github\.com\/[A-Za-z0-9_-]+\/?$/,
                            "GitHub URL must be in the format: https://github.com/username"
                        )
                        .optional()
                        .or(z.literal(""))
                },
                {
                    id: 'txt-website-portfolio',
                    name: 'websitePortfolio',
                    type: 'text',
                    label: 'Website - Portfolio',
                    placeholder: "Add your website or portfolio URL",
                    icon: faGlobe,
                    col: 4,
                    required: false,
                    events: [{
                        type: 'blur'
                    }],
                    validations: z
                        .string().trim()
                        .url("Invalid portfolio URL")
                        .optional()
                        .or(z.literal(""))
                }
            ]
        }
    ]
}
