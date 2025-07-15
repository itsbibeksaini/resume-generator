export interface ResumeDetails {
    firstName: string,
    lastName: string,
    jobPosition: string,
    contactInfo: ResumeContactInfo,    
    summary: string[],
    professionalExperience: ProfessionalExperience[],
    education: Education[]

}

export interface ResumeContactInfo {
    email: string,
    phoneNumber: {
        country: string,
        areaCode: string,
        number: string
    },
    location:{
        city: string,
        state: string,
        country: string,
        postalCode?: string,
    }
    linkedIn?: string,
    github?: string,
    website?: string,
}

export interface ProfessionalExperience {
    companyName: string,
    jobTitle: string,
    startDate: string,
    endDate?: string,
    responsibilities: string[],
}

export interface Education{
    institutionName: string,    
    fieldOfStudy?: string,
    startDate: string,
    endDate?: string,    
    location: string
}

// Default resume details
const defaultResumeDetails: ResumeDetails = {
    firstName: '',
    lastName: '',
    jobPosition: '',
    contactInfo: {
        email: '',
        phoneNumber: {
            country: '',
            areaCode: '',
            number: ''
        },
        location: {
            city: '',
            state: '',
            country: '',
            postalCode: ''
        },
        linkedIn: '',
        github: '',
        website: ''
    },
    summary: [],
    professionalExperience: [],
    education: []
};

export const getDefaultResumeDetails = (): ResumeDetails => {
    return { ...defaultResumeDetails };
}

const TEST_RESUME_DETAILS: ResumeDetails = {
    firstName: 'John',
    lastName: 'Doe',
    jobPosition: 'Software Engineer',
    contactInfo: {
        email: 'john.doe@example.com',
        phoneNumber: {
            country: 'USA',
            areaCode: '123',
            number: '456-7890'
        },
        location: {
            city: 'New York',
            state: 'NY',
            country: 'USA',
            postalCode: '10001'
        },
        linkedIn: 'linkedin.com/in/johndoe',
        github: 'github.com/johndoe',
        website: 'johndoe.com'
    },
    summary: [
        'Experienced software engineer with a passion for developing innovative programs.',
        'Proficient in JavaScript, React, and Node.js.',
        'Strong problem-solving skills and ability to work under pressure.'
    ],
    professionalExperience: [
        {
            companyName: 'Tech Company',
            jobTitle: 'Software Engineer',
            startDate: '07/2020',
            endDate: '07/2023',
            responsibilities: [
                'Developed web applications using React and Node.js.',
                'Collaborated with cross-functional teams to define and implement new features.',
                'Participated in code reviews and maintained code quality standards.'
            ]
        },
        {
            companyName: 'Another Tech Company',
            jobTitle: 'Junior Developer',
            startDate: '01/2019',
            endDate: '01/2020',
            responsibilities: [
                'Assisted in the development of internal tools and applications.',
                'Wrote unit tests and documentation for existing code.',
                'Participated in daily stand-ups and sprint planning sessions.'
            ]
        }
    ],
    education: [
        {
            institutionName: 'University of Example',
            fieldOfStudy: 'Computer Science',
            startDate: '09/2015',
            endDate: '06/2019',
            location: 'City, State'
        },
        {
            institutionName: 'Example Community College',
            fieldOfStudy: 'Software Development',
            startDate: '09/2013',
            endDate: '06/2015',
            location: 'City, State'
        },
        {
            institutionName: 'Online Coding Bootcamp',
            fieldOfStudy: 'Full Stack Development',
            startDate: '01/2020',
            endDate: '06/2020',
            location: 'Online'
        }
    ]
};

export const getTestResumeDetails = (): ResumeDetails => {
    return { ...TEST_RESUME_DETAILS };
}