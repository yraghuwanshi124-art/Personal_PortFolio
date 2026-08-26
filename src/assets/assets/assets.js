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
      "C, C++, Python, Java, and JavaScript with a strong focus on programming fundamentals.",
  },
  {
    icon: FaReact,
    title: "Frontend Development",
    description:
      "Building modern and responsive interfaces using HTML, CSS, React, and Tailwind CSS.",
  },
  {
    icon: FaNodeJs,
    title: "Backend Development",
    description:
      "Learning Node.js, Express.js, and REST APIs to build full-stack web applications.",
  },
  {
    icon: FaCode,
    title: "DSA & Problem Solving",
    description:
      "Practicing Data Structures, Algorithms, and problem-solving to improve coding skills.",
  },
  {
    icon: FaPaintBrush,
    title: "Web Design",
    description:
      "Creating clean, modern, and responsive websites using Tailwind CSS and modern design principles.",
  },
  {
    icon: FaTools,
    title: "Tools & Technologies",
    description:
      "Working with Git, GitHub, VS Code, Vite, npm, and other modern development tools.",
  },
];



export const projects = [
  {
    title: "Stone Paper Scissors",
    image: projectImg1,
    description:
      "A simple and interactive Stone Paper Scissors game built with HTML, CSS, and JavaScript where users can play against the computer with instant results.",
    tech: ["HTML", "CSS", "JavaScript"],
  },

  {
    title: "Motivation Quote Generator",
    image: projectImg2,
    description:
      "A motivational quote generator built with JavaScript that displays inspiring quotes with a clean and interactive user interface.",
    tech: ["HTML", "CSS", "JavaScript"],
  },

  {
    title: "Stopwatch",
    image: projectImg3,
    description:
      "A functional stopwatch application built with JavaScript that allows users to start, pause, reset, and track elapsed time with an interactive interface.",
    tech: ["React","Tailwind CSS"],
  },

  {
    title: "To-Do List",
    image: projectImg4,
    description:
      "A responsive To-Do List application built with React that allows users to add, manage, and organize daily tasks with a clean and user-friendly interface.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
  },

  {
    title: "Amazon Clone",
    image: projectImg5,
    description:
      "A responsive Amazon-inspired e-commerce website built with HTML and CSS that recreates the layout, navigation, product sections, and overall shopping interface.",
    tech: ["HTML", "CSS"],
  },

  {
    title: "Weather App",
    image: projectImg6,
    description:
      "A responsive weather application built with React that fetches real-time weather data from an API and displays temperature, humidity, and wind speed with a clean user interface.",
    tech: ["React", "JavaScript", "API", "Tailwind CSS"],
  },
];

export const workData = [
  {
    role: "Frontend Developer Intern",
    company: "CodeAlpha",
    duration: "2026 - Present",
    description:
      "Working on frontend development projects and building responsive, interactive web interfaces using modern web technologies.",
    color: "purple"
  },
  {
    role: "SoftWare Developer Intern",
    company: "IQ Path",
    duration: "2026 - Present",
    description:
      "Working on React-based projects and building responsive user interfaces using React, JavaScript, and Tailwind CSS.",
    color: "pink"
  },
  {
    role: "C++ & DSA Learner",
    company: "Self Learning",
    duration: "2026 - Present",
    description:
      "Learning Data Structures and Algorithms in C++ and solving coding problems to strengthen problem-solving and programming skills.",
    color: "blue"
  }
];