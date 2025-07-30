import Image from "next/image";
import Link from "next/link";

interface ExperienceItemProps {
  company: string;
  role: string;
  dates: string;
  techUsed: string[];
  achievements: string[];
  companyLink?: string;
}

function ExperienceItem({
  company,
  role,
  dates,
  techUsed,
  achievements,
  companyLink,
}: ExperienceItemProps) {
  return (
    <div className="bg-[#141414] p-6 rounded-lg shadow-lg mb-6 last:mb-0 hover:shadow-red-600 transition-shadow duration-300">
      <h3 className="text-3xl font-bold text-red-600 mb-2">
        {role} at{" "}
        {companyLink ? (
          <Link href={companyLink} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
            {company}
          </Link>
        ) : (
          company
        )}
      </h3>
      <p className="text-gray-400 text-lg mb-4">{dates}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {techUsed.map((tech) => (
          <span key={tech} className="bg-gray-700 text-gray-200 text-sm px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <ul className="list-disc list-inside text-gray-300">
        {achievements.map((achievement, index) => (
          <li key={index} className="mb-1">
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  const experiences = [
    {
      company: "Tech Solutions Inc.",
      role: "Lead Software Engineer",
      dates: "Jan 2021 - Present",
      techUsed: ["React", "Node.js", "TypeScript", "AWS", "Docker", "Kubernetes"],
      achievements: [
        "Led the development of a new microservices architecture, improving system scalability by 50%.",
        "Mentored a team of 5 junior developers, fostering a collaborative and productive environment.",
        "Implemented CI/CD pipelines, reducing deployment time by 30%.",
      ],
      companyLink: "https://www.techsolutions.com",
    },
    {
      company: "Innovate Systems",
      role: "Software Engineer",
      dates: "Jul 2018 - Dec 2020",
      techUsed: ["Angular", "Java", "Spring Boot", "PostgreSQL"],
      achievements: [
        "Developed and maintained key features for the company's flagship product.",
        "Optimized database queries, leading to a 20% improvement in application performance.",
        "Collaborated with cross-functional teams to deliver high-quality software on time.",
      ],
      companyLink: "https://www.innovatesystems.com",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-8 pt-20">
      <div className="absolute top-4 left-4">
        <Image src="/netflix.png" alt="Netflix Logo" width={100} height={30} />
      </div>
      <h1 className="text-5xl font-bold mb-10 text-red-600">Experience</h1>
      <div className="max-w-4xl w-full">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </div>
  );
} 