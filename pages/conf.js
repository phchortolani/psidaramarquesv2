
import { useEffect, useState } from "react"
import { ObterCores, SalvarCores } from "../services/confService"

function Conf() {

  const [cores, setCores] = useState([]);


  useEffect(() => {
    ObterCores().then(res => {
      if (res.data.result && res.data.result.length > 0) {
        setCores(res.data.result)
      }
    }
    ).catch(x => setCores([])).finally()
  }, [])


  const data2 = [
    { name: "--primary-color", value: "#7f73d0" },
    { name: "--secondary-color", value: "#b7afe5" },
    { name: "--back-color", value: "#ffffff" },
    { name: "--footer-color", value: "#ede7fb" },
    { name: "--atendimento-color", value: "#e9e3f9" },
    { name: "--atendimento-card-color", value: "#f9f6fe" }
  ]

  function SaveColor(name, value) {
    SalvarCores({ name, value })
  }

  return <div style={{ display: "flex", flexDirection: 'row', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ display: "flex", flexDirection: 'column', gap: '1rem' }}>
      {cores && cores?.map((x, i) => {
        return <div
          key={x.name}

          onBlur={(e => SaveColor(x.name, e.target.value))}
          style={{
            display: "flex",
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}>{x.name}: <input type="color" defaultValue={x.value}></input></div>
      })}

    </div>
  </div >
}

export default Conf;