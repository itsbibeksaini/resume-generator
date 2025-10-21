import type { DynamicFieldProps } from "./DynamicField";

type ResumeSection = {
    rows: ResumeSectionRow[]
    header: string
}

type ResumeSectionRow = {
  subSection: boolean
  header?: string
  fields: DynamicFieldProps[]
}

export const RESUME_SECTIONS: ResumeSection[] = [
{
    header:'Person & Contact Information',
    rows: [
      {
        subSection: false,
        fields: [
          {
            id:'txt-firstname',
            name:'firstname',
            type: "text",
            label:'First Name',
            col: 4,
            required:true
          }, {
            id:'txt-lastname',
            name:'lastname',
            type: "text",
            label:'Last Name',
            col: 4,
            required:true
          }
        ]
      },
      {
        subSection: false,
        fields: [
          {
            id:'txt-jobtitle',
            name:'jobtitle',
            type: "text",
            label:'Job Title',
            col: 4,
            required:true
          }, {
            id:'txt-email',
            name:'email',
            type: "text",
            label:'E-Mail',
            col: 4,
            required:true
          }
        ]
      },
      {
        subSection: true,
        header: 'Phone Number',
        fields: [
          {
            id:'txt-countrycode',
            name:'countrycode',
            type: "text",
            label:'+',
            col: 1,
            required:true
          }, {
            id:'txt-areacode',
            name:'areacode',
            type: "text",
            label:'Area Code',
            col: 1.5,
            required:true
          }, {
            id:'txt-number',
            name:'number',
            type: "text",
            label:'Number',
            col: 1.5,
            required:true
          }
        ]
      },
      {
        subSection: false,
        fields: [
          {
            id:'txt-city',
            name:'city',
            type: "text",
            label:'City',
            col: 3,
            required:true
          }, {
            id:'txt-province',
            name:'province',
            type: "text",
            label:'Province/State',
            col: 3,
            required:true
          }, {
            id:'txt-country',
            name:'country',
            type: "text",
            label:'Country',
            col: 3,
            required:true
          }, {
            id:'txt-postalcode',
            name:'postalcode',
            type: "text",
            label:'Postal Code',
            col: 3,
            required:false
          }
        ]
      }    
    ]
}, {
    header:'Social media Information',
    rows: [      
      {
        subSection: false,
        fields: [
          {
            id:'txt-linkedin',
            name:'linkedin',
            type: "text",
            label:'LinkedIn',
            col: 4,
            required:true
          },
          {
            id:'txt-github',
            name:'github',
            type: "text",
            label:'Github',
            col: 4,
            required:true
          },
          {
            id:'txt-website-portfolio',
            name:'website-portfolio',
            type:'text',
            label:'Website - Portfolio',
            col: 4,
            required:false
          }
        ]
      }
    ]
}
]