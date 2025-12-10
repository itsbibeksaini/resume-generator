import { faBuilding, faCalendar, faCity, faClipboardList, faGlobe, faIdBadge, faMapLocation } from "@fortawesome/free-solid-svg-icons";
import type { Section } from "../renderers/SectionRenderer";
import z from "zod";

const parseMonthYear = (value: string) => {
    const [monthStr, yearStr] = value.split('/');
    if (!monthStr || !yearStr) throw new Error("Invalid MM/YYYY format");
    const month = parseInt(monthStr, 10) - 1; // JS months are 0-based
    const year = parseInt(yearStr, 10);
    return new Date(year, month, 1);
};

export const PROFESSIONAL_EXPERIENCE_DETAILS: Section = {
    header: "",
    rows: [{
        subSection: false,
        fields: [
            {
                id: 'txt-companyName',
                name: 'companyName',
                type: "text",
                label: 'Company name',
                placeholder: 'Enter company name',
                col: 6,
                icon: faBuilding,
                required: true,
                events: [
                    { type: 'blur' }
                ],
                validations: z.string().trim()
                    .min(1, 'Company name is required')
                    .max(100, 'Company name must be less than 100 characters')
                    .regex(/^[a-zA-Z0-9\s.,-]+$/, 'Invalid company name')
            },
            {
                id: 'txt-jobPosition',
                name: 'jobPosition',
                type: "text",
                label: 'Job position',
                placeholder: 'Enter job position',
                col: 6,
                icon: faIdBadge,
                required: true,
                events: [
                    { type: 'blur' }
                ],
                validations: z.string().trim()
                    .min(1, 'Job position is required')
                    .max(100, 'Job position must be less than 100 characters')
                    .regex(/^[a-zA-Z0-9\s.,-]+$/, 'Invalid job position')
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
                icon: faCalendar,
                required: true,
                events: [
                    { type: 'change' }
                ],
                validations: z.string("Start date is required.")
                    .refine(val => /^\d{2}\/\d{4}$/.test(val), { message: "Start date must be in MM/YYYY format" })
                    .transform(parseMonthYear)
            },
            {
                id: 'txt-endDate',
                name: 'endDate',
                type: "date-picker",
                label: 'End date',
                col: 6,
                icon: faCalendar,
                required: true,
                events: [
                    { type: 'change' }
                ],
                validations: z.string("End date is required.")
                    .refine(val => /^\d{2}\/\d{4}$/.test(val), { message: "End date must be in MM/YYYY format" })
                    .transform(parseMonthYear)
            }
        ]
    }, {
        subSection: false,
        fields: [
            {
                id: 'txt-city',
                name: 'city',
                type: "text",
                placeholder: 'Enter city',
                label: 'City',
                col: 4,
                icon: faCity,
                required: true,
                events: [
                    { type: 'blur' }
                ],
                validations: z.string().trim()
                    .min(1, 'City is required')
                    .max(100, 'City must be less than 100 characters')
                    .regex(/^[a-zA-Z0-9\s.,-]+$/, 'Invalid city')
            },
            {
                id: 'txt-state',
                name: 'state',
                type: "text",
                placeholder: 'Enter province / state',
                label: 'Province / State',
                col: 4,
                icon: faMapLocation,
                required: true,
                events: [
                    { type: 'blur' }
                ],
                validations: z.string().trim()
                    .min(1, 'Province / State is required')
                    .max(100, 'Province / State must be less than 100 characters')
                    .regex(/^[a-zA-Z0-9\s.,-]+$/, 'Invalid province / state')
            },
            {
                id: 'txt-country',
                name: 'country',
                type: "text",
                placeholder: 'Enter country',
                label: 'Country',
                icon: faGlobe,
                col: 4,
                required: true,
                events: [
                    { type: 'blur' }
                ],
                validations: z.string().trim()
                    .min(1, 'Country is required')
                    .max(100, 'Country must be less than 100 characters')
                    .regex(/^[a-zA-Z0-9\s.,-]+$/, 'Invalid country')
            }
        ]
    }, {
        subSection: false,
        fields: [
            {
                id: 'txt-responsibilities',
                name: 'responsibilities',
                placeholder: 'Enter job role\'s responsibilities',
                type: "text",
                label: 'Responsibilities',
                col: 12,
                icon: faClipboardList,
                required: true,
                isMultiValue: true,
                multiValueOptions: {
                    placeholder: 'No responsibilities added.'
                },
                events: [
                    { type: 'key-down' }
                ],
                validations: z
                    .array(
                        z.string()
                            .trim()
                            .min(100, "Responsibilities must be at least 100 characters")
                            .max(1000, "Responsibilities must be less than 1000 characters")
                            .regex(/^[a-zA-Z0-9\s.,-]+$/, "Invalid responsibilities")
                    )
                    .min(1, "At least one responsibility is required")
            }
        ]
    }]

}