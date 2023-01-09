import { useEffect, useState } from "react"

let atendimentoTop, terapiaTop, sobreTop
export default function NavBar(props) {
    const [navPosition, setNavPosition] = useState(0)

    /*     console.log(atendimentoTop, terapiaTop, sobreTop, navPosition) */

    useEffect(() => {
        document.addEventListener("scroll", () => {

            if (!atendimentoTop) {
                atendimentoTop = parseInt(document.getElementById("Atendimento").getBoundingClientRect().top)
                terapiaTop = parseInt(document.getElementById("terapia").getBoundingClientRect().top)
                sobreTop = parseInt(document.getElementById("Sobre").getBoundingClientRect().top)
            }


            let active = "Home"



            if (window.scrollY + 200 >= atendimentoTop) {
                active = "Atendimento"
            }
            if (window.scrollY + 200 >= terapiaTop) {
                active = "Terapia"
            }
            if (window.scrollY + 200 >= sobreTop) {
                active = "Sobre"
            }
            setNavPosition({
                position: window.scrollY,
                active
            })
        })
    }, [])
    return <div id="header" className={"header navbar navbar-light navbar-default navbar-expand-lg navbar-fixed-top navbar-sm " + (navPosition.position > 100 ? "headershadow" : "")}>

        <div className="container">
            <div className="d-none d-md-block ">
                <a href="./" className="navbar-brand">
                    <img height={65} style={{ width: 'auto' }} src="/soLogo.png"></img>
                </a>
            </div>
            <div className="d-md-none">
                <a href="./" className="navbar-brand">
                    <img height={65} style={{ width: 'auto' }} src="/soLogo.png"></img>
                </a>
            </div>


            <button type="button" className="navbar-toggler collapsed border-0 " data-bs-toggle="collapse" data-bs-target="#header-navbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-center text-uppercase" id="header-navbar">
                <ul className="nav navbar-nav ">
                    <li className="nav-item">
                        <a className={"nav-link px-3 fw-bold  mx-2 " + (navPosition.active == "Home" ? "active" : "")} href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link px-3 fw-bold  mx-2 " + (navPosition.active == "Atendimento" ? "active" : "")} href="#Atendimento">Atendimento On-line</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link px-3 fw-bold  mx-2 " + (navPosition.active == "Terapia" ? "active" : "")} href="#terapia">Terapia</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link px-3 fw-bold  mx-2 " + (navPosition.active == "Sobre" ? "active" : "")} href="#Sobre">Sobre</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-3 fw-bold mx-2" href="#">Contato</a>
                    </li>
                    {/*  <li className="nav-item">
                        <a className="nav-link px-3 fw-bold mx-2" href="/Blog">Blog</a>
                    </li> */}
                </ul>
            </div>
        </div>
    </div>
}
