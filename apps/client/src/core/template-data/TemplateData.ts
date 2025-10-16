export type TemplateData = {
    fullName: string;
    jobTitle: string;
    contactInfo: ContactInfo;
    skills: string[]
    educationInfo: EducationInfo[]
    summary: string[]
    professionalExperience: ProfessionalExperienceInfo[],
    projects: ProjectInfo[],
    awardsAndCertifications?: AwardsAndCertificationsInfo[]
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

export type ProjectInfo = {
    projectName: string,
    subtitle: string,
    startDate: string,
    endDate: string,
    projectDescription: string[],
    projectTechnologies: string[]
}

export type AwardsAndCertificationsInfo = {
    type: 'award' | 'certificate',
    title: string,
    issuer: string,
    issueDate: string,
    expirationDate?: string,    
}

export const DUMMY_DATA: TemplateData = {
  fullName: "John Doe",
  jobTitle: "Senior Full Stack Software Engineer",
  contactInfo: {
    location: "San Francisco, CA",
    email: "john.doe@example.com",
    phone: "+1 555-123-4567",
    linkedin: "https://www.linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    website: "https://johndoe.dev"
  },
  skills: [
    "JavaScript", "TypeScript", "React.js", "Next.js", "Angular",
    "Node.js", "Express.js", "Python", "Django", "Flask",
    "RESTful APIs", "GraphQL", "Microservices", "Docker", "Kubernetes",
    "AWS", "Azure", "GCP", "CI/CD", "Git", "PostgreSQL", "MongoDB", "Redis",
    "WebSockets", "Agile Methodologies", "TDD", "Unit Testing", "Jest", "Cypress",
    "System Design", "Technical Leadership", "Mentoring"
  ],
  educationInfo: [
    {
      schoolName: "IK Gujral Punjab Technical University",
      course: "B.TECH in Computer Science",
      startDate: "2012-08-01",
      completionDate: "2016-05-01",
      city: "San Francisco",
      state: "CA",
      country: "USA"
    }, {
      schoolName: "XYZ University",
      course: "B.TECH in Computer Science",
      startDate: "2012-08-01",
      completionDate: "2016-05-01",
      city: "San Francisco",
      state: "CA",
      country: "USA"
    },{
      schoolName: "XYZ University",
      course: "B.TECH in Computer Science",
      startDate: "2012-08-01",
      completionDate: "2016-05-01",
      city: "San Francisco",
      state: "CA",
      country: "USA"
    }
  ],
  summary: [
    "Results-driven Senior Full Stack Software Engineer with 7+ years of experience designing, developing, and deploying scalable web applications.",
    "Proficient in JavaScript, TypeScript, React.js, Node.js, Python, and cloud technologies (AWS, Docker, Kubernetes).",
    "Proven track record of leading cross-functional teams, optimizing system performance, and delivering high-quality, maintainable code.",
    "Passionate about modern architectures, continuous integration, and mentoring junior developers."
  ],
  professionalExperience: [
    {
      jobPosition: "Senior Full Stack Software Engineer",
      companyName: "ABC Tech Solutions",
      startDate: "2021-01-01",
      endDate: "Present",
      city: "San Francisco",
      state: "CA",
      country: "USA",
      responsibilities: [
        "Led the development of scalable web applications using React.js, Node.js, and Express.",
        "Designed and implemented RESTful APIs and GraphQL endpoints for multiple microservices.",
        "Architected and deployed applications on AWS using EC2, S3, RDS, and Lambda.",
        "Implemented CI/CD pipelines using GitHub Actions and Docker.",
        "Mentored and guided a team of 5+ junior developers, establishing coding standards and best practices.",
        "Optimized application performance through database indexing, caching, and code refactoring."
      ],
      achievements: [
        "Reduced system downtime by 50% through infrastructure optimization.",
        "Awarded Employee of the Year 2022 for delivering high-impact projects and mentoring initiatives."
      ]
    },
    {
      jobPosition: "Full Stack Software Engineer",
      companyName: "XYZ Innovations",
      startDate: "2017-06-01",
      endDate: "2020-12-01",
      city: "San Jose",
      state: "CA",
      country: "USA",
      responsibilities: [
        "Developed full-stack features for enterprise web applications using React.js, Angular, Node.js, and MongoDB.",
        "Integrated third-party services, payment gateways, and REST APIs to enhance application functionality.",
        "Participated in system design and architecture discussions to ensure scalable solutions.",
        "Conducted unit and integration testing using Jest and Mocha.",
        "Collaborated with cross-functional teams in an Agile environment."
      ],
      achievements: [
        "Delivered a major product module 2 weeks ahead of schedule, improving client satisfaction.",
        "Optimized database queries, reducing average response time by 35%."
      ]
    },
    {
      jobPosition: "Software Engineer",
      companyName: "TechStart Solutions",
      startDate: "2015-01-01",
      endDate: "2017-05-01",
      city: "San Francisco",
      state: "CA",
      country: "USA",
      responsibilities: [
        "Developed dynamic frontend interfaces using HTML5, CSS3, JavaScript, and React.js.",
        "Assisted in backend API development with Node.js and Express.",
        "Implemented authentication and authorization mechanisms.",
        "Participated in code reviews, debugging, and deployment tasks."
      ],
      achievements: [
        "Implemented user authentication module, securing the application for 10,000+ users.",
        "Contributed to a team project that won an internal innovation award for efficient UI design."
      ]
    }
  ],
  projects: [
    {
      projectName: "Resume Generator Web Application",
      subtitle: "Dynamic web app to create professional resumes",
      startDate: "2022-01-01",
      endDate: "2022-03-01",
      projectDescription: [
        "Built a dynamic web app to generate professional resumes from user input with live preview and PDF export.",
        "Implemented multiple templates, real-time editing, and downloadable PDF output."
      ],
      projectTechnologies: ["React.js", "Node.js", "Express.js", "MongoDB", "jsPDF", "Tailwind CSS"]
    },
    {
      projectName: "Project Scaffolder CLI Tool",
      subtitle: "CLI tool to generate ready-to-use project templates",
      startDate: "2021-06-01",
      endDate: "2021-09-01",
      projectDescription: [
        "Developed a command-line scaffolding tool to generate project templates for React, Node.js, and Django.",
        "Automated folder structure creation, configuration files, Git initialization, and optional dependency installation."
      ],
      projectTechnologies: ["Node.js", "Inquirer.js", "fs module", "Python"]
    },
    {
      projectName: "E-Commerce Web Platform",
      subtitle: "Full-stack e-commerce application",
      startDate: "2020-01-01",
      endDate: "2020-06-01",
      projectDescription: [
        "Designed and implemented a full-stack e-commerce application with frontend, backend, and database integration.",
        "Integrated payment gateways, product catalog, user authentication, and order management."
      ],
      projectTechnologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Stripe API", "Docker", "AWS EC2", "GitHub Actions"]
    },
    {
      projectName: "Real-Time Chat Application",
      subtitle: "Messaging platform for internal team communication",
      startDate: "2019-05-01",
      endDate: "2019-09-01",
      projectDescription: [
        "Developed a real-time messaging platform with user authentication, chat rooms, and message persistence.",
        "Implemented real-time updates using WebSockets."
      ],
      projectTechnologies: ["React.js", "Node.js", "Express.js", "WebSockets", "Redis", "MongoDB", "Tailwind CSS"]
    }
  ],
  awardsAndCertifications: [
    {
      type: "certificate",
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      issueDate: "2024-01-01"
    },
    {
      type: "certificate",
      title: "React Front-End Developer Certificate",
      issuer: "Meta via Coursera",
      issueDate: "2023-06-01"
    },
    {
      type: "certificate",
      title: "Full-Stack Web Development Specialization",
      issuer: "freeCodeCamp / Coursera",
      issueDate: "2023-03-01"
    },
    {
      type: "award",
      title: "Employee of the Year",
      issuer: "ABC Tech Solutions",
      issueDate: "2022-12-01"
    },
    {
      type: "award",
      title: "Hackathon Winner",
      issuer: "XYZ University",
      issueDate: "2021-11-01"
    }
  ]
};
