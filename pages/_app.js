import { useEffect, useState } from 'react'
import '../styles/globals.css'
import { ObterCores } from '../services/confService';

export default function App({ Component, pageProps }) {
  const [cssLoad, setCssLoad] = useState(false);

  const [cores, setCores] = useState([]);

  useEffect(() => {
    ObterCores().then(res => {
      if (res.data.result && res.data.result.length > 0) {
        setCores(res.data.result)
      }
    }
    ).catch(x => setCores([])).finally()
  }, [])

  const data = [
    { name: "--primary-color", value: "#7f73d0" },
    { name: "--secondary-color", value: "#b7afe5" },
    { name: "--back-color", value: "#fff" },
    { name: "--tertiary-color", value: "#ede7fb" },
    { name: "--atendimento-color", value: "#e9e3f9" },
    { name: "--atendimento-card-color", value: "#f9f6fe" }
  ]

  useEffect(() => {

    if (cores.length > 0) {
      cores.forEach(x => document.documentElement.style.setProperty(x.name, x.value))
    }

    if (!cssLoad && cores && cores.length > 0) setCssLoad(true)
  }, [cores])
  return <>
    {cssLoad && cores && cores.length > 0 && <Component {...pageProps} />}
  </>
}
