
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} MDH Inovação e Conhecimento. Todos os direitos reservados.</p>
        <p className="mt-2 text-sm">Construindo o futuro, um insight de cada vez.</p>
      </div>
    </footer>
  );
};

export default Footer;
