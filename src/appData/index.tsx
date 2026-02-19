import {
  App,
  GalleryImage,
  Tab,
  WorkContent,
  WorkFile,
  WorkType,
} from "src/types";
import error from "../../assets/dialog/error.png";
import info from "../../assets/dialog/info.png";
import warning from "../../assets/dialog/warning.png";
import help from "../../assets/dialog/help.png";
import cmd from "../../assets/cmd.png";
import mycomputer from "../../assets/mycomputer.png";
import gallery from "../../assets/folder_image.png";
import outlook from "../../assets/outlook.png";
import doom from "../../assets/doom.png";
import dsta from "../../assets/workaccordion/dsta.png";
import gdsc from "../../assets/workaccordion/gdsc.png";
import file from "../../assets/workaccordion/emptyfile.png";
import emptyfile from "../../assets/workaccordion/emptyfile.png";
import ee2026_1 from "../../assets/work/EE2026/ee2026_1.jpg";
import ee2026_2 from "../../assets/work/EE2026/ee2026_2.jpg";
import ee2026_3 from "../../assets/work/EE2026/ee2026_3.jpg";
import ee2026_4 from "../../assets/work/EE2026/ee2026_4.jpg";
import ee2026_5 from "../../assets/work/EE2026/ee2026_5.jpg";
import ee2026_6 from "../../assets/work/EE2026/ee2026_6.jpg";
import ee2026_7 from "../../assets/work/EE2026/ee2026_7.jpg";
import dsta_1 from "../../assets/work/dsta/1.png";
import dsta_2 from "../../assets/work/dsta/2.png";
import dsta_3 from "../../assets/work/dsta/3.png";
import dsta_4 from "../../assets/work/dsta/4.png";
import dsta_5 from "../../assets/work/dsta/5.png";
import dsta_6 from "../../assets/work/dsta/6.png";
import dsta_7 from "../../assets/work/dsta/7.png";
import dsta_8 from "../../assets/work/dsta/8.png";
import hfg_1 from "../../assets/work/hfg/1.png";
import hfg_2 from "../../assets/work/hfg/2.png";
import hfg_3 from "../../assets/work/hfg/3.png";
import hfg_5 from "../../assets/work/hfg/5.png";
import hfg_6 from "../../assets/work/hfg/6.png";
import hfg_7 from "../../assets/work/hfg/7.png";
import eg_1 from "../../assets/work/eg1311/1.jpg";
import eg_2 from "../../assets/work/eg1311/2.jpg";
import eg_3 from "../../assets/work/eg1311/3.jpg";
import eg_4 from "../../assets/work/eg1311/4.jpg";
import eg_5 from "../../assets/work/eg1311/5.jpg";
import eg_6 from "../../assets/work/eg1311/6.jpg";
import cg1 from "../../assets/work/cg1111/1.jpg";
import cg2 from "../../assets/work/cg1111/2.jpg";
import cg3 from "../../assets/work/cg1111/3.jpg";
import cg4 from "../../assets/work/cg1111/4.jpg";
import cg5 from "../../assets/work/cg1111/5.jpg";
import cg6 from "../../assets/work/cg1111/6.jpg";
import cg1_2 from "../../assets/work/cg2111/1.jpg";
import cg2_2 from "../../assets/work/cg2111/2.jpg";
import cg3_2 from "../../assets/work/cg2111/3.jpg";
import cg4_2 from "../../assets/work/cg2111/4.jpg";
import cg5_2 from "../../assets/work/cg2111/5.jpg";
import cg6_2 from "../../assets/work/cg2111/6.jpg";
import cs2113_1 from "../../assets/work/cs2113/1.png";
import cs2113_2 from "../../assets/work/cs2113/2.png";
import sc_1 from "../../assets/work/supercanvas/1.png";
import sc_2 from "../../assets/work/supercanvas/2.png";
import sc_3 from "../../assets/work/supercanvas/3.png";
import lul from "../../assets/work/lul.png";
import butterfly from "../../assets/butterfly.png";
import mr1 from "../../assets/mr1.jpg";
import mr2 from "../../assets/mr2.jpg";
import mrIcon from "../../assets/mr_icon.png";
import MS from "../../assets/work/MS.png";
import MS2 from "../../assets/work/MS2.png";
import askmyvault_graph from "../../assets/graph-view.png";
import askmyvault_main from "../../assets/askmyvault2.png";
import askmyvault_settings from "../../assets/settings.png";
import col1 from "../../assets/gallery/0.webp";
import col2 from "../../assets/gallery/1.webp";
import col3 from "../../assets/gallery/2.webp";
import col4 from "../../assets/gallery/3.webp";
import col5 from "../../assets/gallery/4.webp";
import col6 from "../../assets/gallery/5.webp";
export const TechIcon = {
  // Core Languages
  C: "https://img.shields.io/badge/C-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white",
  CPP: "https://img.shields.io/badge/C++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
  JAVA: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
  RUST: "https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white",
  GO: "https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white",
  PYTHON:
    "https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white",
  CUDA: "https://img.shields.io/badge/CUDA-%2376B900.svg?style=for-the-badge&logo=nvidia&logoColor=white",
  JAVASCRIPT:
    "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  TYPESCRIPT:
    "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
  
  // Platforms & Tools
  LINUX:
    "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black",
  ARCHLINUX:
    "https://img.shields.io/badge/Arch_Linux-1793D1?style=for-the-badge&logo=arch-linux&logoColor=white",
  DOCKER:
    "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
  GIT:
    "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
  BASH:
    "https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=gnu-bash&logoColor=white",
  
  // Web Technologies
  REACT:
    "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  NEXTJS:
    "https://img.shields.io/badge/next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white",
  NODEJS:
    "https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white",
  HTML: "https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
  CSS: "https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
  
  // Databases & Backend
  CHROMADB:
    "https://img.shields.io/badge/ChromaDB-FF6F61?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4=&logoColor=white",
  FASTAPI:
    "https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white",
  
  // AI/ML
  PYTORCH:
    "https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white",
  TRANSFORMERS:
    "https://img.shields.io/badge/🤗%20Transformers-FFD21E?style=for-the-badge&logoColor=black",
  CHATGPT:
    "https://img.shields.io/badge/chatGPT-74aa9c?logo=openai&logoColor=white",
};

