
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center overflow-hidden" style={{backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')"}}>
      <div className="absolute inset-0 bg-slate-900 bg-opacity-70 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 to-slate-900"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Navegando os Desafios na Era da <span className="gradient-text">Inteligência Artificial</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
          Aliamos conhecimento, pesquisa e ética para capacitar indivíduos e organizações a prosperar na nova era tecnológica, transformando desafios em oportunidades.
        </p>
        <a href="#about" className="bg-sky-500 text-white font-bold py-3 px-8 rounded-full hover:bg-sky-600 transition-all duration-300 transform hover:scale-105">
          Explore Nossa Visão
        </a>
      </div>
    </section>
  );
};

export default Hero;
