'use client'
import { useContext } from "react"
import { GoogleContext } from "../../contexts/GoogleTagContext"


export default function CallToActionButton({ event, children, redirect = true }) {
    const { send_event, send_track } = useContext(GoogleContext)

    if (!redirect) return <div onClick={() => send_track(event)} style={{ cursor: 'pointer' }}>{children}</div>

    const message = encodeURIComponent('Olá, encontrei você pelo site e gostaria de agendar uma consulta.');


    return <div onClick={() => send_event(event, `https://wa.me/5511978493885?text=${message}`, redirect)}>{children}</div>
}