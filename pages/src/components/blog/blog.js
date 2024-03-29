import { useState, useEffect } from "react";
import Image from "next/image";
import CallToActionButton from "../buttons/callToAction";

function Blog({ data }) {
    const [dados, setDados] = useState([]);

    useEffect(() => {
        setDados(data);
    }, [data]);


    return (
        <>
            <section id="blog">
                <div className="bgBlog mx-5">
                    <div className="card rounded-5 border-0 shadow">
                        <div className="card-body">
                            <div className="headerSection">
                                <h2 className="titleSection">Últimos Posts</h2>
                            </div>
                            <div className="row">
                                {dados ? dados.filter(
                                    (element) =>
                                        element.media_type == "IMAGE" ||
                                        element.media_type == "CAROUSEL_ALBUM" ||
                                        element.media_type == "VIDEO"
                                ).map((e, i) => {
                                    const regexTitle = /(.+)((\r?\n.+)*)/gm;
                                    let title = e.caption.match(regexTitle)[0];

                                    if (i >= 3) return "";

                                    if (e.media_type == "VIDEO") {

                                        return <div className="col " key={i}> <CallToActionButton event={'clicou_post_insta' + (i + 1)} redirect={false}>
                                            <a href={e.permalink} target="_blank" rel="noopener noreferrer">
                                                <div style={{ position: "relative" }}>
                                                    <img
                                                        className="px-1 mb-2 instaPost"
                                                        width={340}
                                                        height={340}
                                                        src={e.thumbnail_url}
                                                        alt={title}
                                                        style={{ objectFit: "cover" }}
                                                    />
                                                    <i className="fa fa-play-circle fa-4x text-white drop-shadow" style={{
                                                        position: "absolute",
                                                        top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                                                        filter: 'drop-shadow(4px 7px 5px #212121)'
                                                    }}></i>

                                                </div>

                                            </a>
                                        </CallToActionButton>
                                        </div>

                                    }
                                    return (
                                        <div className="col " key={i}>
                                            <CallToActionButton event={'clicou_post_insta' + (i + 1)} redirect={false}>
                                                <a href={e.permalink} target="_blank" rel="noopener noreferrer">
                                                    <img
                                                        className="px-1 mb-2 instaPost"
                                                        width={340}
                                                        height={340}
                                                        src={e.media_url}
                                                        alt={title}
                                                        style={{ objectFit: "cover" }}
                                                    />
                                                </a>
                                            </CallToActionButton>
                                        </div>
                                    );
                                })
                                    : ""}
                            </div>

                            <div className="d-flex text-center justify-content-center mt-5">
                                <CallToActionButton event={'clicou_siga_no_instagram'} redirect={false}>
                                    <button
                                        className="btn-land bg-gradient btn btn-lg btn-primary "
                                        onClick={() =>
                                            window.open(
                                                "https://www.instagram.com/psidaramarques/",
                                                "_blank"
                                            )
                                        }
                                    >
                                        <i className="fab fa-instagram"></i>  Siga no instagram
                                    </button>
                                </CallToActionButton>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </>
    );

}

export default Blog;