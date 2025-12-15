import { faBriefcase, faCity, faEnvelopeOpen, faGlobe, faLocationDot, faMapLocationDot, faMobileAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import type { Section } from "../renderers/SectionRenderer";
import z from "zod";

export const PERSONAL_DETAILS: Section = {
  header: 'Personal & Contact Information',
  rows: [
    {
      subSection: false,
      fields: [
        {
          id: 'txt-firstname',
          name: 'firstName',
          type: "text",
          label: 'First Name',
          placeholder: 'Type your first name, e.g., John',
          icon: faUser,
          col: 4,
          events: [{
            type: 'blur'
          }],
          required: true,
          validations: z.string().trim()
            .min(2, { message: "First name must be at least 2 characters long" })
            .max(50, { message: "First name must be at most 50 characters long" })
            .regex(/^[A-Za-zÀ-ÿ ]+$/, "First name can only contain letters and spaces")

        }, {
          id: 'txt-lastname',
          name: 'lastName',
          type: "text",
          label: 'Last Name',
          placeholder: "Type your last name, e.g., Doe",
          icon: faUser,
          col: 4,
          required: true,
          events: [{
            type: 'blur'
          }],
          validations: z.string().trim()
            .min(2, { message: "Last name must be at least 2 characters long" })
            .max(50, { message: "Last name must be at most 50 characters long" })
            .regex(/^[A-Za-zÀ-ÿ ]+$/, "Last name can only contain letters and spaces")
        }
      ]
    }, {
      subSection: false,
      fields: [
        {
          id: 'txt-jobtitle',
          name: 'jobTitle',
          type: "text",
          label: 'Job Title',
          placeholder: "Your current role, e.g., Software Engineer",
          icon: faBriefcase,
          col: 4,
          required: true,
          events: [{
            type: 'blur'
          }],
          validations: z
            .string().trim()
            .min(2, "Job title must be at least 2 characters long")
            .max(100, "Job title cannot exceed 100 characters"),

        }, {
          id: 'txt-email',
          name: 'email',
          type: "text",
          label: 'E-Mail',
          placeholder: "Enter your email, e.g., john.doe@example.com",
          icon: faEnvelopeOpen,
          col: 4,
          required: true,
          events: [{
            type: 'blur'
          }],
          validations: z.string().trim()
            .email("Invalid email address format")
        }
      ]
    }, {
      subSection: true,
      header: 'Phone Number',
      fields: [
        {
          id: 'txt-countrycode',
          name: 'countryCode',
          type: "text",
          label: '+',
          col: 1,
          required: true,
          events: [{
            type: 'blur'
          }],
          validations: z.string().trim()
            .regex(/^\d{1,3}$/, "Country code must contain 1–3 digits (e.g., 1, 44, 91)")
        }, {
          id: 'txt-areacode',
          name: 'areaCode',
          type: "text",
          label: 'Area Code',
          placeholder: "Your area code, e.g., 416",
          icon: faLocationDot,
          col: 1.5,
          required: true,
          events: [{
            type: 'blur'
          }],
          validations: z.string().trim()
            .regex(/^\d{3}$/, "Area code must be exactly 3 digits")
        }, {
          id: 'txt-number',
          name: 'number',
          type: "text",
          label: 'Number',
          placeholder: "Enter phone number, e.g., 5551234",
          icon: faMobileAlt,
          col: 1.5,
          required: true,
          events: [{
            type: 'blur'
          }],
          validations: z.string().trim()
            .regex(/^\d{7}$/, "Phone number must be exactly 7 digits"),
        }
      ]
    }, {
      subSection: false,
      fields: [
        {
          id: 'txt-city',
          name: 'city',
          type: "text",
          label: 'City',
          placeholder: "Where you live, e.g., San Francisco",
          icon: faCity,
          col: 3,
          required: true,
          events: [{
            type: 'blur'
          }],
          validations: z
            .string().trim()
            .min(2, "City must be at least 2 characters long")
            .max(100, "City cannot exceed 100 characters")
            .regex(/^[A-Za-zÀ-ÿ ]+$/, "City can only contain letters and spaces"),
        }, {
          id: 'txt-province',
          name: 'province',
          type: "text",
          label: 'Province/State',
          placeholder: "Type your state/province, e.g., ON",
          icon: faMapLocationDot,
          col: 3,
          required: true,
          events: [{
            type: 'blur'
          }],
          validations: z.string().trim()
            .min(2, "Province/state must be at least 2 characters long")
            .max(100, "Province/state cannot exceed 100 characters")
            .regex(/^[A-Za-zÀ-ÿ ]+$/, "Province/state can only contain letters and spaces"),
        }, {
          id: 'txt-country',
          name: 'country',
          type: "text",
          label: 'Country',
          placeholder: "Your country, e.g., Canada",
          icon: faGlobe,
          col: 3,
          required: true,
          events: [{
            type: 'blur'
          }],
          validations: z.string().trim()
            .min(2, "Country must be at least 2 characters long")
            .max(100, "Country cannot exceed 100 characters")
            .regex(/^[A-Za-zÀ-ÿ ]+$/, "Country can only contain letters and spaces"),
        }, {
          id: 'txt-postalcode',
          name: 'postalCode',
          type: "text",
          label: 'Postal Code',
          placeholder: "Enter postal code, e.g., A1B 2C3",
          col: 3,
          required: false,
          events: [{
            type: 'blur'
          }],
          validations: z
            .string().trim()
            .regex(
              /^[A-Za-z]\d[A-Za-z][ ]?\d[A-Za-z]\d$/,
              "Postal code must be in the format A1A 1A1"
            )

            .optional()
            .or(z.literal(""))
        }
      ]
    }
  ]
}