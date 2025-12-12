import { faCalendar, faClipboardList, faFolderOpen, faMicrochip } from "@fortawesome/free-solid-svg-icons";
import type { Section } from "../renderers/SectionRenderer";
import z from "zod";

const parseMonthYear = (value: string) => {
    const [monthStr, yearStr] = value.split('/');
    if (!monthStr || !yearStr) throw new Error("Invalid MM/YYYY format");
    const month = parseInt(monthStr, 10) - 1; // JS months are 0-based
    const year = parseInt(yearStr, 10);
    return new Date(year, month, 1);
};

export const PROJECT_DETAILS: Section = {
    header: '',
    description: 'Provide the main details of your project, including its name, timeline, description, and the technologies you used.',
    rows: [{
        subSection: false,
        fields: [
            {
                id: 'txt-projectName',
                name: 'projectName',
                type: "text",
                label: 'Project name',
                placeholder: 'Enter project name',
                col: 6,
                required: true,
                icon: faFolderOpen,
                events: [
                    { type: 'blur' }
                ],
                validations: z.string().trim()
                    .min(1, 'Project name is required')
                    .max(100, 'Project name must be less than 100 characters')
                    .regex(/^[a-zA-Z0-9\s.,-]+$/, 'Invalid project name')
            },
            {
                id: 'txt-subtitle',
                name: 'subtitle',
                type: "text",
                label: 'Subtitle',
                placeholder: 'Enter subtitle',
                col: 6,
                required: true,
                icon: faMicrochip,
                events: [
                    { type: 'blur' }
                ],
                validations: z.string().trim()
                    .min(1, 'Subtitle is required')
                    .max(100, 'Subtitle must be less than 100 characters')
                    .regex(/^[a-zA-Z0-9\s.,-]+$/, 'Invalid subtitle')
            }
        ]
    }, {
        subSection: false,
        fields: [
            {
                id: 'txt-startDate',
                name: 'startDate',
                type: "date-picker",
                label: 'Start date',
                col: 6,
                required: true,
                icon: faCalendar,
                events: [
                    { type: 'change' }
                ],
                validations: z.string().trim()
                    .min(1, 'Start date is required')
                    .refine(val => /^\d{2}\/\d{4}$/.test(val), { message: "Start date must be in MM/YYYY format" })
                    .transform(parseMonthYear)
            },
            {
                id: 'txt-endDate',
                name: 'endDate',
                type: "date-picker",
                label: 'End date',
                col: 6,
                required: true,
                icon: faCalendar,
                events: [
                    { type: 'change' }
                ],
                validations: z.string().trim()
                    .min(1, 'End date is required')
                    .refine(val => /^\d{2}\/\d{4}$/.test(val), { message: "End date must be in MM/YYYY format" })
                    .transform(parseMonthYear)
            }
        ]
    }, {
        subSection: false,
        fields: [
            {
                id: 'txt-projectDescription',
                name: 'projectDescription',
                type: "text",
                label: 'Project description',
                placeholder: 'Enter project description',
                col: 12,
                required: true,
                icon: faClipboardList,
                multiValue: true,
                multiValueOptions: {
                    placeholder: 'No project description added.',
                    view: 'timeline'
                },
                events: [
                    { type: 'key-down' }
                ],
                validations: z
                    .array(
                        z.string()
                            .trim()
                            .min(100, "Project description must be at least 100 characters")
                            .max(1000, "Project description must be less than 1000 characters")
                            .regex(/^[a-zA-Z0-9\s.,-]+$/, "Invalid project description")
                    )
                    .min(1, "At least one project description is required")
            }
        ]
    }, {
        subSection: false,
        fields: [
            {
                id: 'txt-technologiesUsed',
                name: 'technologiesUsed',
                type: "text",
                label: 'Technologies used',
                placeholder: 'Enter technologies used to build the project',
                helperText: 'Type one or more skills, separated by commas, then press Enter.',
                col: 12,
                required: true,
                icon: faMicrochip,
                multiValue: true,
                multiValueOptions: {
                    placeholder: 'No technologies added.',
                    view: 'tags'
                },
                events: [
                    { type: 'key-down' }
                ],
                validations: z
                    .array(
                        z.string()
                            .trim()
                            .min(1, "Technology is required")
                            .max(15, "Technology must be less than 15 characters")
                            .regex(/^[a-zA-Z0-9\s.,-]+$/, "Invalid technology")
                    )
                    .min(1, "At least one technology is required")
            }
        ]
    }]
}