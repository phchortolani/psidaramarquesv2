import HTMLReactParser from 'html-react-parser'

export default function PerguntasFrequentes() {
    const peguntas = [
        {
            pergunta: "Quanto tempo dura uma sessão?",
            resposta: "Dura em torno de 50 minutos a 1 hora."
        },
        {
            pergunta: "Quanto tempo dura o tratamento?",
            resposta: "Não há uma resposta única, porque depende de diversos fatores. Irei avaliar junto ao paciente os motivos que o levaram a buscar a psicoterapia, quais são os seus objetivos com o tratamento e quais questões serão trabalhadas sessão a sessão.  Quando a psicóloga e o paciente perceber que a psicoterapia já trouxe os benefícios que o paciente desejava, ambos poderão tomar uma decisão conjunta sobre o encerramento do processo. É importante ressaltar que uma profissional ética nunca irá prolongar o tratamento do paciente mais do que o necessário."
        },
        {
            pergunta: "Qual o valor da consulta?",
            resposta: "Entre em contato para saber mais sobre valores e formas de pagamento."
        },
        {
            pergunta: "Qual público atende?",
            resposta: "Atendo adultos e adolescentes do público feminino."
        },
        {
            pergunta: "Você atende por convênio?",
            resposta: "Não atendo por convênio. Meus atendimentos são particulares. Mas ofereço recibo para que você consiga o reembolso. Entre em contato com seu convênio para saber se você tem essa opção."
        },
        {
            pergunta: "Será que a abordagem Terapia Cognitivo-Comportamental serve para mim?",
            resposta: "É uma abordagem clara e direta. É utilizada para tratar diversos transtornos  mentais de forma eficiente. Identificar padrões de comportamento, pensamento, crenças. Se destina para vários  transtornos desde alimentares, fobias, traumas depressão, ansiedade."
        },
        {
            pergunta: "Como funciona a terapia on-line?",
            resposta: "<p>Os atendimentos psicológicos são feito por vídeo chamada, onde conversaremos da mesma forma como se estivéssemos juntos no consultório. Você precisará ter um celular, tablet ou computador com câmera; internet com boa velocidade e fones de ouvido com microfone. E para que o sigilo das sessões não seja comprometido, você deverá escolher um espaço fechado e tranquilo, para que se sinta mais confortável e seguro em compartilhar suas informações comigo.</p>" +
                "<p>Plataformas utilizadas para o atendimento: <b>ZOOM</b>, <b>Google Meet</b> e <b>WhatsApp</b>.</p>"
        },
        {
            pergunta: "Como faço para agendar uma consulta?",
            resposta: "<p> 1. Entre em contato comigo por WhatsApp; </p>" +
                "<p> 2. Escolha o melhor horário para ser atendido; </p>" +
                "<p> 3. Faça o pagamento da sessão (Cartão, Transferência ou PIX); </p>" +
                "<p>4. No momento da consulta, certifique-se que está com um bom sinal de internet e aguarde ser atendido.</p>"
        },
        {
            pergunta: "Como saber se preciso de psicoterapia? ",
            resposta: "<p>Gosto de dividir essa pergunta em 3 grupos, sendo eles: </p>" +
                "<p> - Pessoas que tem um diagnóstico de um transtorno mental e que automaticamente necessita de um tratamento e acompanhamento psicológico. Como depressão, transtornos de ansiedade e etc... </p>" +
                "<p> - Pessoas que não tem um diagnóstico de transtorno mental, mas apresenta questões pontuais, como dificuldade para tomar decisões, dificuldade para lidar com alguma área específica da vida, dificuldade para lidar com seus sentimentos e pensamentos e necessita da ajuda de um profissional. </p>" +
                "<p> - Outras pessoas se motivam a procurar pela terapia mesmo sem identificar um problema específico,  seja apenas pela busca do autoconhecimento e etc... </p>"
        }
    ]

    return (
        <section id="Pergunta" className="pergunta ">
            <div className='container'>
                <div className="headerSection">
                    <h2 className="titleSection text-white">Perguntas Frequentes</h2>
                </div>
                <div className="perguntasContent pb-4">
                    <div className="accordion" id="acPerguntas">
                        {peguntas.map((e, i) => {
                            return <div key={i} className="accordion-item">
                                <h2 className="accordion-header" id={"flush-heading" + (i)}>
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse" + (i)} aria-expanded="false" aria-controls={"flush-collapse" + (i)}>
                                        {HTMLReactParser("<span class='text-white'>" + e.pergunta + "</span>")}
                                    </button>
                                </h2>
                                <div id={"flush-collapse" + (i)} className="accordion-collapse collapse" aria-labelledby={"flush-heading" + (i)} data-bs-parent="#acPerguntas">
                                    <div className="accordion-body"> {HTMLReactParser(e.resposta)}</div>
                                </div>
                            </div>
                        })}

                    </div>
                </div>
            </div>

        </section>
    )
}