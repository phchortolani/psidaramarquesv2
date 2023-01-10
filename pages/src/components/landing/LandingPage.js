import Image from 'next/image'

export default function LandingPage(props) {

    return (
        <section id="homeSection" className="home container">

            <div className="landingContent ">

                <div className="titleLand">
                    <h3>
                        Como anda a sua <span className="text-primary">saúde mental</span>?
                    </h3>
                </div>
                <div className="landingImgContent p-2">
                    {!props.isMobile ? <Image
                        src="/land4.png"
                        alt="Psicóloga Dara Marques"
                        width={400}
                        height={431}
                    /> : <Image
                        src="/land4.png"
                        alt="Psicóloga Dara Marques"
                        width={340}
                        height={367}
                    />

                    }
                    {/*      <img className="landImg" src="/land4.png" /> */}
                </div>
                <div className="descLand">
                    <h4 className="text-muted">
                        Olá, sou a <b className="text-black">Dara Marques</b>, psicóloga.
                    </h4>
                    <h4 className="text-primary">
                        Vamos conversar?
                    </h4>

                    <div className="btnsLand">
                        {/*  <button className="btn btn-lg btn-primary btn-inverse px-2">Saiba Mais</button> */}
                        <button className="btn-land bg-gradient btn btn-lg btn-primary" onClick={() => (window.open('https://api.whatsapp.com/send?phone=5511978493885', "_blank"))}>Agende uma consulta</button>
                    </div>
                </div>
            </div>
        </section>
    )
}