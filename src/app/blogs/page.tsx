import Image from "next/image";
import Link from "next/link";

interface BlogItemProps {
  title: string;
  description: string;
  link: string;
  platform: string;
}

function BlogItem({ title, description, link, platform }: BlogItemProps) {
  return (
    <div className="bg-[#141414] p-6 rounded-lg shadow-lg mb-6 last:mb-0 hover:shadow-red-600 transition-shadow duration-300">
      <h3 className="text-3xl font-bold text-red-600 mb-2">{title}</h3>
      <p className="text-gray-400 text-lg mb-4">{platform}</p>
      <p className="text-gray-300 mb-4">{description}</p>
      <Link href={link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-300">
        Read More
      </Link>
    </div>
  );
}

export default function Blogs() {
  const blogPosts = [
    {
      title: "Understanding React Hooks",
      description:
        "A deep dive into React Hooks, explaining their benefits, common use cases, and how to write custom hooks for better code organization.",
      link: "https://dev.to/shardulsinghdev/understanding-react-hooks",
      platform: "Dev.to",
    },
    {
      title: "Getting Started with Next.js API Routes",
      description:
        "A comprehensive guide to building serverless APIs with Next.js, covering routing, data handling, and deployment strategies.",
      link: "https://medium.com/@shardulsinghdev/getting-started-with-nextjs-api-routes",
      platform: "Medium",
    },
  ];

  const openSourceContributions = [
    {
      title: "Contributed to awesome-project",
      description: "Improved performance of data fetching by optimizing GraphQL queries.",
      link: "https://github.com/some-org/awesome-project/pull/123",
    },
    {
      title: "Bug fix in popular-library",
      description: "Fixed a critical bug related to authentication flow in the library.",
      link: "https://github.com/another-org/popular-library/issues/456",
    },
  ];

  const speakingEngagements = [
    {
      title: "Web Development Trends 2023",
      description: "A talk delivered at a local tech meetup, discussing the latest trends in web development and future outlook.",
      link: "https://www.youtube.com/watch?v=xxxxxxxx",
      platform: "Tech Meetup",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-8 pt-20">
      <div className="absolute top-4 left-4">
        <Image src="/netflix.png" alt="Netflix Logo" width={100} height={30} />
      </div>
      <h1 className="text-5xl font-bold mb-10 text-red-600">Blogs & Contributions</h1>

      <div className="w-full max-w-4xl mb-12">
        <h2 className="text-4xl font-bold mb-6 text-red-600 text-center">Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <BlogItem key={index} {...post} />
          ))}
        </div>
      </div>

      <div className="w-full max-w-4xl mb-12">
        <h2 className="text-4xl font-bold mb-6 text-red-600 text-center">Open Source Contributions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {openSourceContributions.map((contribution, index) => (
            <BlogItem // Re-using BlogItem component, though a more generic Card component might be better here
              key={index}
              title={contribution.title}
              description={contribution.description}
              link={contribution.link}
              platform="GitHub"
            />
          ))}
        </div>
      </div>

      <div className="w-full max-w-4xl mb-12">
        <h2 className="text-4xl font-bold mb-6 text-red-600 text-center">Speaking Engagements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {speakingEngagements.map((engagement, index) => (
            <BlogItem // Re-using BlogItem component
              key={index}
              title={engagement.title}
              description={engagement.description}
              link={engagement.link}
              platform={engagement.platform}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 