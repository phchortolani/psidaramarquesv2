import Link from "next/link";
import CallToActionButton from "../buttons/callToAction";

export default function AtendimentoOnline() {
    return (
        <>
            <section id="Atendimento" className="pt-5">
                <div className="container pb-5">
                    <div className="headerSection">
                        <h2 className="titleSection py-6">Benefícios da terapia</h2>
                    </div>
                    <div className="atendimentoContent">
                        <div className="atendimentoCards">
                            <h4 className="text-primary">Terapia 100% online</h4>
                            <p>A praticidade de receber atendimento no conforto de casa, sem deslocamentos, tornando o processo terapêutico mais acessível e flexível.</p>
                        </div>
                        <div className="atendimentoCards">
                            <h4 className="text-primary">Baseado em evidências</h4>
                            <p>A Terapia Cognitivo-Comportamental (TCC) é respaldada por pesquisas científicas comprovadas, garantindo sua eficácia no tratamento de diversas questões psicológicas.</p>
                        </div>
                        <div className="atendimentoCards">
                            <h4 className="text-primary">Tratamento amplo</h4>
                            <p> A TCC oferece suporte para diversas áreas do seu bem-estar, incluindo mudanças de hábitos, autoestima e relacionamentos.</p>
                        </div>
                        <div className="atendimentoCards">
                            <h4 className="text-primary">Individualizado</h4>
                            <p> O foco na individualidade do paciente permite um tratamento personalizado, adaptado aos objetivos e necessidades específicas de cada pessoa.</p>
                        </div>
                        {/*      <div className="atendimentoCards">
                            <h4 className="text-primary">Mesma qualidade</h4>
                            <p>Não há diferença na qualidade da terapia entre as sessões on-line e presenciais. O servico será prestado com qualidade independente da demanda ou questão levada pelo paciente.</p>
                        </div>
                        <div className="atendimentoCards">
                            <h4 className="text-primary">Vínculo terapêutico</h4>
                            <p>O vínculo terapêutico é essencial em qualquer tipo de terapia, e isso não muda na terapia on-line.</p>

                        </div> */}
                    </div>

                </div>
                <div className="d-flex text-center justify-content-center pb-5">
                  {/*   <Link href="/agendamento">
                        <button type="button" className="btn-land bg-gradient btn btn-lg btn-primary ">Agende sua Sessão Online</button>
                    </Link> */}
                    <CallToActionButton event={'conversion_beneficios_terapia'}>
                        <button type="button" className="btn-land bg-gradient btn btn-lg btn-primary ">Agende sua Sessão Online</button>
                    </CallToActionButton>
                </div>
            </section>
        </>)
}