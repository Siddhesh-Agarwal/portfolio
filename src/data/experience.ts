import type { ExperienceDetail } from "@/types";

export const experienceDetails: ExperienceDetail[] = [
  {
    startDate: { month: 4, year: 2022 },
    endDate: { month: 10, year: 2022 },
    company: { name: "IIT Madras", website: "https://www.iitm.ac.in/" },
    position: "Junior WebOps Developer",
    location: "Remote",
    desc: "Worked in a team of 10 contributors to made the Backend API for issuing certificates to students participating in Shastra'23. Made using Python 3, FastAPI, SQLAlchemy and PIL.",
  },
  {
    startDate: { month: 3, year: 2023 },
    endDate: { month: 4, year: 2024 },
    company: { name: "SKCET", website: "https://www.skcet.ac.in/" },
    position: "Full Stack Developer Intern",
    location: "Coimbatore, India",
    desc: "Worked in a team of 4 to develop a Lab Management System that contains features for student attendance, lab inventory management, bill management and report generation. The system is currently used in 11 CS/IT Labs at SKCET.",
  },
  {
    startDate: { month: 6, year: 2024 },
    endDate: { month: 1, year: 2025 },
    company: { name: "HyperVerge", website: "https://hyperverge.co/" },
    position: "Data Engineer Intern",
    location: "Bengaluru, India",
    desc: "Prepared Data and fine-tuned multiple LLMs for specific and general field-extraction use cases. Developed an LLM-based error-tagging pipeline using OpenAI and Python, automating the process to reduce time by 97%.",
  },
  {
    startDate: { month: 2, year: 2025 },
    endDate: { month: 4, year: 2025 },
    company: {
      name: "RipeHouse Advisory",
      website: "https://www.ripehouseadvisory.com.au/",
    },
    position: "Freelance Software Engineer",
    location: "Remote",
    desc: "Made a CRM System to store property and client details along with features such as Client on-boarding, real-time internal chat system and notification system. Used JavaScript, Express.js, React.js, Node.js, AWS S3, and Supabase.",
  },
  {
    startDate: { month: 4, year: 2025 },
    endDate: { month: 6, year: 2025 },
    company: { name: "Venture Group" },
    position: "Freelance Software Engineer",
    location: "Remote",
    desc: "Made a cross platform mobile app to facilitate the management of properties, contracts and customers. Made using Flutter and firebase.",
  },
  {
    startDate: { month: 7, year: 2025 },
    endDate: { month: 11, year: 2025 },
    company: { name: "Dialmania" },
    position: "Freelance Software Engineer",
    location: "Remote",
    desc: "Created a web-app to allow users to rent VOIP routes. Integrated Magnus Billing to accept Crypto as Payment. It also features and Admin Dashboard that allows monitoring traffic, users, scheduling maintainence among other actions",
  },
  {
    startDate: { month: 3, year: 2026 },
    endDate: "Current",
    company: { name: "Marqait AI", website: "https://www.marqait.com/" },
    position: "Software Engineer",
    location: "Remote",
    desc: "",
  }
];
