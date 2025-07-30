"use client";

import Image from "next/image";
import Link from "next/link";
import TechStackCard from "../../components/TechStackCard";
import ProjectCard from "../../components/ProjectCard";
import GitHubCard from "../../components/GitHubCard";
import { useEffect, useState } from 'react';

import { 
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
  faDocker,
  faAws,
  faGoogle,
  faJenkins,
  faMicrosoft,
} from '@fortawesome/free-brands-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  const [githubData, setGithubData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const res = await fetch('/api/github');
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        setGithubData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchGitHubData();
  }, []);

  const techStack = [
    { name: "Next.js", icon: faReact, color: "#000000" },
    { name: "React", icon: faReact, color: "#61DAFB" },
    { name: "React Vite", icon: faReact, color: "#61DAFB" },
    { name: "HTML5", icon: faHtml5, color: "#E34F26" },
    { name: "CSS3", icon: faCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: faJsSquare, color: "#F7DF1E" },
    { name: "Jenkins", icon: faJenkins, color: "#D24939" },
    { name: "Docker", icon: faDocker, color: "#2496ED" },
    { name: "Vercel", icon: faCloud, color: "#000000" },
    { name: "Google Cloud", icon: faGoogle, color: "#4285F4" },
    { name: "Azure", icon: faMicrosoft, color: "#0078D4" },
    { name: "AWS", icon: faAws, color: "#FF9900" },
  ];

  const projects = [
    {
      title: "Netflix Clone",
      description:
        "A full-stack Netflix clone built with Next.js, Tailwind CSS, and Firebase.",
      imageSrc: "/projects/netflix_clone.png",
      technologies: ["Next.js", "Tailwind CSS", "Firebase"],
      githubLink: "https://github.com/shardulsinghdev/netflix-clone",
      demoLink: "https://netflix-clone-demo.vercel.app/",
    },
    {
      title: "E-commerce Platform",
      description:
        "A robust e-commerce platform with a dynamic product catalog, shopping cart functionality, and secure checkout. Built with Node.js, Express, React, and MongoDB.",
      imageSrc: "/projects/ecommerce.png",
      technologies: ["Node.js", "Express", "React", "MongoDB", "Stripe"],
      githubLink: "https://github.com/shardulsinghdev/ecommerce-platform",
    },
    {
      title: "AI Chatbot",
      description:
        "An intelligent AI chatbot capable of natural language understanding and generation, powered by Python, Flask, and a custom-trained machine learning model. Integrates with various APIs.",
      imageSrc: "/projects/ai_chatbot.png",
      technologies: ["Python", "Flask", "TensorFlow", "Natural Language Processing"],
      githubLink: "https://github.com/shardulsinghdev/ai-chatbot",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-50 object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col justify-end min-h-[70vh] px-8 py-16 max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <p className="text-lg font-semibold text-red-600 mb-2 flex items-center">
            <span className="text-xs tracking-widest border border-red-600 px-2 py-0.5 rounded-sm mr-2">N SERIES</span>
            DEVELOPER PORTFOLIO
          </p>
          <h1 className="text-8xl font-black leading-tight drop-shadow-lg mb-4">
            SHARDUL <br /> KACHERIA
          </h1>
          <p className="text-xl max-w-2xl leading-relaxed drop-shadow-md">
            When a young developer begins his journey, a small portfolio uncovers a mastery involving secret experiments, terrifying Full-Stack skills and a strange passion for AI/ML.
          </p>
        </div>
        <div className="flex space-x-4">
          <Link href="/projects" className="flex items-center px-8 py-3 bg-white text-black text-xl font-bold rounded-md hover:bg-gray-200 transition-colors duration-300">
            <svg className="w-7 h-7 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
            Play
          </Link>
          <Link href="/contact" className="flex items-center px-8 py-3 bg-gray-600 text-white text-xl font-bold rounded-md hover:bg-gray-700 transition-colors duration-300">
            <svg className="w-7 h-7 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11H13V8H11V11H8V13H11V16H13V13H16V11Z"/><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"/></svg>
            My List
          </Link>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pb-12 mt-16">
        <h2 className="text-3xl font-bold mb-6 text-white">My Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techStack.map((tech, index) => (
            <TechStackCard key={index} name={tech.name} icon={tech.icon} color={tech.color} />
          ))}
        </div>
      </div>

      {/* Popular Projects Section */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pb-12 mt-16">
        <h2 className="text-3xl font-bold mb-6 text-white">Popular Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      {/* GitHub Profile Section */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pb-12 mt-16">
        <h2 className="text-3xl font-bold mb-6 text-white">My GitHub Profile</h2>
        {isLoading && <p className="text-center text-gray-400">Loading GitHub data...</p>}
        {error && <p className="text-center text-red-500">Error: {error}</p>}
        {githubData && <GitHubCard data={githubData} />}
      </div>
    </div>
  );
} 