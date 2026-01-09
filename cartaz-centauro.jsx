import React from 'react';

export default function CartazCentauro() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(165deg, #0a100a 0%, #0f1f14 40%, #142b1a 70%, #0d1a10 100%)',
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      color: '#e8e6e3',
      padding: '48px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background geometric elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(ellipse at center, rgba(45,140,90,0.12) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />
      
      {/* Grid pattern overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(45,140,90,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(45,140,90,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none'
      }} />

      {/* Main content */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* Header */}
        <header style={{ marginBottom: '56px', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '24px'
          }}>
            <div style={{
              width: '48px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #d4af37)'
            }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: '#d4af37',
              fontWeight: 500
            }}>
              Framework Centauro
            </span>
            <div style={{
              width: '48px',
              height: '2px',
              background: 'linear-gradient(90deg, #d4af37, transparent)'
            }} />
          </div>
          
          <h1 style={{
            fontSize: '56px',
            fontWeight: 400,
            letterSpacing: '-1px',
            lineHeight: 1.1,
            margin: '0 0 8px 0',
            background: 'linear-gradient(135deg, #ffffff 0%, #a8d5ba 50%, #d4af37 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Ecossistema MDH
          </h1>
          
          <p style={{
            fontSize: '22px',
            fontWeight: 300,
            color: '#6db88a',
            fontStyle: 'italic',
            margin: 0
          }}>
            Inteligência Humana na Era da IA
          </p>
        </header>

        {/* Introduction */}
        <section style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
          border: '1px solid rgba(212,175,55,0.15)',
          borderRadius: '2px',
          padding: '32px 40px',
          marginBottom: '48px',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '-1px',
            left: '40px',
            right: '40px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #d4af37, transparent)'
          }} />
          <p style={{
            fontSize: '17px',
            lineHeight: 1.8,
            color: '#c4d8cc',
            margin: 0,
            textAlign: 'center'
          }}>
            O Ecossistema MDH integra inteligência artificial e cognição humana por meio de aplicações digitais voltadas à análise, decisão e desenvolvimento estratégico.
          </p>
        </section>

        {/* Section Title */}
        <div style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h2 style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px',
            letterSpacing: '6px',
            textTransform: 'uppercase',
            color: '#5a8a6a',
            margin: 0,
            fontWeight: 400
          }}>
            Três Eixos, Um Sistema Integrado
          </h2>
        </div>

        {/* Three Pillars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginBottom: '56px'
        }}>
          {[
            {
              number: '01',
              title: 'Autoconhecimento e Inteligência Pessoal',
              description: 'Ferramentas para simular decisões, planejar futuros possíveis e avaliar competências individuais frente à IA.',
              accent: '#2d8c5a'
            },
            {
              number: '02',
              title: 'Diagnóstico Cognitivo e Decisão Crítica',
              description: 'Aplicações para análise de argumentos, avaliação de riscos, decisões coletivas e exploração de cenários alternativos.',
              accent: '#d4af37'
            },
            {
              number: '03',
              title: 'Auditoria Informacional e Monitoramento',
              description: 'Soluções para análise de autenticidade, interrogação de documentos, comparação de modelos e monitoramento da proximidade humano-IA.',
              accent: '#4aa87a'
            }
          ].map((pillar, index) => (
            <div key={index} style={{
              background: 'rgba(15,31,20,0.6)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '2px',
              padding: '28px 24px',
              position: 'relative',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '3px',
                height: '100%',
                background: `linear-gradient(180deg, ${pillar.accent}, transparent)`,
                borderRadius: '2px 0 0 2px'
              }} />
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '10px',
                color: pillar.accent,
                letterSpacing: '2px',
                display: 'block',
                marginBottom: '12px'
              }}>
                {pillar.number}
              </span>
              <h3 style={{
                fontSize: '16px',
                fontWeight: 500,
                color: '#ffffff',
                margin: '0 0 12px 0',
                lineHeight: 1.35
              }}>
                {pillar.title}
              </h3>
              <p style={{
                fontSize: '13px',
                lineHeight: 1.7,
                color: '#8a9f8f',
                margin: 0
              }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Deliverables Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '32px',
          marginBottom: '56px'
        }}>
          <div style={{
            background: 'linear-gradient(145deg, rgba(45,140,90,0.12) 0%, rgba(45,140,90,0.03) 100%)',
            border: '1px solid rgba(45,140,90,0.2)',
            borderRadius: '2px',
            padding: '32px'
          }}>
            <h3 style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#3da86a',
              margin: '0 0 24px 0',
              fontWeight: 400
            }}>
              O que o Ecossistema Entrega
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'Apoio estruturado à tomada de decisão',
                'Análise crítica aplicada',
                'Planejamento prospectivo',
                'Uso estratégico da inteligência artificial'
              ].map((item, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    background: '#2d8c5a',
                    borderRadius: '50%',
                    flexShrink: 0
                  }} />
                  <span style={{
                    fontSize: '14px',
                    color: '#c4d8cc'
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Framework Quote */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0.02) 100%)',
            border: '1px solid rgba(212,175,55,0.15)',
            borderRadius: '2px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <h3 style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#d4af37',
              margin: '0 0 20px 0',
              fontWeight: 400
            }}>
              Framework Centauro
            </h3>
            <p style={{
              fontSize: '15px',
              lineHeight: 1.75,
              color: '#e8e6e3',
              margin: 0,
              fontStyle: 'italic'
            }}>
              "IA como instrumento de ampliação da autonomia intelectual, da clareza decisional e da inteligência aplicada."
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer style={{
          textAlign: 'center',
          paddingTop: '32px',
          borderTop: '1px solid rgba(255,255,255,0.06)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '32px'
          }}>
            {/* Centaur Symbol */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="15" stroke="#d4af37" strokeWidth="1" opacity="0.3"/>
                <circle cx="16" cy="16" r="10" stroke="#2d8c5a" strokeWidth="1" opacity="0.5"/>
                <circle cx="16" cy="16" r="4" fill="#d4af37" opacity="0.8"/>
              </svg>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '10px',
                letterSpacing: '2px',
                color: '#5a8a6a',
                textTransform: 'uppercase'
              }}>
                Humano + IA
              </span>
            </div>
          </div>
        </footer>
      </div>
      
      {/* Import fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=JetBrains+Mono:wght@400;500&display=swap');
      `}</style>
    </div>
  );
}
