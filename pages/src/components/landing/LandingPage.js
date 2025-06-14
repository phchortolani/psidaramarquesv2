import Image from 'next/image'
import CallToActionButton from '../buttons/callToAction';
import Link from 'next/link'
import { useEffect } from 'react'
export default function LandingPage(props) {


    return (
        <section id="home_Section" className="home container">

            <div className="landingContent ">
                <div className="titleLand push-left">
                    <h3 className='text-primary'>
                        <b className="titulo-primary"> Uma  vida mais leve e </b>  <b className="titulo-primary">equilibrada</b>
                        {/*   Terapia on-line para <b className="titulo-primary">ansiedade</b> */}
                    </h3>
                    <h5 className='text-primary '>
                        Tenha uma terapia on-line personalizada para o seu bem-estar
                    </h5>
                </div>
                <div className="landingImgContent p-2 fade-in grow-in">
                    {
                        props.isMobile && <Image
                            style={{ borderRadius: '100%' }}
                            className='cover '
                            src="/psi3.png"
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
                            src="/psi3.png"
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
                            Psicóloga e Psicoterapeuta online
                        </h6>
                        <h6>
                            CRP 06/164999
                        </h6>
                    </div>
                    <div className="btnsLand fade-in">
                        <CallToActionButton event={'conversion_landingPage'}>
                            <button className="btn-land bg-gradient btn btn-lg btn-primary pulse">Agende sua Sessão Online</button>
                        </CallToActionButton>
                        {/*     <Link href="/agendamento">
                            <button className="btn-land bg-gradient btn btn-lg btn-primary pulse">Agende sua Sessão Online</button>
                        </Link> */}
                        {/*                         <button className="btn btn-lg btn-primary btn-inverse">Saiba Mais</button>
 */}                    </div>
                </div>
            </div>
        </section>
    )
}