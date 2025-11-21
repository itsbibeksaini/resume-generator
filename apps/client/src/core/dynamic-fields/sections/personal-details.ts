import { faUser } from "@fortawesome/free-solid-svg-icons";
import type { Section } from "../renderers/SectionRenderer";

export const PERSONAL_DETAILS: Section = {
    header: 'Personal & Contact Information',
    rows: [
        {
        subSection: false,
        fields: [
          {
            id:'txt-firstname',
            name:'firstName',
            type: "text",
            label:'First Name',
            placeholder: 'Type your first name, e.g., John',
            icon: faUser,
            col: 4,
            events: [{
                type: 'blur'
            }],
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
      }
    ]
}