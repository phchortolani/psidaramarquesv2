import Image from 'next/image'

export default function LandingPage(props) {
    return (
        <section id="home_Section" className="home container">

            <div className="landingContent ">

                <div className="titleLand push-left">
                    {/*   <h3>

                        Aprenda a <span className="text-primary">lidar com a ansiedade </span>  para uma vida mais leve!
                    </h3> */}
                    {/*  <h3 className='text-primary'>
                        Aprenda a <b className="titulo-primary">lidar com a ansiedade </b>  para uma vida mais leve!
                    </h3> */}
                    <h3 className='text-primary'>
                        Terapia para <b className="titulo-primary grow-in">Ansiedade</b>
                    </h3>
                    <h5 className='text-primary'>
                        Experimente um tratamento especializado e comprovado para ansiedade!
                    </h5>
                </div>
                <div className="landingImgContent p-2 fade-in grow-in">
                    {
                        props.isMobile && <Image
                            style={{ borderRadius: '100%' }}
                            className='cover '
                            src="/sobreImg.png"
                            alt="Psicóloga Dara Marques"
                            width={300}
                            height={300}
                            loading="lazy"
                        />
                    }
                    {
                        !props.isMobile && <Image
                            style={{ borderRadius: '100%' }}
                            className='cover'
                            src="/sobreImg.png"
                            alt="Psicóloga Dara Marques"
                            width={480}
                            height={480}
                            loading="lazy"
                        />
                    }

                    {/* 
                    {!props.isMobile ? <Image
                        src="/land4.png"
                        alt="Psicóloga Dara Marques"
                        width={400}
                        height={431}
                        loading="lazy"
                    /> : <Image
                        src="/land4.png"
                        alt="Psicóloga Dara Marques"
                        width={340}
                        height={367}
                        loading="lazy"
                    />

                    } */}
                    {/*      <img className="landImg" src="/land4.png" /> */}
                </div>
                <div className="descLand ">
                    {/*  <h4 className="pt-4">
                        Olá, sou a <b className="text-primary">Dara Marques</b>, psicóloga.
                    </h4> */}

                    <div className="text-primary push-up">
                        <h3> Dara Marques</h3>
                        <h6>
                            Psicóloga e Psicoterapeuta
                        </h6>
                        <h6>
                            CRP 06/164999
                        </h6>
                    </div>

                    <div className="btnsLand py-2 fade-in">
                        {/*  <button className="btn btn-lg btn-primary btn-inverse px-2">Saiba Mais</button> */}
                        <button className="btn-land bg-gradient btn btn-lg btn-primary pulse" onClick={() => (window.open('https://api.whatsapp.com/send?phone=5511978493885', "_blank"))}>Agende sua sessão</button>
                    </div>
                </div>
            </div>
        </section>
    )
}