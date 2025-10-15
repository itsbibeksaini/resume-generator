import type { DynamicFieldProps } from "../../../../../core/fields/DynamicField"

type AwardsSections = {
    header: string,
    rows: AwardsSectionRow[]
}

type AwardsSectionRow = {
    subSection: boolean
    header?: string
    fields: DynamicFieldProps[]
}

export const AWARDS_SECTION: AwardsSections[] = [
    {
        header: '',
        rows: [
            {
                subSection: false,
                fields:[
                    {
                        id:'txt-awardName',
                        name:'awardName',
                        type: "text",
                        label:'Award / Certification Name',
                        col: 6,
                        required:true
                    },{
                        id:'txt-institution',
                        name:'institution',
                        type: "text",
                        label:'Institution',
                        col: 6,
                        required:true
                    }
                ]
            },{
                subSection: false,
                fields:[
                    {
                        id:'txt-startDate',
                        name:'issueDate',
                        type: "date-picker",
                        label:'Issue date',
                        col: 6,
                        required:true
                    },{
                        id:'txt-expirationDate',
                        name:'expirationDate',
                        type: "date-picker",
                        label:'Expiration date',
                        col: 6,
                        required:false
                    }
                ]
            }
        ]
    }
]