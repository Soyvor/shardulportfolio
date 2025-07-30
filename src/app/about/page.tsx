import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-8 pt-20">
      <div className="absolute top-4 left-4">
        <Image src="/netflix.png" alt="Netflix Logo" width={100} height={30} />
      </div>
      <h1 className="text-5xl font-bold mb-10 text-red-600">About Me</h1>
      <div className="max-w-4xl text-lg leading-relaxed text-center mb-12">
        <p className="mb-4">
          Hello! I'm Shardul Singh, a passionate Full-Stack Developer with a knack for building innovative and efficient web applications. My journey in the world of technology began with a fascination for how software can solve real-world problems and create impactful experiences. I thrive on learning new technologies and constantly pushing the boundaries of what's possible.
        </p>
        <p>
          My expertise lies in crafting robust back-end systems, developing dynamic front-end interfaces, and integrating various services to deliver seamless user experiences. I am also keenly interested in Artificial Intelligence and Machine Learning, exploring how these fields can enhance traditional web development.
        </p>
      </div>

      <div className="w-full max-w-4xl mb-12">
        <h2 className="text-4xl font-bold mb-6 text-red-600 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <Image src="/skills/javascript.svg" alt="JavaScript" width={60} height={60} className="mb-2" />
            <span className="text-gray-300">JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/skills/python.svg" alt="Python" width={60} height={60} className="mb-2" />
            <span className="text-gray-300">Python</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/skills/typescript.svg" alt="TypeScript" width={60} height={60} className="mb-2" />
            <span className="text-gray-300">TypeScript</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/skills/react.svg" alt="React" width={60} height={60} className="mb-2" />
            <span className="text-gray-300">React</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/skills/nextjs.svg" alt="Next.js" width={60} height={60} className="mb-2" />
            <span className="text-gray-300">Next.js</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/skills/nodejs.svg" alt="Node.js" width={60} height={60} className="mb-2" />
            <span className="text-gray-300">Node.js</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/skills/express.svg" alt="Express.js" width={60} height={60} className="mb-2" />
            <span className="text-gray-300">Express.js</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/skills/tailwind.svg" alt="Tailwind CSS" width={60} height={60} className="mb-2" />
            <span className="text-gray-300">Tailwind CSS</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/skills/git.svg" alt="Git" width={60} height={60} className="mb-2" />
            <span className="text-gray-300">Git</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/skills/docker.svg" alt="Docker" width={60} height={60} className="mb-2" />
            <span className="text-gray-300">Docker</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/skills/firebase.svg" alt="Firebase" width={60} height={60} className="mb-2" />
            <span className="text-gray-300">Firebase</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/skills/mongodb.svg" alt="MongoDB" width={60} height={60} className="mb-2" />
            <span className="text-gray-300">MongoDB</span>
          </div>
        </div>
      </div>

      <div className="flex space-x-6">
        <Link href="https://www.linkedin.com/in/shardul-singh-dev" target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-red-600 text-red-600 rounded-md hover:bg-red-600 hover:text-white transition-colors duration-300">
          LinkedIn
        </Link>
        <Link href="https://github.com/shardulsinghdev" target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-red-600 text-red-600 rounded-md hover:bg-red-600 hover:text-white transition-colors duration-300">
          GitHub
        </Link>
      </div>
    </div>
  );
} 