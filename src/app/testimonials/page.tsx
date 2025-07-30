import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  name: string;
  position: string;
  avatarSrc: string;
}

function TestimonialCard({
  quote,
  name,
  position,
  avatarSrc,
}: TestimonialCardProps) {
  return (
    <div className="bg-[#141414] p-8 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-red-600 transition-shadow duration-300">
      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-red-600">
        <Image src={avatarSrc} alt={`${name}'s Avatar`} width={96} height={96} className="object-cover" />
      </div>
      <p className="text-gray-300 text-lg italic mb-4">"{quote}"</p>
      <h3 className="text-xl font-bold text-red-600">{name}</h3>
      <p className="text-gray-400 text-md">{position}</p>
    </div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Shardul is an exceptional developer who consistently delivers high-quality work. His problem-solving skills and dedication are truly inspiring.",
      name: "Jane Doe",
      position: "Senior Software Engineer at XYZ Corp",
      avatarSrc: "/testimonials/jane_doe.png",
    },
    {
      quote:
        "Working with Shardul was a pleasure. He's a great communicator and a brilliant mind, always finding innovative solutions.",
      name: "John Smith",
      position: "Project Manager at ABC Solutions",
      avatarSrc: "/testimonials/john_smith.png",
    },
    {
      quote:
        "Shardul's contributions to our open-source project were invaluable. His code is clean, well-documented, and highly efficient.",
      name: "Emily White",
      position: "Open Source Lead at FOSS Foundation",
      avatarSrc: "/testimonials/emily_white.png",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-8 pt-20">
      <div className="absolute top-4 left-4">
        <Image src="/netflix.png" alt="Netflix Logo" width={100} height={30} />
      </div>
      <h1 className="text-5xl font-bold mb-10 text-red-600">Testimonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
} 