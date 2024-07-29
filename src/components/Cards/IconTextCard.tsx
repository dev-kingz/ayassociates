import React from 'react';
import { IconType } from 'react-icons'; // Import IconType from react-icons

interface IconTextCardProps {
  title: string;
  text: string;
  bgColor?: string;
  Icon: IconType; // Use IconType from react-icons
}

const IconTextCard: React.FC<IconTextCardProps> = ({ Icon, title, text, bgColor = 'bg-white' }) => {
  const textColor = bgColor === 'bg-white' ? 'text-gray-500' : 'text-gray-200';
  const titleColor = bgColor === 'bg-white' ? 'text-secondary' : 'text-white';
  const iconColor = bgColor === 'bg-white' ? 'text-secondary' : 'text-white';

  return (
    <div className={`w-[330px] sm:w-[250px] h-[220px] sm:h-[300px] px-6 py-7 flex flex-col rounded-lg ${bgColor} shadow-lg gap-4`}>
      <div className="flex justify-end">
        <Icon className={`h-10 w-10 ${iconColor}`}/>
      </div>
      <div className="text-start">
        <h3 className={`text-sm font-secondary ${titleColor}`}>Premium Offerings</h3>
        <h1 className={`text-xl font-semibold ${titleColor}`}>{title}</h1>
      </div>
      <p className={`text-start text-sm ${textColor}`}>{text}</p>
    </div>
  );
}

export default IconTextCard;
