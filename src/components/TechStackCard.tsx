import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
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

interface TechStackCardProps {
  name: string;
  icon?: IconProp;
  color?: string; // Add color prop
}

export default function TechStackCard({ name, icon, color }: TechStackCardProps) {
  return (
    <div className="bg-[#141414] p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center hover:shadow-red-600 transition-shadow duration-300 h-40">
      {icon && <FontAwesomeIcon icon={icon} className="text-5xl mb-4" style={{ color: color }} />}
      <h3 className="text-xl font-bold text-gray-200">{name}</h3>
    </div>
  );
} 