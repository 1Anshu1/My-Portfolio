export const skills = [
    {
        title: "Frontend",
        skills: [
            {
                name: "HTML",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
            },
            {
                name: "CSS",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
            },
            {
                name: "Tailwind CSS",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            },
            {
                name: "JavaScript",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            },
            {
                name: "React Js",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            },
            {
                name: "Redux",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
            },
        ],
    },
    {
        title: "Backend & Databases",
        skills: [
            {
                name: "NodeJs",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
            },
            {
                name: "ExpressJs",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
            },
            {
                name: "MySQL",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
            },
            {
                name: "MongoDB",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
            },
        ],
    },

    {
        title: "Others",
        skills: [
            {
                name: "Git",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
            },
            {
                name: "GitHub",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
            },
            {
                name: "Vercel",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
            },
            {
                name: "Netlify",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg",
            },
            {
                name: "VS Code",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
            },
            {
                name: "Postman",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
            },
        ],
    },
    {
        title: "Familiar",
        skills: [
            {
                name: "Docker",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
            },
            {
                name: "NextJs",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
            },
            {
                name: "Azure",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
            },
            {
                name: "Figma",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
            },
        ],
    },
];

export const experiences = [
    {
        id: 0,
        role: "Frontend React Intern",
        company: "DataFinsight AI",
        date: "March 2023 - Present",
        desc: [
            "Developed responsive and user-friendly UI components for an AI-based SaaS platform, translating designs from Figma into pixel-perfect frontend implementations.",
            "Leveraged React.js to create dynamic and interactive user interfaces, enhancing the platform's usability and visual appeal.",
            "Utilized Docker to containerize the web application, streamlining the development and deployment process while ensuring consistency across different environments.",
            "Deployed the web application on Azure Cloud Services, optimizing performance, scalability, and reliability through cloud-based infrastructure.",
            "Collaborated closely with cross-functional teams including designers, backend developers, and stakeholders to iterate on features and meet project milestones effectively.",
        ],
        skills: ["HTML", "CSS", "JavaScript", "React", "Chart.js", "Docker", "Azure"],
    },
    {
        id: 1,
        role: "MTS Intern",
        company: "42Gears Mobility System Ltd.",
        date: "Feb 2023 - June 2023",
        desc: [
            "Acquired proficiency in Swift programming language and iOS development methodologies during the internship.",
            "Applied iOS development skills to contribute to the enhancement of SureMDM macOS application, a widely used tool for monitoring and managing Mac devices.",
            "Collaborated with the development team to implement new features and optimize existing functionalities, ensuring a seamless user experience.",
            "Played a key role in resolving critical issues within the SureMDM macOS application, including fixing a GeoLocation-based notification bug.",
            "Addressed user-reported issues promptly and effectively, contributing to the stability and reliability of the application.",
            "Implemented enhancements such as zipping of log files to improve performance and user data management within the application.",
        ],
        skills: ["Swift", "Xcode", "GitLab", "ios Development", "SureMDM"],
    },
];

export const projects = [
    {
        id: 1,
        title: "DigiCart",
        description:
            "Developed Digicart, an ecommerce application where users can manage orders and wishlist the products. Apply filter based search and sort products. Incorporated Razorpay payment gateway for seamless and secure online transactions, ensuring smooth checkout process for customers.",
        tags: ["React Js", "Tailwind CSS", "Node Js", "Express Js", "Redux", "Razorpay", "JWT", "Cloudinary"],
        github: "https://github.com/1Anshu1/DigiStore",
        livelink: "https://digistore-mauve.vercel.app/",
        youtube: "",
    },
    {
        id: 2,
        title: "MindSpeak",
        description:
            "Developed and maintained a robust blog web application using modern technologies. Integrated Cloudinary for efficient image storage, retrieval, and optimization within the application.Implemented JWT (JSON Web Tokens) authentication to ensure secure user access and permissions management. Designed user-friendly interfaces for reading and writing articles, optimizing user experience.",
        tags: ["React Js", "Tailwind CSS", "Redux", "Node Js", "Express Js", "MongoDB", "JWT", "Cloudinary"],
        github: "https://github.com/1Anshu1/MindSpeak",
        livelink: "https://mindspeak.netlify.app/",
        youtube: "",
    },
];
