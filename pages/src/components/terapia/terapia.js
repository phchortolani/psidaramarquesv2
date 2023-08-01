export default function Terapia(props) {

    const sintomas = <div className="text-white bgCardRoxo shadow">
        <div className="headerSectionTerapia">
            <h4 className="titleSection">Tipos de tratamento</h4>
        </div>

        <ul>
            <li>Depressão                        </li>
            <li>Ansiedade                        </li>
            <li>Ataque de Pânico                 </li>
            <li>Dificuldade para tomar decisões  </li>
            <li >Estresse                         </li>
            <li>Insatisfação Profissional        </li>
            <li>Timidez                          </li>
            <li>Medo                             </li>
            <li>Alterações do Humor              </li>
            <li>Insegurança                      </li>
            <li>Fobia Social                     </li>
            <li>Dificuldades no Relacionamento   </li>
            <li>Angústia                         </li>
            <li>Baixa autoestima                </li>
            <li>Procrastinação                   </li>
            <li>Autocobrança                     </li>
            <li>Perfeccionismo                   </li>
            <li>Distúrbios do sono               </li>
            <li>Conflitos de Relacionamento   </li>
        </ul>

    </div>

    const TCC = <div className="bgCardRoxo shadow">
        <div className="headerSectionTerapia">
            <h4 className="titleSection">Terapia Cognitivo-Comportamental</h4>
        </div>
        <div className="text-white">
            <p>A Terapia Cognitivo-Comportamental (TCC) é uma abordagem eficaz para tratar uma ampla gama de questões emocionais e psicológicas.  Aqui estão algumas indicações:                                                                                                               </p>
            <p>1. Você está buscando ajuda para gerenciar pensamentos e emoções negativas.                                                                                                                                                                                                                                                             </p>
            <p>2. Você deseja desenvolver habilidades para lidar com situações estressantes.                                                                                                                                                                                                                                                           </p>
            <p>3. Você quer mudar comportamentos e hábitos nocivos.                                                                                                                                                                                                                                                                                    </p>
            <p>4. Você tem dificuldade para alcançar metas e realizar tarefas diárias devido a pensamentos negativos ou ansiedade.                                                                                                                                                                                                                     </p>
            <p>5. Você deseja entender e mudar padrões de pensamento e comportamento que afetam sua vida.                                                                                                                                                                                                                                              </p>
            <p> Se você se reconhece em algum destes itens, a TCC pode ser uma opção valiosa para você. A TCC é uma abordagem centrada no presente e voltada para ação, que ajuda a identificar e mudar pensamentos e comportamentos negativos. Entre em contato conosco para marcar uma consulta e descobrir se a TCC é a abordagem certa para você.</p>

        </div>
    </div>

    const psi = <div className="bgCardRoxo shadow">
        <div className="headerSectionTerapia">
            <h4 className="titleSection">Psicoterapia</h4>
        </div>
        <div className="text-white">
            <p>A psicoterapia pode ajudar a resolver questões emocionais e psicológicas que afetam a qualidade de vida. Aqui estão algumas indicações para considerar:                                                                                                                                       </p>
            <p>1. Você está enfrentando problemas persistentes, como ansiedade, depressão ou dificuldades relacionais.                                                                                                                                                                                                                                         </p>
            <p>2. Você está lidando com eventos de vida difíceis, como perda, mudanças de vida significativas ou traumas.                                                                                                                                                                                                                                      </p>
            <p>3. Você tem dificuldades para lidar com as emoções e os pensamentos negativos.                                                                                                                                                                                                                                                                  </p>
            <p>4. Você tem hábitos ou comportamentos nocivos que afetam sua vida, como uso excessivo de substâncias ou alimentação desordenada.                                                                                                                                                                                                                </p>
            <p>5. Você tem dificuldade em alcançar metas ou realizar tarefas diárias.                                                                                                                                                                                                                                                                          </p>
            <p> Se você se reconhece em algum destes itens, considerar uma terapia pode ser uma opção valiosa. A psicoterapia é uma oportunidade de falar com alguém imparcial, que pode ajudá-lo a entender e resolver questões pessoais. Entre em contato comigo para marcar uma consulta e começar sua jornada de autoconhecimento e crescimento pessoal.</p>
        </div>
    </div>



    return <>
        <section id="terapia" className="p-5 d-flex  align-items-center">
            <div className="container p-3">
                <div className="headerSection">
                    <h2 className="titleSection">Como a terapia pode me ajudar?</h2>
                </div>
                <div className="bgCardTerapia d-flex flex-column gap-3 justify-content-center align-items-center shadow " style={{ fontSize: '1.1rem' }} >
                    <p>As <b className="text-primary">primeiras sessões são muito importantes</b>, pois é nesse momento que vou conhecer você e, juntas,  <b className="text-primary">definiremos seus objetivos e metas</b> com a terapia.
                        Caso haja alguma suspeita de  <b className="text-primary">psicopatologia</b>, será realizada uma  <b className="text-primary">avaliação para diagnóstico</b>, podendo ser necessário algumas sessões adicionais.</p>
                    <p>Com base nos seus objetivos e diagnóstico, o tratamento será iniciado com foco em te ajudar a identificar seus pensamentos, sentimentos e comportamentos. Faremos mudanças de hábitos com base nas suas metas e necessidades específicas.</p>
                    <p>Meu trabalho é focado em desenvolver sua flexibilidade psicológica, auxiliando no manejo de sentimentos, pensamentos e traumas, para que você possa ter uma vida com mais sentido, significado e foco no presente. Em caso de diagnóstico, <b className="text-primary">o tratamento será direcionado conforme suas necessidades específicas</b>.</p>
                    <p>A terapia é totalmente individualizada e única para cada pessoa, respeitando suas demandas e dificuldades. O sigilo das sessões é garantido, seguindo o código de ética do psicólogo.</p>
                    <p>Estou aqui para te apoiar nessa jornada de autoconhecimento e crescimento pessoal. Agende sua primeira sessão e vamos caminhar juntas rumo a uma vida mais plena e saudável!</p>
                    <div className="d-flex text-center justify-content-center mt-5">
                        <button className="btn-land bg-gradient btn btn-lg btn-primary p-4" onClick={() => (window.open('https://api.whatsapp.com/send?phone=5511978493885', "_blank"))}>Agende sua sessão</button>
                    </div>
                </div>
                {/*  <div className="terapiaContent">
                    {psi}
                    {TCC}
                    {sintomas}
                </div> */}


            </div>
        </section>



    </>
}