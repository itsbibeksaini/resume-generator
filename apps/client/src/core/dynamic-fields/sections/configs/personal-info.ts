import { faBriefcase, faCity, faEnvelopeOpen, faGlobe, faLocationDot, faMapLocationDot, faMobileAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import type { SectionConfig } from "../SectionConfig";

export const PERSONAL_INFO: SectionConfig = {
    header: "Person & Contact Information",
    rows:[
        {
            subSection: false,
            fields: [{
                        id:'txt-firstname',
                        name:'firstName',
                        type: "text",
                        label:'First Name',
                        placeholder: 'Type your first name, e.g., John',
                        icon: faUser,
                        col: 4,
                        required:true
                    }, {
                        id:'txt-lastname',
                        name:'lastName',
                        type: "text",
                        label:'Last Name',
                        placeholder:"Type your last name, e.g., Doe",
                        icon: faUser,
                        col: 4,
                        required:true
                    }
            ]
        }, {
                subSection: false,
                fields: [
                  {
                    id:'txt-jobtitle',
                    name:'jobTitle',
                    type: "text",
                    label:'Job Title',
                    placeholder:"Your current role, e.g., Software Engineer",
                    icon: faBriefcase,
                    col: 4,
                    required:true
                  }, {
                    id:'txt-email',
                    name:'email',
                    type: "text",
                    label:'E-Mail',
                    placeholder:"Enter your email, e.g., john.doe@example.com",
                    icon: faEnvelopeOpen,
                    col: 4,
                    required:true
                  }
                ]
            }, {
                    subSection: true,
                    header: 'Phone Number',
                    fields: [
                      {
                        id:'txt-countrycode',
                        name:'countryCode',
                        type: "text",
                        label:'+',
                        col: 1,
                        required:true
                      }, {
                        id:'txt-areacode',
                        name:'areaCode',
                        type: "text",
                        label:'Area Code',
                        placeholder:"Your area code, e.g., 416",
                        icon: faLocationDot,
                        col: 1.5,
                        required:true
                      }, {
                        id:'txt-number',
                        name:'number',
                        type: "text",
                        label:'Number',
                        placeholder:"Enter phone number, e.g., 5551234",
                        icon: faMobileAlt,
                        col: 1.5,
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
                            placeholder:"Where you live, e.g., San Francisco",
                            icon: faCity,
                            col: 3,
                            required:true
                          }, {
                            id:'txt-province',
                            name:'province',
                            type: "text",
                            label:'Province/State',
                            placeholder:"Type your state/province, e.g., ON",
                            icon: faMapLocationDot,
                            col: 3,
                            required:true
                          }, {
                            id:'txt-country',
                            name:'country',
                            type: "text",
                            label:'Country',
                            placeholder:"Your country, e.g., Canada",
                            icon: faGlobe,
                            col: 3,
                            required:true
                          }, {
                            id:'txt-postalcode',
                            name:'postalCode',
                            type: "text",
                            label:'Postal Code',
                            placeholder:"Enter postal code, e.g., A1B 2C3",
                            col: 3,
                            required:false
                          }
                        ]
                    }
    ]
}