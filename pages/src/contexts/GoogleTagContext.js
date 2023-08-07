'use client'
import { useRouter } from "next/navigation"
import React from "react"

export const GoogleContext = React.createContext({})

export function GoogleContextProvider({ children }) {
    const router = useRouter()

    function send_event(event, url) {
        const GoogleTagAnalyticsFunction = window['gtag'];
        GoogleTagAnalyticsFunction('event', 'conversion',
            {
                send_to: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS + '/w--rCNGju80YEKyjnocq',
                event_callback: window.open(url, '_blank'),
                event_label: event
            })
    }

    return <GoogleContext.Provider value={{ send_event }}>
        {children}
    </GoogleContext.Provider>
}