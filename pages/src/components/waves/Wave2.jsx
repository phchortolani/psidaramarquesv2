import { useEffect, useState } from "react"

export default function Wave2(props) {

    return <svg id="wave2" style={{ transform: "rotate(0deg)", transition: "0.3s" }} viewBox="0 0 1440 100"
        version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stopColor={props.color1} offset="0%"></stop>
                <stop stopColor={props.color2} offset="100%"></stop>
            </linearGradient>
        </defs>
        <path style={{ transform: "translate(0, 0px)", opacity: "1" }} fill="url(#sw-gradient-0)"
            d="M0,10L80,23.3C160,37,320,63,480,61.7C640,60,800,30,960,15C1120,0,1280,0,1440,3.3C1600,7,1760,13,1920,28.3C2080,43,2240,67,2400,66.7C2560,67,2720,43,2880,38.3C3040,33,3200,47,3360,46.7C3520,47,3680,33,3840,25C4000,17,4160,13,4320,10C4480,7,4640,3,4800,15C4960,27,5120,53,5280,63.3C5440,73,5600,67,5760,65C5920,63,6080,67,6240,56.7C6400,47,6560,23,6720,18.3C6880,13,7040,27,7200,38.3C7360,50,7520,60,7680,58.3C7840,57,8000,43,8160,45C8320,47,8480,63,8640,73.3C8800,83,8960,87,9120,78.3C9280,70,9440,50,9600,43.3C9760,37,9920,43,10080,41.7C10240,40,10400,30,10560,28.3C10720,27,10880,33,11040,40C11200,47,11360,53,11440,56.7L11520,60L11520,100L11440,100C11360,100,11200,100,11040,100C10880,100,10720,100,10560,100C10400,100,10240,100,10080,100C9920,100,9760,100,9600,100C9440,100,9280,100,9120,100C8960,100,8800,100,8640,100C8480,100,8320,100,8160,100C8000,100,7840,100,7680,100C7520,100,7360,100,7200,100C7040,100,6880,100,6720,100C6560,100,6400,100,6240,100C6080,100,5920,100,5760,100C5600,100,5440,100,5280,100C5120,100,4960,100,4800,100C4640,100,4480,100,4320,100C4160,100,4000,100,3840,100C3680,100,3520,100,3360,100C3200,100,3040,100,2880,100C2720,100,2560,100,2400,100C2240,100,2080,100,1920,100C1760,100,1600,100,1440,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        <defs>
            <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
                <stop stopColor={props.color3} offset="0%"></stop>
                <stop stopColor={props.color3} offset="100%"></stop>
            </linearGradient>
        </defs>
        <path style={{ transform: "translate(0, 50px)", opacity: "0.9" }} fill="url(#sw-gradient-1)"
            d="M0,0L80,5C160,10,320,20,480,31.7C640,43,800,57,960,51.7C1120,47,1280,23,1440,13.3C1600,3,1760,7,1920,21.7C2080,37,2240,63,2400,71.7C2560,80,2720,70,2880,63.3C3040,57,3200,53,3360,48.3C3520,43,3680,37,3840,33.3C4000,30,4160,30,4320,26.7C4480,23,4640,17,4800,16.7C4960,17,5120,23,5280,30C5440,37,5600,43,5760,45C5920,47,6080,43,6240,43.3C6400,43,6560,47,6720,50C6880,53,7040,57,7200,60C7360,63,7520,67,7680,71.7C7840,77,8000,83,8160,75C8320,67,8480,43,8640,31.7C8800,20,8960,20,9120,30C9280,40,9440,60,9600,58.3C9760,57,9920,33,10080,33.3C10240,33,10400,57,10560,66.7C10720,77,10880,73,11040,65C11200,57,11360,43,11440,36.7L11520,30L11520,100L11440,100C11360,100,11200,100,11040,100C10880,100,10720,100,10560,100C10400,100,10240,100,10080,100C9920,100,9760,100,9600,100C9440,100,9280,100,9120,100C8960,100,8800,100,8640,100C8480,100,8320,100,8160,100C8000,100,7840,100,7680,100C7520,100,7360,100,7200,100C7040,100,6880,100,6720,100C6560,100,6400,100,6240,100C6080,100,5920,100,5760,100C5600,100,5440,100,5280,100C5120,100,4960,100,4800,100C4640,100,4480,100,4320,100C4160,100,4000,100,3840,100C3680,100,3520,100,3360,100C3200,100,3040,100,2880,100C2720,100,2560,100,2400,100C2240,100,2080,100,1920,100C1760,100,1600,100,1440,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
    </svg>
}