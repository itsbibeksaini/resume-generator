import { faUser } from "@fortawesome/free-solid-svg-icons";
import type { Section } from "../renderers/SectionRenderer";
import z from "zod";

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
            required:true,
             validations: z.string().trim()
                            .min(2, {message: "First name must be at least 2 characters long"})
                            .max(50, {message: "First name must be at most 50 characters long"})
            
          }, {
            id:'txt-lastname',
            name:'lastName',
            type: "text",
            label:'Last Name',
            placeholder:"Type your last name, e.g., Doe",
            icon: faUser,
            col: 4,
            required:true,
            validations: z.string().trim()
                            .min(2, {message: "Last name must be at least 2 characters long"})
                            .max(50, {message: "Last name must be at most 50 characters long"})
          }
        ]
      }
    ]
}