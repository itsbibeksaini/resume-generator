import type { DynamicFieldProps } from "../../../../../core/fields/DynamicField"

type EducationSections = {
    header: string,
    rows: EducationSectionRow[]
}

type EducationSectionRow = {
    subSection: boolean
    header?: string
    fields: DynamicFieldProps[]
}

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
                    required:true
                },
                {
                    id:'txt-course',
                    name:'course',
                    type: "text",
                    label:'Course',
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
                    col: 6,
                    required:true
                },
                {
                    id:'txt-completionDate',
                    name:'completionDate',
                    type: "date-picker",
                    label:'Completion date',
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
                    col: 4,
                    required:true
                },
                {
                    id:'txt-state',
                    name:'state',
                    type: "text",
                    label:'Province / State',
                    col: 4,
                    required:true
                },
                {
                    id:'txt-country',
                    name:'country',
                    type: "text",
                    label:'Country',
                    col: 4,
                    required:true
                }
            ]
        }]
    }
]