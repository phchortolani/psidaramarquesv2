import CallToActionButton from "../buttons/callToAction";

export default function Sobre(props) {

    return (
        <section id="Sobre" className="sobre container">
            <div className="headerSection">
                <h2 className="titleSection">Sobre mim</h2>
            </div>
            <div className="sobreContent  ">

                <div className="titleLand">
                </div>
                <div className="sobreImgContent p-2 text-center">
                    {/*       <img className="landImg" src="/land2.png" /> */}
                    {/*     {!props.isMobile ? <Image
                        src="/sobreImg.png"
                        alt="Psicóloga Dara Marques"
                        width={400}
                        height={431}
                    /> : <Image
                        src="/sobreImg.png"
                        alt="Psicóloga Dara Marques"
                        width={340}
                        height={367}
                    />
                    } */}
                    <img className="sobreImg" alt="Psicóloga Dara Marques" src="/land3.jpg"></img>
                    {/*   <cite className="text-muted pt-4 small">Dara Macedo Marques Hortolani - CRP 06/164999</cite> */}
                </div>

                <div className=" sobreCards">
                    <div className="text-muted aboutText">
                        <h5>
                            <b className="text-primary ">Dara Macedo Marques Hortolani <b className="text-muted pt-4 small">- CRP 06/164999</b></b>
                        </h5>
                        <br></br>
                        <p>Olá, me chamo Dara e primeiramente gostaria de dizer que sou apaixonada pela psicologia e amo ajudar pessoas a se desenvolverem e entenderem melhor a si mesmas com a psicoterapia, e a partir disso, ir fazendo mudanças saudáveis e duradouras.</p>
                        <p> É gratificante vê-las se descobrindo, sabendo lidar de uma forma mais saudável com seus sentimentos, mudando hábitos de comportamento e tendo uma vida mais leve!   </p>
                        <p>Sou graduada em psicologia pela universidade Metodista de São Paulo, com formação em <b className="text-primary">Terapia Cognitivo-Comportamental (TCC)</b>.</p>
                        <p>Trabalho com atendimento clínico na modalidade on-line para adultos e adolescentes do <b className="text-primary">sexo feminino.</b></p>
                        <p>Espero poder te ajudar e apoiar neste processo de autoconhecimento e fortalecimento emocional.</p>
                        <b>Vamos juntos trilhar esse caminho?</b>
                        <div className="btnsLand ">
                            {/*  <button className="btn btn-lg btn-primary btn-inverse px-2">Saiba Mais</button> */}
                            <CallToActionButton event={'conversion_sobre_mim'}>
                                <button className="btn-land btn bg-gradient btn-primary " >Agende sua sessão</button>
                            </CallToActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}