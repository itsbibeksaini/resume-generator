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
                        id:'txt-projectname',
                        name:'projectname',
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
            },
            {
                subSection: false,
                fields: [
                    {
                        id:'txt-projectdescription',
                        name:'projectdescription',
                        type: "text",
                        label:'Project description',
                        col: 12,
                        required:true
                    }                    
                ]
            },{
                subSection: false,
                fields: [
                    {
                        id:'txt-technologiesused',
                        name:'technologiesused',
                        type: "text",
                        label:'Technologies used',
                        col: 12,
                        required:true
                    }                    
                ]
            }
        ]
    }
]