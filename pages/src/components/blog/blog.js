import { useState, useEffect } from "react";
import Image from "next/image";

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

                                        return <div key={i} className="col "><a href={e.permalink} target="_blank" rel="noopener noreferrer">
                                            <Image
                                                className="px-1 mb-2 instaPost"
                                                width={340}
                                                height={340}
                                                src={e.thumbnail_url}
                                                alt={title}
                                                style={{ objectFit: "cover" }}
                                            />
                                            {/*                    <video width={380} height={380} controls controlsList="nodownload" poster={e.thumbnail_url} className="d-block w-100 shadow-sm" src={e.media_url} alt={e.titulo} /> */}
                                        </a> </div>
                                    }
                                    return (
                                        <div key={i} className="col "><a href={e.permalink} target="_blank" rel="noopener noreferrer">
                                            <Image
                                                className="px-1 mb-2 instaPost"
                                                width={340}
                                                height={340}
                                                src={e.media_url}
                                                alt={title}
                                                style={{ objectFit: "cover" }}
                                            />
                                        </a></div>
                                    );
                                })
                                    : ""}
                            </div>

                            <div className="d-flex text-center justify-content-center mt-5">
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default Blog;