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
                            <p>Facilidade para conseguir encontrar um psicólogo que você se identifica e que percebe que pode te ajudar no seu problema.</p>
                        </div>
                        <div className="atendimentoCards">
                            <h3 className="text-primary">Comodidade</h3>
                            <p>Você pode fazer na sua casa ou em qualquer lugar que você se sinta confortável, sem precisar gastar dinheiro com gasolina e transporte público.</p>
                        </div>
                        <div className="atendimentoCards">
                            <h3 className="text-primary">Sigilo</h3>
                            <p>O sigilo acontece da mesma forma que um atendimento presencial, mas nesse caso é importante que o paciente auxilie estando num ambiente que se sente confortável e seguro para que as informações não sejam ouvidas por outras pessoas.</p>
                        </div>
                        <div className="atendimentoCards">
                            <h3 className="text-primary">Horários flexíveis</h3>
                            <p>Por conta da praticidade tanto para os pacientes quanto para os psicólogos, os horários de agendamentos podem ser mais flexíveis.</p>
                        </div>
                        <div className="atendimentoCards">
                            <h3 className="text-primary">Mesma qualidade</h3>
                            <p>A terapia funciona da mesma forma que uma terapia presencial e por isso qualquer demanda ou questão levada pelo paciente o serviço será prestado com qualidade.</p>
                        </div>
                        <div className="atendimentoCards">
                            <h3 className="text-primary">Vínculo terapêutico</h3>
                            <p>Na terapia online o vínculo terapêutico também existe e é construído da mesma forma que no presencial.</p>

                        </div>
                    </div>
                </div>
                <div className="d-flex text-center justify-content-center pb-5">
                    <button className="btn-land bg-gradient btn btn-lg btn-primary " onClick={() => (window.open('https://api.whatsapp.com/send?phone=5511978493885', "_blank"))}>Tire suas dúvidas</button>
                </div>
            </section>
        </>)
}