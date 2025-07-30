import Image from "next/image";

export default function MyList() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <div className="absolute top-4 left-4">
        <Image src="/netflix.svg" alt="Netflix Logo" width={100} height={30} />
      </div>
      <h1 className="text-5xl font-bold mb-8 text-red-600">My List</h1>
      <p className="text-lg text-gray-300">This section is under construction. Please check back later for exciting content!</p>
    </div>
  );
} 