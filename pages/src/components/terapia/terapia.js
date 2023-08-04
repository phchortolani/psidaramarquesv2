import { useState } from 'react';
import ReactPlayer from 'react-player';

export default function Terapia(props) {

    const [showVideo, setShowVideo] = useState(false)

    return <section id="terapia" className="align-items-center">
        <div className="headerSection">
            <h2 className="titleSection">Como funciona a terapia?</h2>
        </div>
        <div className='container'>
            <div className='d-flex justify-content-center align-items-center' >
                {
                    !showVideo ? <div onClick={() => setShowVideo(!showVideo)} style={{ position: "relative", maxWidth: '800px' }}>
                        <img
                            className="px-1 mb-2 instaPost"
                            src={'/thumb.jpg'}
                            width={'100%'}
                            alt={'como funciona a terapia?'}
                            style={{ objectFit: "cover" }}
                        />
                        <i className="fa fa-play-circle fa-4x text-white drop-shadow" style={{
                            position: "absolute",
                            top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                            filter: 'drop-shadow(4px 7px 5px #212121)'
                        }}></i>

                    </div> : <iframe width="560" height="315" src="https://www.youtube.com/embed/ROureOTjP_s?autoplay=1" title="Como funciona a terapia" frameborder="0" allow=" autoplay; encrypted-media; gyroscope;" allowfullscreen></iframe>

                }


            </div>



        </div>
    </section>
}