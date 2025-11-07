
import React from 'react';

interface CardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-slate-800/50 p-6 rounded-lg text-center backdrop-blur-sm border border-slate-700 hover:border-sky-500 transition-all duration-300 transform hover:-translate-y-2">
      <div className="flex justify-center items-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default Card;
