export default function Sobre() {

    return (
        <section id="Sobre" className="sobre container">
            <div className="headerSection">
                <h2 className="titleSection">Sobre</h2>
            </div>
            <div className="sobreContent  ">

                <div className="titleLand">
                </div>
                <div className="sobreImgContent p-2 text-center">
                    <img className="landImg" src="/land2.png" />
                    <cite className="text-muted pt-2 small">Dara Macedo Marques Hortolani - CRP: 06/164999</cite>
                </div>

                <div className=" sobreCards">
                    <div className="text-muted aboutText">
                        <h2 className="text-primary pb-2">Olá! Eu sou a Dara Marques</h2>
                        <p> Primeiramente gostaria de dizer que sou apaixonada pela psicologia e amo ajudar pessoas a se desenvolverem e entenderem melhor a si mesmas com a psicoterapia, e a partir disso, ir fazendo mudanças saudáveis e duradouras.</p>
                        <p> É gratificante vê-las se descobrindo, sabendo lidar de uma forma mais saudável com seus sentimentos, mudando hábitos de comportamento e tendo uma vida mais leve!   </p>
                        <p>Sou graduada em psicologia pela universidade Metodista de São Paulo, com formação em <b className="text-primary">Terapia Cognitivo-Comportamental (TCC)</b>.</p>
                        <p>Trabalho com atendimento clínico na modalidade on-line para adultos e adolescentes do <b className="text-primary">sexo feminino.</b></p>
                        <p>Espero poder te ajudar e apoiar neste processo de autoconhecimento e fortalecimento emocional.</p>

                        <b>Vamos juntos trilhar esse caminho?</b>

                        <div className="btnsLand ">
                            {/*  <button className="btn btn-lg btn-primary btn-inverse px-2">Saiba Mais</button> */}
                            <button className="btn-land btn bg-gradient btn-primary " onClick={() => (window.open('https://api.whatsapp.com/send?phone=5511978493885', "_blank"))}>Agende uma consulta</button>
                        </div>

                    </div>



                </div>
            </div>
        </section>
    )
}