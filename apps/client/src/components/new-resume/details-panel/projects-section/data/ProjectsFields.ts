import type { DynamicFieldProps } from "../../../../../core/fields/DynamicField"

type ProjectSections = {
    header: string,
    rows: ProjectSectionRow[]
}

type ProjectSectionRow = {
    subSection: boolean
    header?: string
    fields: DynamicFieldProps[]
}

export const PROJECT_SECTION: ProjectSections[] = [
    {
        header: '',
        rows: [
            {
                subSection: false,
                fields: [
                    {
                        id:'txt-projectName',
                        name:'projectName',
                        type: "text",
                        label:'Project name',
                        col: 6,
                        required:true
                    },
                    {
                        id:'txt-subtitle',
                        name:'subtitle',
                        type: "text",
                        label:'Subtitle',
                        col: 6,
                        required:true
                    }
                ]
            },{
                subSection: false,
                fields: [
                    {
                        id:'txt-startDate',
                        name:'startDate',
                        type: "date-picker",
                        label:'Start date',
                        col: 6,
                        required:true
                    },
                    {
                        id:'txt-endDate',
                        name:'endDate',
                        type: "date-picker",
                        label:'End date',
                        col: 6,
                        required:true
                    }
                ]
            },
            {
                subSection: false,
                fields: [
                    {
                        id:'txt-projectDescription',
                        name:'projectDescription',
                        type: "text",
                        label:'Project description',
                        col: 12,
                        required:true
                    }                    
                ]
            }
        ]
    }
]