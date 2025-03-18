import { useEffect, useState } from 'react'
import '../styles/globals.css'
import { ObterCores } from '../services/confService';
import Script from 'next/script'
import Head from 'next/head';
import GoogleContextProvider from './src/contexts/GoogleTagContext';


export default function App({ Component, pageProps }) {
  const [cssLoad, setCssLoad] = useState(false);

  const [cores, setCores] = useState([{
    "_id": "6490e910200c2bfced25941e",
    "name": "--back-color",
    "value": "#e5d9ce"
  },
  {
    "_id": "64c83ddb8e422d967ae5bdad",
    "name": "--primary-color",
    "value": "#404435"
  },
  {
    "_id": "64c83e408e422d967ae5bdaf",
    "name": "--secondary-color",
    "value": "#9fb0c2"
  },
  {
    "_id": "64c8402c8e422d967ae5bdb7",
    "name": "--tertiary-color",
    "value": "#f0e6e4"
  },
  {
    "_id": "64c8403d8e422d967ae5bdb8",
    "name": "--atendimento-color",
    "value": "#e2d3ce"
  },
  {
    "_id": "64c840598e422d967ae5bdbc",
    "name": "--atendimento-card-color",
    "value": "#f0e6e4"
  }
  ]);

  /*   useEffect(() => {
      ObterCores().then(res => {
        if (res.data.result && res.data.result.length > 0) {
          setCores(res.data.result)
        }
      }
      ).catch(x => setCores([])).finally()
    }, []) */


  /* 
  --primary-color: #7a5535;
  --secondary-color: #b7afe5;
  --back-color: #e5d9ce;
  --tertiary-color: #404435;
  --atendimento-color: #e9e3f9;
  --atendimento-card-color: #f9f6fe;
  --titulo-primary: #987965; */



  const data = [
    { name: "--primary-color", value: "#7a5535" },
    { name: "--secondary-color", value: "#b7afe5" },
    { name: "--back-color", value: "#e5d9ce" },
    { name: "--tertiary-color", value: "#404435" },
    { name: "--atendimento-color", value: "#e9e3f9" },
    { name: "--atendimento-card-color", value: "#f9f6fe" }
  ]

  /*   useEffect(() => {
  
      if (cores.length > 0) {
        cores.forEach(x => document.documentElement.style.setProperty(x.name, x.value))
      }
  
      if (!cssLoad && cores && cores.length > 0) setCssLoad(true)
    }, [cores]) */


  return <>
    <Head>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
    </Head>
    <Script id="google-analytics" >
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
      `}

    </Script>
    {/* cssLoad &&  */cores && cores.length > 0 && <GoogleContextProvider><Component {...pageProps} /></GoogleContextProvider>}
  </>
}
