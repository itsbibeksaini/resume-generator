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
                        id:'txt-awardname',
                        name:'awardname',
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
                        id:'txt-startdate',
                        name:'startdate',
                        type: "date-picker",
                        label:'Start date',
                        col: 6,
                        required:true
                    },{
                        id:'txt-enddate',
                        name:'enddate',
                        type: "date-picker",
                        label:'End date',
                        col: 6,
                        required:true
                    }
                ]
            }
        ]
    }
]