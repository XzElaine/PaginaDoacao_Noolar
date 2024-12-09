import React from "react";
import '../css/hero.css';

function Hero() {
    return (
        <>
        <div className="containerHeroDoacao">
            <section>
                <h1 className="introducaoDoacao"><b>Porque fazer uma doação ?</b></h1>
                <div>
                    <img className="imagemDonar" src="src/assets/ImgDonar.png" alt="Uma mão segurando dois corações rosas, posicionada sobre uma caixa de doação marrom com uma etiqueta azul escura onde está escrito 'Donar' em letras amarelas. Um aviãozinho de papel azul claro com uma linha pontilhada está desenhado abaixo, indicando movimento ou envio." />
                </div>
            </section>
        </div>
        <div>
            <div className="retanguloMotivo1">
                <p className="motivoDoacao">Ajude a construir pontes <br />para um <span className="textoLaranja">futuro melhor!</span></p>
            </div>
            <div class="retanguloMotivo2">
                <p className="motivoDoacao">Seu gesto faz <span className="textoVerde">diferença!</span></p>
            </div>
            <div class="retanguloMotivo3">
                <p className="motivoDoacao">Seja parte da <span className="textoLaranja">mudança</span></p>
            </div>
        </div>
        </>
    );
}

export default Hero; 