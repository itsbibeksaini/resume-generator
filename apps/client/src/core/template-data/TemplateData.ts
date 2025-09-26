export type TemplateData = {
    fullName: string;
    jobTitle: string;
    contactInfo: ContactInfo;
}

type ContactInfo = {
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    website: string;
}