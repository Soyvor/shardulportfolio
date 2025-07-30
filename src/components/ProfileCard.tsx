import Image from "next/image";

interface ProfileCardProps {
  name: string;
  imageSrc: string;
  onClick: () => void;
}

export default function ProfileCard({ name, imageSrc, onClick }: ProfileCardProps) {
  return (
    <div className="flex flex-col items-center group cursor-pointer" onClick={onClick}>
      <div className="w-40 h-40 rounded-md overflow-hidden border-2 border-transparent group-hover:border-white transition-all duration-300">
        <Image src={imageSrc} alt={`${name}'s Profile`} width={160} height={160} className="object-cover" />
      </div>
      <span className="text-gray-400 text-lg mt-4 group-hover:text-white transition-colors duration-300">{name}</span>
    </div>
  );
} 