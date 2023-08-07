'use client'
import Image from 'next/image'
import { useRouter } from "next/navigation"
import CallToActionButton from '../buttons/callToAction';

export default function LandingPage(props) {
    const router = useRouter()
    function send_event(event, url) {
        const GoogleTagAnalyticsFunction = window['gtag'];

        GoogleTagAnalyticsFunction('event', 'conversion',
            {
                send_to: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS + '/zuxBCNiBss8DEJWRxtso',
                event_callback: router.push(url),
                event_label: event
            })
    }

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
                        A  <b className="titulo-primary">ansiedade</b> não precisa dominar a sua vida
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

                    <div className="btnsLand fade-in">
                        <CallToActionButton event={'click_landingPage'}>
                            <button className="btn-land bg-gradient btn btn-lg btn-primary pulse">Agende sua sessão</button>
                        </CallToActionButton>

                        {/*                         <button className="btn btn-lg btn-primary btn-inverse">Saiba Mais</button>
 */}                    </div>
                </div>
            </div>
        </section>
    )
}