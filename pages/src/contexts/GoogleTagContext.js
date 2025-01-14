'use client'
import React from "react"
import { SalvarAgendamento } from "../../../services/confService"

export const GoogleContext = React.createContext({})

export default function GoogleContextProvider({ children }) {
    const GoogleTagAnalyticsFunction = window['gtag'];

    async function send_event(event, url) {
        await SalvarAgendamento()
        GoogleTagAnalyticsFunction('event', event,
            {
                send_to: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS + '/w--rCNGju80YEKyjnocq',
                event_callback: window.open(url, '_blank'),
                event_label: event
            })
        GoogleTagAnalyticsFunction('event', 'conversion', {
            send_to: process.env.NEXT_PUBLIC_GOOGLE_ADS + '/aS_8CIaE2c4YEJWRxtso'
        });
    }

    function send_track(event) {
        GoogleTagAnalyticsFunction('event', event,
            {
                send_to: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS + '/w--rCNGju80YEKyjnocq',
                event_label: event
            })
    }

    return <GoogleContext.Provider value={{ send_event, send_track }}>
        {children}
    </GoogleContext.Provider>
}