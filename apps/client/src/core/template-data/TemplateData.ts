import { z } from "zod";

const ContactInfoSchema = z.object({
  location: z.string().min(1, "Location is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is too short"),
  linkedin: z.string().url("LinkedIn must be a valid URL").optional().or(z.literal("")),
  github: z.string().url("GitHub must be a valid URL").optional().or(z.literal("")),
  website: z.string().url("Website must be a valid URL").optional().or(z.literal("")),
});

const SkillsSchema = z.object({
  category: z.string().min(1, "Category is required"),
  skills: z.array(z.string().min(1, "Skill cannot be empty")).nonempty("Skills must not be empty"),
});

const EducationInfoSchema = z.object({
  schoolName: z.string().min(1, "School name is required"),
  course: z.string().min(1, "Course name is required"),
  startDate: z.string().min(1, "Start date is required"),
  completionDate: z.string().min(1, "Completion date is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  country: z.string().optional(),
});

const ProfessionalExperienceInfoSchema = z.object({
  jobPosition: z.string().min(1, "Job position is required"),
  companyName: z.string().min(1, "Company name is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  country: z.string().optional(),
  responsibilities: z.array(z.string().min(100, "Responsibility cannot be empty")).nonempty("Responsibilities must not be empty"),
  achievements: z.array(z.string().min(100, "Achievement cannot be empty")).nonempty("Achievements must not be empty"),
});

const ProjectInfoSchema = z.object({
  projectName: z.string().min(1, "Project name is required"),
  subtitle: z.string().min(1, "Subtitle is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  projectDescription: z.array(z.string().min(1, "Project description cannot be empty")).nonempty("Project description must not be empty"),
  projectTechnologies: z.array(z.string().min(1, "Technology cannot be empty")).nonempty("Project technologies must not be empty"),
});

const AwardsAndCertificationsInfoSchema = z.object({
  type: z.enum(["award", "certificate"], "Type must be 'award' or 'certificate'"),
  title: z.string().min(1, "Title is required"),
  issuer: z.string().min(1, "Issuer is required"),
  issueDate: z.string().min(1, "Issue date is required"),
  expirationDate: z.string().optional(),
});

export const TemplateDataSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  jobTitle: z.string().min(1, "Job title is required"),
  contactInfo: ContactInfoSchema,
  skills: z.array(SkillsSchema),
  educationInfo: z.array(EducationInfoSchema).nonempty("Education information is required"),
  summary: z.array(z.string().min(1, "Summary item cannot be empty")).nonempty("Summary is required"),
  professionalExperience: z.array(ProfessionalExperienceInfoSchema).nonempty("Professional experience is required"),
  projects: z.array(ProjectInfoSchema).nonempty("Projects are required"),
  awardsAndCertifications: z.array(AwardsAndCertificationsInfoSchema).optional(),
});

export type TemplateData = z.infer<typeof TemplateDataSchema>
export type EducationInfo = z.infer<typeof EducationInfoSchema>
export type ProfessionalExperienceInfo = z.infer<typeof ProfessionalExperienceInfoSchema>
export type ProjectInfo = z.infer<typeof ProjectInfoSchema>
export type AwardsAndCertificationsInfo = z.infer<typeof AwardsAndCertificationsInfoSchema>


export const DUMMY_DATA: TemplateData = {
  fullName: "Bibek Saini",
  jobTitle: "Full Stack Software Engineer",
  contactInfo: {
    location: "Toronto, ON",
    email: "itsbibeksaini@gmail.com",
    phone: "+1 (416) 559-9209",
    linkedin: "linkedin.com/in/itsbibeksaini",
    github: "github.com/itsbibeksaini",
    website: "itsbibeksaini.com"
  },
  skills: [
    {
      "category": "Backend",
      "skills": ["Java 17+", "Kotlin"]
    },
    {
      "category": "Frontend",
      "skills": ["React", "Angular", "Node.js", "Typescript", "JavaScript", "HTML", "CSS"]
    },
    {
      "category": "Frameworks",
      "skills": ["Spring Boot", "Spring Cloud", "Spring Web", "Spring Data"]
    },
    {
      "category": "Testing",
      "skills": ["JUnit 5", "Mockito 5", "TDD", "BDD", "Integration Testing"]
    },
    {
      "category": "Messaging",
      "skills": ["Apache Kafka", "Azure Service Bus", "JMS"]
    },
    {
      "category": "Databases",
      "skills": ["MongoDB (NO SQL)", "MS SQL"]
    },
    {
      "category": "DevOps & CI/CD",
      "skills": ["Git", "GitHub", "GitHub Actions", "Azure Pipeline’s", "Bitbucket", "CI/CD"]
    },
    {
      "category": "Cloud & Containerization",
      "skills": ["Docker", "Kubernetes", "Azure Kubernetes Services (AKS)", "Azure Container Registry (ACR)"]
    },
    {
      "category": "Architecture",
      "skills": ["Micro-services", "REST APIs", "Design Patterns", "gRPC", "Event-Driven Architecture"]
    },
    {
      "category": "Methodologies",
      "skills": ["Agile", "Scrum", "Kanban", "Continuous Integration"]
    },
    {
      "category": "Other",
      "skills": ["Code Reviews", "Performance Tuning", "Troubleshooting", "Apache Tomcat", "JBoss Undertow"]
    },
    {
      "category": "Productivity tools",
      "skills": ["GitHub Co-pilot", "GPT-models", "Cursor", "Gemini"]
    }
  ],
  educationInfo: [
    {
      schoolName: "Northern College",
      course: "Post Graduate Certificate in Information System Business Analysis.",
      startDate: "05/2024",
      completionDate: "12/2024",
      city: "Toronto",
      state: "ON",
      country: "Canada"
    }, {
      schoolName: "Northern College",
      course: "Post Graduate Certificate in Mobile Application Development.",
      startDate: "05/2023",
      completionDate: "12/2023",
      city: "Toronto",
      state: "ON",
      country: "Canada"
    }, {
      schoolName: "IK Gujral Punjab Technical University",
      course: "Bachelor of Technology in Computer Science",
      startDate: "08/2012",
      completionDate: "06/2016",
      city: "Amritsar",
      state: "PB",
      country: "India"
    }
  ],
  summary: [
    "<strong>8+ Years of Full-Stack Expertise:</strong> Seasoned engineer specializing in building enterprise-grade web applications, cloud-based microservices, and event-driven systems.",
    "<strong>Modern Java & Kotlin Backend:</strong> Proficient in architecting high-throughput backend services using Java 17+, Kotlin, Spring Boot, and Apache Kafka.",
    "<strong>State-Driven Frontend Architecture:</strong> Experienced in building responsive UIs using React (Hooks/Redux) and Angular (RxJS) integrated seamlessly with RESTful APIs.",
    "<strong>Cloud Infrastructure & Orchestration:</strong> Strong hands-on experience deploying to Azure and managing containerized states using Docker and Kubernetes YAML manifests.",
    "<strong>End-to-End CI/CD & DevOps:</strong> Skilled in implementing automated deployment pipelines using Azure Pipelines, GitHub Actions, SonarQube, and Maven/Gradle.",
    "<strong>Technical Leadership & Agile:</strong> Adept at mentoring junior developers, conducting rigorous code reviews, and collaborating with cross-functional teams in Scrum environments."
  ],
  professionalExperience: [
    {
      jobPosition: "Full Stack Software Engineer",
      companyName: "Cicana.",
      startDate: "07/2024",
      endDate: "11/2025",
      city: "Remote",
      state: "",
      country: "",
      responsibilities: [
        "Worked closely with product owners, QA, DevOps, and stakeholders within an Agile/Scrum environment using JIRA and Confluence.",
        "Designed, developed, and deployed cloud-based microservices using Java 17+, Kotlin, Spring Boot, Spring MVC, Spring Security, and Kafka.",
        "Designed and implemented logging, monitoring, and tracing solutions using Spring Boot Actuator and Prometheus.",
        "Accelerated backend development and system architecture by utilizing GitHub Co-pilot, Gemini, and GPT models to automate complex API boilerplate, optimize SQL queries, and generate comprehensive unit tests, significantly reducing technical debt and improving delivery speed.",
        "Optimized the performance of database queries using Hibernate caching mechanisms and SQL tuning.",
        "Configured and customized embedded Tomcat and JBoss Undertow within Spring Boot applications to optimize thread pools, connection timeouts, and server performance.",
        "Implemented Spring Security with OAuth2/JWT to secure microservices.",
        "Developed frontend components using React.js, Angular, integrating them with backend microservices via REST APIs."
      ]
      ,
      achievements: [
        "Reduced system downtime by 50% through infrastructure optimization.",
        "Awarded Employee of the Year 2022 for delivering high-impact projects and mentoring initiatives."
      ]
    },
    {
      jobPosition: "Senior Software Engineer",
      companyName: "CatalystOne Info Pvt. Ltd.",
      startDate: "04/2016",
      endDate: "03/2023",
      city: "Mohali",
      state: "PB",
      country: "India",
      responsibilities: [
        "Designed and developed cloud-based microservices on Azure using Spring Boot, supporting high-volume enterprise applications utilizing JPA, SpringData to build connectivity to SQL Server.",
        "Architected and implemented RESTful APIs using Spring MVC and JAX-RS following SOA principles.",
        "Authored declarative YAML manifests for kubernetes including Deployments, Services, Ingress resources, and Persistent Volumes to manage complex infrastructure states.",
        "Built scalable front-end solutions using Angular (RxJS, Reactive Forms) and React (Hooks, Context API/Redux) to manage complex application state efficiently.",
        "Built event-driven systems using Apache Kafka, including topic design, producers, consumers, and stream processing.",
        "Applied distributed system design patterns such as service discovery, routing, circuit breakers, and service-to-service communication.",
        "Replaced default Tomcat with JBoss Undertow in Spring Boot to leverage non-blocking I/O and improve application throughput and startup time.",
        "Led CI/CD pipeline implementation using Azure pipelines, GitHub actions, Git, Maven/Gradle, Artifactory, and SonarQube.",
        "Optimized database performance across MongoDB, PostgreSQL, and SQL Server environments.",
        "Monitored, debugged, and resolved production issues using Azure App Insights.",
        "Wrote and reviewed JUnit test cases, improving code coverage and system stability.",
        "Acted as a technical mentor, providing guidance, code reviews, and best practices to junior developers.",
        "Collaborated with cross-functional teams to understand requirements and deliver solutions.",
        "Built UI using HTML5, CSS3, JavaScript, and TypeScript, ensuring responsive and dynamic web applications."
      ]
      ,
      achievements: [
        "Delivered a major product module 2 weeks ahead of schedule, improving client satisfaction.",
        "Optimized database queries, reducing average response time by 35%."
      ]
    }
  ],
  projects: [
    {
      "projectName": "Custom Gradle Plugins",
      "subtitle": "Gradle API & Kotlin/Java",
      "startDate": "",
      "endDate": "",
      "projectDescription": [
        "An assortment of Gradle plugins customized to configure essentials plugins and settings required by projects."
      ],
      "projectTechnologies": ["Gradle API", "Kotlin"]
    },
    {
      "projectName": "Project Generator (Code as Automation)",
      "subtitle": "Gradle API & Kotlin",
      "startDate": "",
      "endDate": "",
      "projectDescription": [
        "Custom Gradle plugin with dynamic code generation capabilities to auto generate boiler-plate repetitive code for project."
      ],
      "projectTechnologies": ["Gradle API", "Kotlin", "JavaPoet"]
    },
    {
      "projectName": "Custom SpringBoot Starters",
      "subtitle": "SpringBoot & Kotlin",
      "startDate": "",
      "endDate": "",
      "projectDescription": [
        "Collection of BOMs, libraries and SpringBoot Starters to provide consistent dependency alignment and configuration conventions across microservices projects to build services."
      ],
      "projectTechnologies": ["SpringBoot", "Kotlin", "Exposed", "JUnit"]
    },
    {
      "projectName": "Notification Service",
      "subtitle": "SpringBoot & Java",
      "startDate": "",
      "endDate": "",
      "projectDescription": [
        "Micro-service providing email and SMS notification capabilities. Implements JMS and Azure Service Bus."
      ],
      "projectTechnologies": ["SpringBoot", "Java", "JMS", "Azure Service Bus"]
    },
    {
      "projectName": "Workflows",
      "subtitle": "Java EE, SpringBoot",
      "startDate": "",
      "endDate": "",
      "projectDescription": [
        "Workflows modules help organizations to manage their tasks which occurs in particular order.",
        "With workflows organizations can design the flow with various pre-defined task."
      ],
      "projectTechnologies": ["Java EE", "SpringBoot", "Core Java"]
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
