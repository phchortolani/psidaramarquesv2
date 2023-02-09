import Head from 'next/head'
import Navbar from './src/components/NavBar'
import LandingPage from './src/components/landing/LandingPage'
import AtendimentoOnline from './src/components/atendimento/atendimento'
import Terapia from './src/components/terapia/terapia'
import Sobre from './src/components/sobre/sobre'
import Pergunta from './src/components/pergunta/pergunta'
import Blog from './src/components/blog/blog'
import { useEffect, useState } from 'react'


export async function getStaticProps(context) {
  let url = "https://graph.instagram.com/me/media?access_token=" +
    process.env.INSTA_TOKEN +
    "&fields=media_url,media_type,caption,permalink,timestamp,thumbnail_url,id,username,children{media_url}&limit=8";

  const res = await fetch(url);
  const json = await res.json();

  return {
    props: {
      data: json.data,
    },
    revalidate: 60, /* In seconds */

  }
}

export default function Home({ data }) {
  const [isMobile, setIsMobile] = useState()
  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 600px)").matches)
  }, [])

  return (
    <>
      <Head>
        <title>Psicóloga Online | Dara Marques</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <LandingPage isMobile={isMobile} />
      <img src="/wave2.svg" />
      <AtendimentoOnline isMobile={isMobile} />
      <img className="wave1Back" src="/wave1.svg" />
      <Terapia isMobile={isMobile} />
      <img src="/wave3.svg" />
      <Sobre isMobile={isMobile} />
      <Pergunta isMobile={isMobile} />
      <Blog data={data} />


   {/*    <a href="https://wa.me/message/OQPASIZH7O75G1" target="_blank" rel="noopener noreferrer" style={{ position: 'fixed', bottom: '20px', right: '30px', zIndex: '9999' }}>
        <div className=' whats shadow'>
          <i className="fab fa-whatsapp fa-3x text-white"></i>
        </div>
      </a> */}

      <section id="Contato">
        <div id="footer" className="footer">
          <div className="container">
            <div className="d-flex justify-content-around">
              <div>
                <h3 className='text-primary'><b>Informações</b></h3>
                <ul style={{ listStyle: "none" }} className='p-1'>
                  <li className='mb-2'>
                    <span>
                      <i aria-hidden="true" className="fas fa-mobile-alt"></i>
                      <b> +55 (11) 97849-3885</b>
                    </span>
                  </li>
                  <li className='mb-2'>
                    <a href="https://www.instagram.com/psidaramarques/" target="_blank" rel="noopener noreferrer">
                      <span>
                        <i aria-hidden="true" className="fab fa-instagram"></i>
                      </span>
                      <b> @psidaramarques</b>
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href="https://www.facebook.com/psidaramarques" target="_blank" rel="noopener noreferrer">
                      <span >
                        <i aria-hidden="true" className="fab fa-facebook-square"></i></span>
                      <b> @psidaramarques</b>
                    </a>
                  </li>
                  <li className='mb-2'>
                    <span>
                      <i aria-hidden="true" className="far fa-envelope"></i>
                    </span>
                    <b> psi.daramarques@gmail.com</b>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="mt-0 mb-0"></hr>
      <div className="py-1" style={{ color: "black", textAlign: "center", background: "#ede7fb" }}>
        <span className="text-muted small">
          <span className="text-center text-muted ">
            Powered by<br /><a href="https://lanisystems.vercel.app" target="_blank" rel="noopener noreferrer"> <img src="/lani-5andar1.svg" width={100}></img></a>
          </span>
        </span>
      </div>

      {/*   <footer className="pb-2 mb-2" style={{ background: "#d0b3b5", color: "black", textAlign: "center" }}>
                    <hr className="mt-0"></hr>
                    <span className="text-muted small">
                        Powered by{' '} 
                        <a target={'_blank'} href="https://lanisystems.vercel.app"><img width={110} src='./lani-5andar2.svg'></img></a>
                    </span>
                </footer> */}
    </>
  )
}
