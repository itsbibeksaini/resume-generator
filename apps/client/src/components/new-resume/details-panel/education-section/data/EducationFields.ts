import z from "zod"
import type { DynamicFieldProps } from "../../../../../core/fields/DynamicField"
import {  faCalendar, faCity, faGlobe, faGraduationCap, faMapLocation, faSchool } from "@fortawesome/free-solid-svg-icons"

type EducationSections = {
    header: string,
    rows: EducationSectionRow[]
}

type EducationSectionRow = {
    subSection: boolean
    header?: string
    fields: DynamicFieldProps[]
}

const parseMonthYear = (value: string) => {
  const [monthStr, yearStr] = value.split('/');
  if (!monthStr || !yearStr) throw new Error("Invalid MM/YYYY format");
  const month = parseInt(monthStr, 10) - 1; // JS months are 0-based
  const year = parseInt(yearStr, 10);
  return new Date(year, month, 1);
};

export const EducationInfoSchema = z.object({
    schoolName: z.string({ error: "School name is required." })
                .trim().min(2, "School name must be at least 2 characters long.")
                .max(100, "School name must be at most 100 characters long."),
    course: z.string("Course name is required.").trim()
            .min(2, "Course name must be at least 2 characters long.")
            .max(100, "Course name must be at most 100 characters long."),
    startDate: z.string("Start date is required.")
                .refine(val => /^\d{2}\/\d{4}$/.test(val), { message: "Start date must be in MM/YYYY format" })
                .transform(parseMonthYear),              
    completionDate: z.string("Completion date is required.")
                    .refine(val => /^\d{2}\/\d{4}$/.test(val), { message: "Completion date must be in MM/YYYY format" })
                    .transform(parseMonthYear),
    city: z.string("City is required.").trim()
        .min(2, "City name must be at least 2 characters long.")
        .max(50, "City name must be at most 50 characters long."),
    state: z.string("State is required.").trim(),
    country: z.string("Country is required.").trim()
            .min(2, "Country name must be at least 2 characters long.")
            .max(50, "Country name must be at most 50 characters long.")
}).refine(data => data.completionDate >= data.startDate,{
    error: "Completion date cannot be before start date.",
    path:["completionDate"]
})

export type EducationInfo = z.infer<typeof EducationInfoSchema>

export const EDUCATION_SECTIONS:EducationSections[] = [
    {
        header: '',
        rows:[{
            subSection: false,
            fields: [
                {
                    id:'txt-schoolName',
                    name:'schoolName',
                    type: "text",
                    label:'School / College',
                    col: 6,
                    icon: faSchool,
                    required:true
                },
                {
                    id:'txt-course',
                    name:'course',
                    type: "text",
                    label:'Course',
                    icon:faGraduationCap,
                    col: 6,
                    required:true
                }
            ]
        }, {
            subSection: false,
            fields:  [
                {
                    id:'txt-startDate',
                    name:'startDate',
                    type: "date-picker",
                    label:'Start date',
                    icon:faCalendar,
                    col: 6,
                    required:true
                },
                {
                    id:'txt-completionDate',
                    name:'completionDate',
                    type: "date-picker",
                    label:'Completion date',
                    icon:faCalendar,
                    col: 6,
                    required:true
                }
            ]
        }, {
            subSection: false,
            fields: [
                {
                    id:'txt-city',
                    name:'city',
                    type: "text",
                    label:'City',
                    icon:faCity,
                    col: 4,
                    required:true
                },
                {
                    id:'txt-state',
                    name:'state',
                    type: "text",
                    label:'Province / State',
                    icon: faMapLocation,
                    col: 4,
                    required:true
                },
                {
                    id:'txt-country',
                    name:'country',
                    type: "text",
                    label:'Country',
                    icon: faGlobe,
                    col: 4,
                    required:true
                }
            ]
        }]
    }
]