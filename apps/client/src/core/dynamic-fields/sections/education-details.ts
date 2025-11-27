import { faCalendar, faCity, faGlobe, faGraduationCap, faMapLocation, faSchool } from "@fortawesome/free-solid-svg-icons";
import type { Section } from "../renderers/SectionRenderer";
import z from "zod";

const parseMonthYear = (value: string) => {
    const [monthStr, yearStr] = value.split('/');
    if (!monthStr || !yearStr) throw new Error("Invalid MM/YYYY format");
    const month = parseInt(monthStr, 10) - 1; // JS months are 0-based
    const year = parseInt(yearStr, 10);
    return new Date(year, month, 1);
};

export const EDUCATIONAL_DETAILS: Section = {
    header: "",
    rows: [{
        subSection: false,
        fields: [
            {
                id: 'txt-schoolName',
                name: 'schoolName',
                type: "text",
                label: 'School / College',
                col: 6,
                icon: faSchool,
                required: true,
                events: [{
                    type: 'blur'
                }],
                validations: z.string({ error: "School name is required." }).trim()
                    .min(2, "School name must be at least 2 characters long.")
                    .max(100, "School name must be at most 100 characters long.")
            },
            {
                id: 'txt-course',
                name: 'course',
                type: "text",
                label: 'Course',
                icon: faGraduationCap,
                col: 6,
                required: true,
                events: [{
                    type: 'blur'
                }],
                validations: z.string("Course name is required.").trim()
                    .min(2, "Course name must be at least 2 characters long.")
                    .max(100, "Course name must be at most 100 characters long.")
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
                icon: faCalendar,
                col: 6,
                required: true,
                events: [{
                    type: 'change'
                }],
                validations: z.string("Start date is required.")
                    .refine(val => /^\d{2}\/\d{4}$/.test(val), { message: "Start date must be in MM/YYYY format" })
                    .transform(parseMonthYear)
            },
            {
                id: 'txt-completionDate',
                name: 'completionDate',
                type: "date-picker",
                label: 'Completion date',
                icon: faCalendar,
                col: 6,
                required: true,
                events: [{
                    type: 'change'
                }],
                validations: z.string("Completion date is required.")
                    .refine(val => /^\d{2}\/\d{4}$/.test(val), { message: "Completion date must be in MM/YYYY format" })
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
                label: 'City',
                icon: faCity,
                col: 4,
                required: true,
                events: [{
                    type: 'blur'
                }],
                validations: z.string("City is required.").trim()
                    .min(2, "City name must be at least 2 characters long.")
                    .max(50, "City name must be at most 50 characters long.")
            },
            {
                id: 'txt-state',
                name: 'state',
                type: "text",
                label: 'Province / State',
                icon: faMapLocation,
                col: 4,
                required: true,
                events: [{
                    type: 'blur'
                }],
                validations: z.string("State is required.").trim()
            },
            {
                id: 'txt-country',
                name: 'country',
                type: "text",
                label: 'Country',
                icon: faGlobe,
                col: 4,
                required: true,
                events: [{
                    type: 'blur'
                }],
                validations: z.string("Country is required.").trim()
                    .min(2, "Country name must be at least 2 characters long.")
                    .max(50, "Country name must be at most 50 characters long.")
            }
        ]
    }]
}