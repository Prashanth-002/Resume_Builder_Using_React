export const initialResumeState = {
  personalInfo: {
    fullName: "John Doe",
    jobTitle: "Software Engineer",
    email: "john.doe@example.com",
    phone: "+1 234 567 8900",
    address: "New York, USA",
    linkedin: "linkedin.com/in/johndoe",
    github: "github.com/johndoe",
    summary: "Passionate software engineer with 5+ years of experience in full-stack development. Strong problem-solving skills and a track record of delivering high-quality web applications.",
    profileImage: ""
  },
  education: [
    {
      id: "1",
      school: "University of Technology",
      degree: "Bachelor of Science in Computer Science",
      startDate: "2015",
      endDate: "2019",
      description: "Graduated with honors. Relevant coursework in Data Structures, Algorithms, and Web Development."
    }
  ],
  experience: [
    {
      id: "1",
      company: "Tech Solutions Inc.",
      position: "Senior Frontend Developer",
      startDate: "2021",
      endDate: "Present",
      description: "Lead the frontend team in developing a scalable e-commerce platform using React. Improved load time by 30%."
    },
    {
      id: "2",
      company: "Web Innovations LLC",
      position: "Web Developer",
      startDate: "2019",
      endDate: "2020",
      description: "Developed and maintained client websites using modern JavaScript frameworks. Collaborated with UI/UX designers."
    }
  ],
  skills: "React, JavaScript, TypeScript, Tailwind CSS, Node.js, Git, REST APIs, GraphQL",
  projects: [
    {
      id: "1",
      title: "Task Management App",
      link: "github.com/johndoe/task-app",
      description: "A full-stack task management application built with React, Node.js, and MongoDB."
    }
  ]
};
