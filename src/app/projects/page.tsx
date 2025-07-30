import Image from "next/image";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Netflix Clone",
      description:
        "A full-stack Netflix clone built with Next.js, Tailwind CSS, and Firebase for authentication and data storage. Features include user authentication, movie browsing, and a watchlist.",
      imageSrc: "/projects/netflix_clone.png",
      technologies: ["Next.js", "Tailwind CSS", "Firebase", "React"],
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
    {
      title: "Portfolio Website",
      description:
        "This very portfolio website, designed to showcase my skills and projects in a unique Netflix-inspired UI. Built with Next.js and Tailwind CSS.",
      imageSrc: "/projects/portfolio.png",
      technologies: ["Next.js", "Tailwind CSS", "React"],
      githubLink: "https://github.com/shardulsinghdev/shardulportfolio",
      demoLink: "/",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-8 pt-20">
      <div className="absolute top-4 left-4">
        <Image src="/netflix.png" alt="Netflix Logo" width={100} height={30} />
      </div>
      <h1 className="text-5xl font-bold mb-10 text-red-600">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
} 