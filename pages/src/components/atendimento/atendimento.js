export default function AtendimentoOnline() {
    return (
        <>
            <section id="Atendimento" className="">
                <div className="container pb-5">
                    <div className="headerSection">
                        <h2 className="titleSection py-3">Entenda as vantagens da terapia on-line</h2>
                    </div>
                    <div className="atendimentoContent">
                        <div className="atendimentoCards">
                            <h3 className="text-primary">Praticidade</h3>
                            <p>Sem a necessidade de deslocamento até o consultório, você pode realizar suas sessões de onde estiver, basta ter uma conexão à internet e um dispositivo móvel ou computador.</p>
                        </div>
                        <div className="atendimentoCards">
                            <h3 className="text-primary">Comodidade</h3>
                            <p>Realizar terapia de conforto de sua própria casa ou local de escolha pode ser muito mais confortável para algumas pessoas.</p>
                        </div>
                        <div className="atendimentoCards">
                            <h3 className="text-primary">Sigilo</h3>
                            <p>As sessões on-line são tão confidenciais quanto as sessões presenciais, garantindo que suas informações pessoais e terapêuticas permaneçam seguras.</p>
                        </div>
                        <div className="atendimentoCards">
                            <h3 className="text-primary">Horários flexíveis</h3>
                            <p>Com a possibilidade de agendar sessões em horários que sejam convenientes para você, é possível conciliar terapia com sua rotina diária.</p>
                        </div>
                        <div className="atendimentoCards">
                            <h3 className="text-primary">Mesma qualidade</h3>
                            <p>Não há diferença na qualidade da terapia entre as sessões on-line e presenciais. O servico será prestado com qualidade independente da demanda ou questão levada pelo paciente.</p>
                        </div>
                        <div className="atendimentoCards">
                            <h3 className="text-primary">Vínculo terapêutico</h3>
                            <p>O vínculo terapêutico é essencial em qualquer tipo de terapia, e isso não muda na terapia on-line.</p>

                        </div>
                    </div>
                </div>
                <div className="d-flex text-center justify-content-center pb-5">
                    <button className="btn-land bg-gradient btn btn-lg btn-primary " onClick={() => (window.open('https://api.whatsapp.com/send?phone=5511978493885', "_blank"))}>Tire suas dúvidas</button>
                </div>
            </section>
        </>)
}