import { useEffect, useState } from "react"
import Image from "next/image"
import { GoogleContext } from "../contexts/GoogleTagContext"
import CallToActionButton from "./buttons/callToAction"
let atendimentoTop, terapiaTop, sobreTop, perguntasTop, contatoTop
export default function NavBar(props) {
    const [navPosition, setNavPosition] = useState(0)

    /*     console.log(atendimentoTop, terapiaTop, sobreTop, navPosition) */

    useEffect(() => {
        document.addEventListener("scroll", () => {

            if (!atendimentoTop) {
                atendimentoTop = parseInt(document.getElementById("Atendimento").getBoundingClientRect().top)
                terapiaTop = parseInt(document.getElementById("terapia").getBoundingClientRect().top)
                sobreTop = parseInt(document.getElementById("Sobre").getBoundingClientRect().top)
                perguntasTop = parseInt(document.getElementById("Pergunta").getBoundingClientRect().top)
                contatoTop = parseInt(document.getElementById("Pergunta").getBoundingClientRect().top)
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
            if (window.scrollY + 200 >= perguntasTop) {
                active = "Pergunta"
            }
            if (window.scrollY + 200 >= contatoTop) {
                active = "Contato"
            }
            setNavPosition({
                position: window.scrollY,
                active
            })
        })
    }, [])
    return <>

        <div id="header" className={"header grow-in navbar navbar-light navbar-default navbar-expand-lg navbar-fixed-top navbar-sm " + (navPosition.position > 100 ? "headershadow" : "")}>

            <div className="container">
                {/*    <div className="d-none d-md-block ">
        <a href="./" className="navbar-brand">
            <img height={65} style={{ width: 'auto' }} src="/soLogo.png"></img>
        </a>
    </div> */}
                <div className="flex">
                    <div>
                        <a href="./" className="navbar-brand">
                            {/*  <img height={65} style={{ width: 'auto' }} src="/soLogo.png"></img> */}
                            <Image
                                src="/soLogo3.png"
                                alt="Logo Dara Marques"
                                width={72}
                                height={50}
                                className={"logoImg " + (navPosition.position > 100 ? "rolldown" : "")}
                            />

                        </a>
                    </div>

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
                            <a className={"nav-link px-3 fw-bold  mx-2 " + (navPosition.active == "Contato" ? "active" : "")} href="#Contato">Contato</a>
                        </li>
                        {/*   <li className="nav-item">
                <a className={"nav-link px-3 fw-bold  mx-2 " + (navPosition.active == "Pergunta" ? "active" : "")} href="#Pergunta">Perguntas</a>
            </li> */}
                        {/*  <li className="nav-item">
                <a className="nav-link px-3 fw-bold mx-2" href="/Blog">Blog</a>
            </li> */}
                    </ul>
                </div>
            </div>
        </div>

        {navPosition.position > 100 && <CallToActionButton event={'conversion_btn_whatsapp'}>
            <span className="fade-in " target="_blank" rel="noopener noreferrer" style={{ position: 'fixed', bottom: '20px', right: '30px', zIndex: '9999', cursor: 'pointer' }}>
                <div className='whats shadow pulse'>
                    <i className="fab fa-whatsapp fa-3x text-white"></i>
                </div>
            </span>
        </CallToActionButton>}

    </>
}

