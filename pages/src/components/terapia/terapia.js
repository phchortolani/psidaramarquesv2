import ReactPlayer from 'react-player';

export default function Terapia(props) {
    return <section id="terapia" className="align-items-center ">
        <div className="headerSection">
            <h2 className="titleSection">Como a terapia pode te ajudar?</h2>
        </div>
        <div>
            {
                props.isMobile ? <ReactPlayer
                    url={'https://youtu.be/ROureOTjP_s'}
                    controls={true}
                    width={'100%'}
                    height={'100%'}
                /> :
                    <ReactPlayer
                        url={'https://youtu.be/ROureOTjP_s'}
                        controls={true}

                    />
            }

        </div>
    </section>
}