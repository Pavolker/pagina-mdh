
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import Card from './components/Card';
import Footer from './components/Footer';
import { sections, solutions, products, akaContent, mhsContent, lieManualContent } from './constants';
import { BrainCircuit, BookOpen, Rocket, School } from './components/icons';

const App: React.FC = () => {
  const iconMap: { [key: string]: React.ReactElement } = {
    'ia': <BrainCircuit className="h-8 w-8 text-sky-400" />,
    'human': <BookOpen className="h-8 w-8 text-sky-400" />,
    'education': <School className="h-8 w-8 text-sky-400" />,
    'emotion': <Rocket className="h-8 w-8 text-sky-400" />
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        
        <Section id="about" title="Nossa Visão" subtitle="Unindo Tecnologia e Emoção">
          <p className="max-w-3xl mx-auto text-center text-slate-400 leading-relaxed">
            Na MDH, acreditamos que o equilíbrio entre tecnologia e emoção, conhecimento e autoconhecimento é o eixo central para o desenvolvimento humano e organizacional no mundo contemporâneo. A partir dessa perspectiva, estruturamos nossas quatro linhas de produtos para atender às demandas de um cenário em constante transformação, unindo inovação tecnológica e humanidade.
          </p>
        </Section>
        
        <Section id="pillars" title="Linhas de Trabalho" subtitle="Nossos 4 Pilares de Atuação">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sections.map(section => (
              <Card 
                key={section.id}
                icon={iconMap[section.id]}
                title={section.title}
                description={section.content}
              />
            ))}
          </div>
        </Section>
        
        <Section id="mhs" title={mhsContent.title} subtitle="Programa de Habilidades Socioemocionais">
           <div className="bg-slate-800/50 rounded-lg p-8 max-w-4xl mx-auto backdrop-blur-sm border border-slate-700">
              <p className="text-slate-300 mb-4 leading-relaxed">{mhsContent.p1}</p>
              <p className="text-slate-300 mb-4 leading-relaxed">{mhsContent.p2}</p>
              <p className="text-slate-300 mb-4 leading-relaxed">{mhsContent.p3}</p>
              <p className="text-slate-300 mb-4 leading-relaxed">{mhsContent.p4}</p>
              <p className="text-slate-300 font-semibold leading-relaxed">{mhsContent.p5}</p>
           </div>
        </Section>
        
        <Section id="solutions" title="Nossas Soluções" subtitle="Formatos Flexíveis para seu Desenvolvimento">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {solutions.map(solution => (
              <div key={solution.title} className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-sky-500 transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-sky-400 mb-2">{solution.title}</h3>
                <p className="text-slate-400">{solution.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="products" title="Nossos Produtos" subtitle="Conhecimento Aplicado e Estratégico">
            <div className="max-w-4xl mx-auto space-y-8">
                {products.map(product => (
                     <div key={product.title} className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm border border-slate-700">
                        <h3 className="text-2xl font-bold gradient-text mb-3">{product.title}</h3>
                        <p className="text-slate-300 leading-relaxed">{product.description}</p>
                     </div>
                ))}
            </div>
        </Section>
        
        <Section id="aka" title={akaContent.title} subtitle="Nossa Metodologia">
            <div className="bg-slate-800/50 rounded-lg p-8 max-w-4xl mx-auto backdrop-blur-sm border border-slate-700">
                <p className="text-slate-300 leading-relaxed">{akaContent.description}</p>
            </div>
        </Section>

      </main>
      <Footer />
    </div>
  );
};

export default App;
