import type { Project } from "@/types";

export const projectsOrTools: Project[] = [
  {
    name: "LLMPrice.fyi",
    desc: "A no-nonsense price calculator for various LLM providers.",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/Siddhesh-Agarwal/llm-price-calculator",
      },
      { name: "Live", url: "https://llmprice.siddhesh.cc/" },
    ],
    tags: ["React", "TypeScript", "SWC", "Golang", "Cloudflare Workers"],
    date: { year: 2024, month: 12 },
  },
  {
    name: "Jokes API",
    desc: "A simple API to get jokes via a LLM",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/Siddhesh-Agarwal/cf-ai-jokes",
      },
      {
        name: "Live",
        url: "https://sparkling-dust-9b63.siddhesh-agarwal.workers.dev/",
      },
    ],
    tags: ["JavaScript", "Cloudflare Workers", "Gen AI"],
    date: { year: 2024, month: 11 },
  },
  {
    name: "Strains RAG",
    desc: "An Basic RAG based on Kenneth Reitz's StrainsDB - A Database of Cannabis Strains.",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/Siddhesh-Agarwal/straindb-rag/",
      },
      { name: "Live", url: "https://straindb.streamlit.app/" },
    ],
    tags: ["Python", "Streamlit", "Langchain"],
    date: { year: 2024, month: 3 },
  },
  {
    name: "Uploadid",
    desc: "Uploadid is a web application that helps colleges and universities keep track of their Faculty participation and achievements through an easy-to-understand Web User Interface.",
    links: [
      { name: "GitHub", url: "https://github.com/Siddhesh-Agarwal/uploadid" },
    ],
    tags: ["Next", "TypeScript", "ShadCN UI", "Supabase"],
    date: { year: 2024, month: 2 },
  },
  {
    name: "Newsful",
    desc: "Advanced Fake News Detection System built for the Kavach Cybersecurity Hackathon 2023",
    links: [{ name: "GitHub", url: "https://github.com/centille/Newsful/" }],
    tags: ["Python", "FastAPI", "OpenAI", "AI Agents", "MongoDB"],
    date: { year: 2023, month: 7 },
  },
  {
    name: "IP Database",
    desc: "A Python API to get information about an IP address. Made using streamlit. Deployed on Streamlit Cloud.",
    links: [
      { name: "GitHub", url: "https://github.com/Siddhesh-Agarwal/IP-DB/" },
      // { name: "Live", url: "https://ip-database.streamlit.app" }
    ],
    tags: ["Python", "Streamlit", "IP Geolocation"],
    date: { year: 2023, month: 4 },
  },
  {
    name: "Dementia Detection",
    desc: "Dementia Detection using CNN packaged as a Streamlit app",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/Siddhesh-Agarwal/Dementia-Detection/",
      },
    ],
    tags: ["Python", "Streamlit", "TensorFlow", "CNN"],
    date: { year: 2023, month: 3 },
  },
  {
    name: "CGPA Calculator",
    desc: "A no-nonsense CGPA Calculator",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/Siddhesh-Agarwal/CGPA-Calculator",
      },
      { name: "Live", url: "https://cgpa-calc.streamlit.app/" },
    ],
    tags: ["Python", "Streamlit"],
    date: { year: 2023, month: 2 },
  },
  {
    name: "Skin Cancer Detection",
    desc: "Skin Cancer Detection using CNN packaged as a Streamlit app",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/Siddhesh-Agarwal/Skin-Cancer-Detection/",
      },
    ],
    tags: ["Python", "Streamlit", "TensorFlow", "CNN"],
    date: { year: 2023, month: 1 },
  },
  {
    name: "Cryptmoji",
    desc: "A Python library to encrypt and decrypt messages using emojis. Published on PyPI.",
    links: [
      { name: "GitHub", url: "https://github.com/Siddhesh-Agarwal/Cryptmoji/" },
      { name: "PyPI", url: "https://pypi.org/project/cryptmoji/" },
    ],
    tags: ["Python", "PyPI", "Crytography"],
    date: { year: 2022, month: 9 },
  },
  {
    name: "Secure-Spark",
    desc: "DevToys for cyber security",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/Siddhesh-Agarwal/Secure-Spark/",
      },
    ],
    tags: ["Python", "Streamlit", "Cyber Security"],
    date: { year: 2022, month: 8 },
  },
  {
    name: "Sierra",
    desc: "A Python library to write HTML and CSS in pure Python in a simple yet elegant manner using the DOM API.",
    links: [
      { name: "GitHub", url: "https://github.com/BrainStormYourWayIn/sierra/" },
      { name: "PyPI", url: "https://pypi.org/project/sierra/" },
    ],
    tags: ["Python", "PyPI", "HTML", "CSS", "JavaScript"],
    date: { year: 2021, month: 6 },
  },
  {
    name: "Matmath",
    desc: "A Python library to perform matrix and Vector operations. Published on PyPI.",
    links: [
      { name: "GitHub", url: "https://github.com/Siddhesh-Agarwal/matmath/" },
      { name: "PyPI", url: "https://pypi.org/project/matmath/" },
    ],
    tags: ["Python", "PyPI", "Maths"],
    date: { year: 2021, month: 6 },
  },
  {
    name: "Lab Management System",
    desc: "A lab management system including student attendance, lab inventory management, bill management, and report generation. Currently deployed across all the 11 CS/IT Labs in SKCET.",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/Siddhesh-Agarwal/lab-management-system",
      },
    ],
    tags: ["PHP", "Laravel", "Blade", "Python", "Streamlit"],
    date: { year: 2023, month: 3 },
  },
  {
    name: "envctl",
    desc: "A CLI tool to manage variables/secrets. Stores the secrets with AES encryption. Made in golang and cobra.",
    links: [{ name: "GitHub", url: "https://github.com/Siddhesh-Agarwal/envctl" }],
    tags: ["Golang", "CLI", "Cobra"],
    date: { year: 2025, month: 2 },
  },
  {
    name: "ChatSKCET",
    desc: "A chat app for SKCET. Made using TypeScript and Vite without any other external AI libraries. Uses Google search API to fetch relevant information.",
    links: [
      { name: "GitHub", url: "https://github.com/Siddhesh-Agarwal/ChatSKCET" },
      { name: "Live", url: "https://chatskcet.pages.dev/" },
    ],
    tags: ["TypeScript", "GenAI", "Chatbot"],
    date: { year: 2025, month: 5 },
  },
  {
    name: "Mandala.AI",
    desc: "An AI-Powered Kolam/Rangoli/Mandala Generator that uses Cloudflare AI to generate images, R2 to store them and D1 to keep a track of them.",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/Siddhesh-Agarwal/Mandala-AI/",
      },
      {
        name: "Backend",
        url: "https://mandala-ai-backend.siddhesh-agarwal.workers.dev/",
      },
      { name: "Frontend", url: "https://mandala-ai.pages.dev/" },
    ],
    tags: ["TypeScript", "Vite", "Hono", "Cloudflare"],
    date: { year: 2025, month: 9 },
  },
  {
    name: "micrograd.cpp",
    desc: "A c++ implementation of Andrej Karpathy's Micrograd library",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/Siddhesh-Agarwal/micrograd.cpp",
      }
    ],
    tags: ["C++", "AI"],
    date: {year: 2026, month: 1},
  }
];
