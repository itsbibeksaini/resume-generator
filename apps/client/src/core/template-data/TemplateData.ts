export type TemplateData = {
    fullName: string;
    jobTitle: string;
    contactInfo: ContactInfo;
    skills: string[]
    educationInfo: EducationInfo[]
    summary: string[]
    professionalExperience: ProfessionalExperienceInfo[]
}

type ContactInfo = {
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    website: string;
}

export type EducationInfo = {
    schoolName: string,
    course: string,
    startDate: string,
    completionDate: string,
    city: string,
    state: string,
    country?: string
}

export type ProfessionalExperienceInfo = {
    jobPosition: string,
    companyName: string,
    startDate: string,
    endDate: string,
    city: string,
    state: string,
    country?: string,
    responsibilities: string[],
    achievements: string[]
}