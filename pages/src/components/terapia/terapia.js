export default function Terapia() {
    return <>
        <section id="terapia" className="pb-4">
            <div className="container">
                <div className="headerSection">
                    <h2 className="titleSection">O que a terapia pode cuidar?</h2>
                </div>
                <div className="terapiaContent">
                    <img className="w-100 pb-5" src="/terapia.png"></img>

                    <div className="text-white terapiaList">
                        <ul className="list-unstyled mb-2">
                            <li className="card card-footer  mb-2">Depressão                        </li>
                            <li className="card card-footer mb-2">Ansiedade                        </li>
                            <li className="card card-footer mb-2">Ataque de Pânico                 </li>
                            <li className="card card-footer mb-2">Dificuldade para tomar decisões  </li>
                            <li className="card card-footer mb-2" >Estresse                         </li>
                            <li className="card card-footer ">Insatisfação Profissional        </li>
                        </ul>
                        <ul className="list-unstyled mb-2">
                            <li className="card card-footer mb-2">Timidez                          </li>
                            <li className="card card-footer mb-2">Medo                             </li>
                            <li className="card card-footer mb-2">Alterações do Humor              </li>
                            <li className="card card-footer mb-2">Insegurança                      </li>
                            <li className="card card-footer mb-2">Fobia Social                     </li>
                            <li className="card card-footer mb-2 ">Dificuldades no Relacionamento   </li>


                        </ul>
                        <ul className="list-unstyled mb-2">
                            <li className="card card-footer mb-2">Angústia                         </li>
                            <li className="card card-footer mb-2">Baixa autoestima                </li>
                            <li className="card card-footer mb-2">Procrastinação                   </li>
                            <li className="card card-footer mb-2">Autocobrança                     </li>
                            <li className="card card-footer mb-2">Perfeccionismo                   </li>
                            <li className="card card-footer mb-2">Distúrbios do sono               </li>
                            <li className="card card-footer ">Conflitos de Relacionamento   </li>
                        </ul>

                    </div>

                </div>

            </div>
        </section>



    </>
}