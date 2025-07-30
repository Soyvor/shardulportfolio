"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import ProfileCard from "../components/ProfileCard";

export default function Home() {
  const router = useRouter();

  const handleProfileClick = (profileName: string) => {
    if (profileName === "Shardul") {
      router.push("/hero");
    } else {
      // Handle other profiles if needed, perhaps a generic profile page or error
      alert(`Navigating to ${profileName}'s profile (not yet implemented)`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="absolute top-4 left-4">
        <Image src="/netflix.png" alt="Netflix Logo" width={100} height={30} />
      </div>
      <h1 className="text-5xl font-bold mb-10">Who's watching?</h1>
      <div className="flex space-x-8">
        <ProfileCard name="Shardul" imageSrc="/shardul_profile.jpg" onClick={() => handleProfileClick("Shardul")} />
        
      </div>
      <button className="mt-16 px-8 py-3 border border-gray-500 text-gray-400 text-lg tracking-wider hover:border-white hover:text-white transition-all duration-300">
        MANAGE PROFILES
      </button>
    </div>
  );
}