export const AppDirectory: Map<number, Tab> = new Map([
  [
    0,
    {
      id: 0,
      title: "Welcome To My Website - Quick Start Guide",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.WELCOME,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    1,
    {
      id: 0,
      title: "Outlook Express",
      message: "",
      Icon: outlook,
      isMinimized: false,
      zIndex: 0,
      program: App.OUTLOOK,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    2,
    {
      id: 0,
      title: "My Work",
      message: "",
      Icon: cmd,
      isMinimized: false,
      zIndex: 0,
      program: App.MYWORK,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    3,
    {
      id: 0,
      title: "DOOM - Classic FPS",
      message: "",
      Icon: doom,
      isMinimized: false,
      zIndex: 0,
      program: App.DOOM,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    5,
    {
      id: 0,
      title: "Error",
      message: "",
      Icon: error,
      isMinimized: false,
      zIndex: 0,
      program: App.ERROR,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    6,
    {
      id: 0,
      title: "Warning",
      message: "",
      Icon: warning,
      isMinimized: false,
      zIndex: 0,
      program: App.WARNING,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    7,
    {
      id: 0,
      title: "Info",
      message: "",
      Icon: info,
      isMinimized: false,
      zIndex: 0,
      program: App.INFO,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    8,
    {
      id: 0,
      title: "Help",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.HELP,
      prompt: true,
      backBtnActive: false,
    },
  ],
]);

export const WorkAccordionTitles = [
  WorkType.HACKATHON,
  WorkType.PERSONAL,
  WorkType.SCHOOL,
];

export const GalleryAccordionTitles = ["Details"];

export const WorkData = [
  {
    id: 1,
    title: "Swaraj – Marathi Programming Language",
    date: "2024",
    gitURL: "https://github.com/a2Fsa2k/swaraj",
    techstack: [
      TechIcon.RUST,
    ],
    gallery: [],
    overview: `Built a C-style programming language with Marathi keywords using a hand-written lexer, recursive descent 
    parser, and AST-based interpreter in Rust. Added dynamic typing, first-class functions, control flow, and lists, 
    achieving ~200ms cold start and microsecond-level expression evaluation. This project demonstrates compiler 
    construction techniques and showcases how programming languages can be localized for non-English speakers.`,
  },
  {
    id: 2,
    title: "AnuGPT – GPT Implementation in C++ & CUDA",
    date: "2024",
    gitURL: "https://github.com/a2Fsa2k/AnuGPT",
    techstack: [TechIcon.CPP, TechIcon.CUDA],
    gallery: [{ type: 'video' as const, src: '/anuGPT.mp4' }],
    overview: `Built a from-scratch GPT-style transformer in pure C++ and CUDA, covering both training and inference 
    without ML frameworks. Trained a ~10M parameter model locally, achieving ~45 tokens/sec inference. This project 
    involved implementing attention mechanisms, tensor operations, and efficient GPU kernels from the ground up, 
    demonstrating deep understanding of transformer architecture and high-performance computing.`,
  },
  {
    id: 3,
    title: "Barter – Offline P2P Payment System",
    date: "2024",
    gitURL: "https://github.com/a2Fsa2k/barter",
    techstack: [TechIcon.GO],
    gallery: [{ type: 'video' as const, src: '/barter.mp4' }],
    overview: `Built an offline peer-to-peer payment system enabling wallet-to-wallet transfers over local networks 
    without servers or internet connectivity. Engineered concurrent networking and cryptographic primitives (Ed25519 
    identities, signed transactions, hash-chained local ledger) using Go. This project demonstrates distributed 
    systems design and cryptographic security implementation for real-world use cases.`,
  },
  {
    id: 4,
    title: "Pokénator – Information-Theoretic Guessing Engine",
    date: "2024",
    gitURL: "https://github.com/a2Fsa2k/pokenator",
    techstack: [TechIcon.PYTHON],
    gallery: [],
    overview: `Built an Akinator-inspired Pokémon guessing engine that selects questions using entropy and information 
    gain. Modeled unordered, noisy attributes to compute optimal questions dynamically at runtime. This project 
    showcases machine learning concepts, information theory, and algorithm optimization for interactive applications.`,
  },
  {
    id: 5,
    title: "Ask My Vault – Obsidian RAG Plugin",
    date: "2024",
    gitURL: "https://github.com/a2Fsa2k/obsidian-askmyvault",
    techstack: [TechIcon.TYPESCRIPT, TechIcon.PYTHON, TechIcon.CHROMADB, TechIcon.FASTAPI, TechIcon.TRANSFORMERS],
    gallery: [askmyvault_graph, askmyvault_main, askmyvault_settings],
    overview: `Contributed to a local-first RAG system enabling semantic querying of Markdown notes with grounded 
    answers and file-level citations inside Obsidian. Designed incremental embedding and retrieval pipelines using 
    sentence-transformers (MiniLM), ChromaDB, FastAPI, and multi-provider LLM integrations. This plugin enhances 
    productivity for knowledge workers by bringing AI-powered semantic search to personal notes.`,
  },
  {
    id: 6,
    title: "Windows XP Portfolio Website",
    date: "2025",
    gitURL: "https://github.com/a2Fsa2k/me",
    techstack: [
      TechIcon.TYPESCRIPT,
      TechIcon.NEXTJS,
      TechIcon.REACT,
      TechIcon.CSS,
      TechIcon.HTML,
    ],
    gallery: [lul],
    overview: `A nostalgic Windows XP-themed personal portfolio website built with Next.js, featuring authentic 
    retro interface with modern functionality. Showcases my projects, skills, and experience in an interactive 
    and engaging way that pays homage to the classic Windows XP operating system. Built with TypeScript, React, 
    and modern web technologies while maintaining pixel-perfect vintage aesthetics.`,
  },
] as WorkContent[];

export const WorkAccordionContent = [
  {
    id: 1,
    type: WorkType.PERSONAL,
    icon: butterfly,
    title: "Swaraj – Marathi Programming Language",
    content: WorkData[WorkData.findIndex((x) => x.id === 1)],
  },
  {
    id: 2,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "AnuGPT – GPT in C++ & CUDA",
    content: WorkData[WorkData.findIndex((x) => x.id === 2)],
  },
  {
    id: 3,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "Barter – Offline P2P Payment",
    content: WorkData[WorkData.findIndex((x) => x.id === 3)],
  },
  {
    id: 4,
    type: WorkType.PERSONAL,
    icon: file,
    title: "Pokénator – Guessing Engine",
    content: WorkData[WorkData.findIndex((x) => x.id === 4)],
  },
  {
    id: 5,
    type: WorkType.PERSONAL,
    icon: file,
    title: "Ask My Vault – Obsidian Plugin",
    content: WorkData[WorkData.findIndex((x) => x.id === 5)],
  },
  {
    id: 6,
    type: WorkType.PERSONAL,
    icon: file,
    title: "Windows XP Portfolio Website",
    content: WorkData[WorkData.findIndex((x) => x.id === 6)],
  },
] as WorkFile[];

// Photo collection disabled - user prefers not to display images
export const PhotoCollection = [] as GalleryImage[];
