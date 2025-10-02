export type TemplateData = {
    fullName: string;
    jobTitle: string;
    contactInfo: ContactInfo;
    skills: string[]
    educationInfo?: EducationInfo
}

type ContactInfo = {
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    website: string;
}

type EducationInfo = {
    schoolName: string,
    course: string,
    startDate: string,
    completionDate: string,
    city: string,
    state: string,
    country?: string
}