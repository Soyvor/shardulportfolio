import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  technologies,
  githubLink,
  demoLink,
}: ProjectCardProps) {
  return (
    <div className="bg-[#141414] rounded-lg overflow-hidden shadow-lg hover:shadow-red-600 transition-shadow duration-300">
      <Image src={imageSrc} alt={title} width={500} height={300} className="w-full h-auto object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-red-600">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span key={tech} className="bg-gray-700 text-gray-200 text-sm px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <Link href={githubLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-300">
            GitHub
          </Link>
          {demoLink && (
            <Link href={demoLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-300">
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
} 