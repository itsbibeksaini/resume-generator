import type { DynamicFieldProps } from "../../../../../core/fields/DynamicField"

type ProfessionalExperienceSections = {
    header: string,
    rows: ProfessionalExperienceSectionRow[]
}

type ProfessionalExperienceSectionRow = {
    subSection: boolean
    header?: string
    fields: DynamicFieldProps[]
}

export const PROFESSIONAL_EXPERIENCE_SECTIONS: ProfessionalExperienceSections[] = [
    {
        header:'',
        rows: [{
            subSection: false,
            fields: [
                {
                    id:'txt-companyname',
                    name:'companyname',
                    type: "text",
                    label:'Company name',
                    col: 6,
                    required:true
                },
                {
                    id:'txt-jobposition',
                    name:'jobposition',
                    type: "text",
                    label:'Job position',
                    col: 6,
                    required:true
                }
            ]
        }, {
            subSection: false,
            fields: [
                {
                    id:'txt-startdate',
                    name:'startdate',
                    type: "date-picker",
                    label:'Start date',
                    col: 6,
                    required:true
                },
                {
                    id:'txt-enddate',
                    name:'enddate',
                    type: "date-picker",
                    label:'End date',
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
        } , {
            subSection: false,
            fields: [
                {
                    id:'txt-responsibilities',
                    name:'responsibilities',
                    type: "text",
                    label:'Responsibilities',
                    col: 12,
                    required:true
                }
            ]
        }]
    }
]