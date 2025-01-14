import styled from 'styled-components';
import React, { useEffect } from 'react';
import { ArrowDown } from 'phosphor-react';
import CallToActionButton from '../src/components/buttons/callToAction';
import { SalvarAgendamentoView } from '../../services/confService';

// src/components/LandingPage/styles.js
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 20px',
    padding: '20px 20px',
    backgroundColor: '#f9f6fe',
    fontFamily: "'Poppins', sans-serif",
    color: '#333',
    lineHeight: '1.6',
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  mainTitle: {
    color: '#987965',
    fontSize: '2.5rem',
    fontWeight: '600',
    marginBottom: '20px',
    lineHeight: '1.2',
  },
  subtitle: {
    color: '#666',
    fontSize: '1.2rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  section: {
    flex: '1 1', // Ambos ocupam 45% do espaço, mas são responsivos
    textAlign: 'center',
  },
  sectionTitle: {
    color: '#7f73d0',
    fontSize: '2rem',
    marginBottom: '40px',
    textAlign: 'center',
    fontWeight: '500',
  },
  processGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 0.8fr))',
  },
  sectionsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '40px',
    flexWrap: 'wrap', // Garantir que funciona em telas menores
  },
  processCard: {
    padding: '12px',
    textAlign: 'left',
    borderRadius: '15px',
    transition: 'transform 0.3s ease',
    cursor: 'default',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  stepNumber: {
    backgroundColor: '#7f73d0',
    color: 'white',
    width: '40px',
    height: '40px',
    borderRadius: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    marginBottom: '20px',
  },
  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '25px',
  },
  benefitCard: {
    padding: '12px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
  },
  checkmark: {
    color: '#4CAF50',
    fontSize: '1.5rem',
    lineHeight: '1',
  },
  pricingSection: {
    backgroundColor: '#f9f6fe',
    padding: '40px',
    borderRadius: '20px',
    textAlign: 'center',
  },
  priceHighlight: {
    fontSize: '2rem',
    color: '#212121',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '14px 30px',
    border: 'none',
    borderRadius: '30px',
    fontSize: '1.2rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(127, 115, 208, 0.2)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
  },
};

const PriceCard = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  box-shadow: 0 4px 6px rgba(127, 115, 208, 0.1);
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;



const ProcessStep = ({ number, children }) => (
  <div style={styles.processCard}>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '10px', padding: '10px 0' }}>
      <div >
        <div style={styles.stepNumber}>{number} </div>
      </div>
      <div style={{ lineHeight: '1.6' }}>
        {children}
      </div>
    </div>

    {number !== '4' && <ArrowDown size={32} style={{ color: '#7f73d0', marginLeft: '0.2rem' }} />}
  </div>
);

const Benefit = ({ children }) => (
  <div style={styles.benefitCard}>
    <span style={styles.checkmark}>✓</span>
    <p style={{ margin: 0, lineHeight: '1.6' }}>{children}</p>
  </div>
);

