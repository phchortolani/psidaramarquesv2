'use client'
import { useContext } from "react"
import { GoogleContext } from "../../contexts/GoogleTagContext"

export default function CallToActionButton({ event, children }) {
    const { send_event } = useContext(GoogleContext)
    return <div onClick={() => send_event(event, 'https://wa.me/5511978493885')}>{children}</div>
}