import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.jpeg';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';


export const assets = {
  profileImg,
}


export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: 'Innovative',
    description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
    color: 'text-purple'
  },
  {
    icon: FaPaintBrush,
    title: 'Design Oriented',
    description: 'Beautiful design and user experience are at the heart of everything I create.',
    color: 'text-pink'
  },
  {
    icon: FaCode,
    title: 'Clean Code',
    description: 'I write maintainable, efficient code following best practices and modern patterns.',
    color: 'text-blue'
  }
];

export const skills = [
  {
    icon: FaCode,
    title: "Programming Languages",
    description:
      "Java JavaScript and Python, with a focus on programming fundamentals and software development.",
  },
  {
    icon: FaReact,
    title: "Frontend Development",
    description:
      "Building interactive user interfaces and web applications using React.js Tailwind CSS and Bootstrap.",
  },
  {
    icon: FaNodeJs,
    title: "Backend Development",
    description:
      "Developing backend applications using Java, Spring Boot, Spring Framework, Node.js, Express.js, and REST APIs.",
  },
  {
    icon: FaDatabase,
    title: "Databases",
    description:
      "Working with MySQL and MongoDB to store, manage, and retrieve application data.",
  },
  {
    icon: FaCode,
    title: "DSA & OOP",
    description:
      "Practicing Data Structures and Algorithms and applying Object-Oriented Programming concepts to problem-solving.",
  },
  {
    icon: FaTools,
    title: "Tools & Technologies",
    description:
      "Using Git and GitHub for version control and source code management.",
  },
];



export const projects = [
  {
    title: "Zerodha - Trading Platform",
    image: projectImg1,
    description:
      "A full-stack MERN trading platform featuring secure JWT authentication, a trading dashboard, holdings, positions, and buy/sell order functionality with REST API integration and cloud deployment.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Bootstrap",
      "JWT",
      "REST APIs",
    ],
    github: "https://github.com/honeyAswani/trading-platform",
    demo: "https://trading-platform-uoc8.vercel.app",
  },
  {
    title: "WanderLust - Travel Listing Platform",
    image: projectImg2,
    description:
      "An Airbnb-inspired full-stack travel listing platform with secure authentication, property listing management, image uploads through Cloudinary, and reviews and ratings.",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "EJS",
      "Cloudinary",
      "Passport.js",
    ],
    github: "https://lnkd.in/gCH9UAsA",
    demo: "https://lnkd.in/gSmccnPp",
  },
  {
    title: "SkyLume - Weather Application",
    image: projectImg3,
    description:
      "A responsive React weather application that uses the OpenWeather API to display current weather and location-based conditions, with dynamic weather visuals and loading and error states.",
    tech: [
      "React.js",
      "Vite",
      "Material UI",
      "OpenWeather API",
      "CSS",
    ],
    github: "https://lnkd.in/gy-tkhgc",
    demo: "https://lnkd.in/gs56yr7b",
  },
  {
    title: "BlogNest - Blogging Platform",
    image: projectImg4,
    description:
      "A Java and Spring Boot blogging platform featuring blog post creation, editing, and deletion, database persistence using Spring Data JPA, dynamic pages with Thymeleaf, and authentication and authorization.",
    tech: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "MySQL",
      "Thymeleaf",
      "Maven",
    ],
    github: "https://lnkd.in/d5X5uDGe",
    demo: "https://lnkd.in/dMxquAhU",
  },
];


export const workData = [
  {
    role: "DSA & Problem Solving",
    company: "LeetCode",
    duration: "Ongoing",
    description:
      "Solved 150+ coding problems on LeetCode, strengthening problem-solving skills and understanding of Data Structures and Algorithms.",
    color: "blue"
  },
  {
    role: "Backend Development",
    company: "Personal Projects",
    duration: "Ongoing",
    description:
      "Building full-stack applications using Java, Spring Boot, Node.js, Express.js, and databases such as MySQL and MongoDB.",
    color: "purple"
  },
  {
    role: "Full-Stack Development",
    company: "Project Experience",
    duration: "Ongoing",
    description:
      "Developed projects including a MERN-based trading platform, a travel listing platform, a weather application, and a Java Spring Boot blogging platform.",
    color: "pink"
  }
];