const LandingPage = () => {

  useEffect(() => {
    SalvarAgendamentoView();
  }, []);

  return (
    <>

      <div style={{ backgroundColor: '#f9f6fe', minHeight: '100vh', flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center', overflowX: 'hidden' }}>
        <div style={styles.container}>
          <div style={styles.sectionsContainer}>
            <section style={styles.section}>
              <PriceCard>
                <div style={{ marginBottom: '40px' }}>
                  <h2 style={styles.sectionTitle}>Processo Terapêutico</h2>
                  <div style={styles.processGrid}>
                    <ProcessStep number="1">
                      Usamos as primeiras sessões para nos conhecermos melhor, <b>identificar os principais
                        problemas</b> a serem tratados na terapia e <b>traçar objetivos</b>.
                    </ProcessStep>

                    <ProcessStep number="2">
                      A partir da avaliação, é elaborado um <b>plano de tratamento individualizado</b>,
                      utilizando as técnicas e protocolos mais eficazes para as suas necessidades.
                    </ProcessStep>

                    <ProcessStep number="3">
                      Serão utilizadas estratégias da <b>Terapia Cognitivo-Comportamental </b>para a
                      mudança de pensamentos, comportamentos e emoções.
                    </ProcessStep>

                    <ProcessStep number="4">
                      Tendo alcançado os objetivos terapêuticos, é iniciado um processo de <b>alta
                        gradual</b>, para que você se torne <b>cada vez mais independente</b>.
                    </ProcessStep>
                  </div>
                </div>
                <div>
                  <div style={{ textAlign: 'left' }}>
                    <h2 style={styles.sectionTitle}>O que está incluso:</h2>
                    <Benefit>
                      Sessões semanais de <b>50 minutos</b>, agendadas nos dias e horários combinados.
                    </Benefit>
                    <Benefit>
                      <b>Suporte via WhatsApp</b> para esclarecer dúvidas pontuais.
                    </Benefit>
                    <Benefit>
                      <b>Sessão de feedback</b> personalizada para monitorar seu progresso.
                    </Benefit>
                    <Benefit>
                      Acesso a uma <b>playlist</b> exclusiva de <b>Regulação Emocional</b> no Spotify.
                    </Benefit>
                    <Benefit>
                      <b>Materiais digitais</b> e exercícios terapêuticos disponibilizados para você.
                    </Benefit>
                    <Benefit>
                      Participação no <b>Close Friends</b> exclusivo para pacientes.
                    </Benefit>
                    <Benefit>
                      <b>Jogos terapêuticos</b> para desenvolver e fortalecer habilidades emocionais.
                    </Benefit>
                    <Benefit>
                      <b>Plano de tratamento personalizado</b> de acordo com suas necessidades.
                    </Benefit>
                  </div>

                  <hr></hr>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <small style={{ fontSize: '1rem', color: '#666', fontWeight: 'normal' }}>Plano mensal de <b>4 sessões</b></small>
                    <small style={{ fontSize: '0.8rem', color: '#666', fontWeight: 'normal', marginTop: '5px', textDecoration: 'line-through' }}>R$ 440,00 </small>
                    <div style={styles.priceHighlight}>R$ 400,00  <b style={{ fontSize: '0.8rem', fontWeight: 'normal', color: '#4CAF50' }}>R$ 40,00 OFF</b>
                    </div>
                    <small style={{ fontSize: '1rem', color: '#666', fontWeight: 'normal', marginBottom: '5px' }}> por mês* </small>
                    <div>
                      <small style={{ lineHeight: '1.6', color: '#666' }}>
                        *O valor de sessões avulsas é de: R$ 110,00.
                      </small>
                    </div>
                  </div>
                  <p style={{ lineHeight: '1.6', textAlign: 'left', marginTop: '10px', textAlign: 'center' }}>
                    Os pagamentos são feitos de forma antecipada até o quinto dia útil de cada mês,
                    via PIX ou transferência bancária.
                  </p>
                  <CallToActionButton event={'conversion_agendamento'}>
                    <button
                      style={styles.button}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#128C7E'; //cor whatsapp
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = '#4CAF50'; //cor whatsapp mais escura
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      <i className="fab fa-whatsapp" style={{ marginRight: '10px', background: 'transparent' }}></i>
                      Agende sua Sessão
                    </button>
                  </CallToActionButton>

                </div>
              </PriceCard>
            </section>
          </div>
          <div className=" text-center pt-5" style={{ background: '#f9f6fe' }}>

            <div className="d-flex flex-column justify-content-around align-items-center">
              <div className='text-center'>
                <h3 className='text-primary'><b>Contato</b></h3>
              </div>
              <ul style={{ listStyle: "none" }} className='p-1'>
                <li>
                  <div>
                    <div>
                      <b>Psicóloga Dara Marques</b>
                    </div>
                  </div>
                </li>
                <li>
                  <div >
                    <div>
                      <b>CRP 06/164999</b>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='d-flex justify-content-between gap-2'>
                    <div>
                      <i aria-hidden="true" className="fas fa-mobile-alt"></i>
                    </div>
                    <div>
                      <b> +55 (11) 97849-3885</b>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>



    </>

  );
};

export default LandingPage;