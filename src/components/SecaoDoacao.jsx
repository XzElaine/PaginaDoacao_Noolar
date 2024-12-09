import React from "react";
import "../css/secaoDoacao.css";

import UserIcon from '/UserIcon.png';
import HandIcon from '/HandIcon.png';
import HappyFaceIcon from '/HappyFaceIcon.png';
import Donation from '/Donation.png';
import Circulo from '/Circulo.png';
import Circulo2 from '/Circulo2.png';

function SecaoDoacao() {
  return (
    <>
      <section className="containerSecaoDoacao">
        <div>
          <h2 className="tituloDoacao">O caminho da sua doação</h2>
          <div className="caminhoDoacao">
            <div className="boxSecaoDoacao">
              <div className="box-content">
                <div className="iconSecaoDoacao">
                  <img
                    src={UserIcon}
                    alt="A imagem mostra o ícone padrão de um avatar ou uma silhueta de uma pessoa, com uma forma simples e minimalista, sem detalhes detalhados. É um círculo representando a cabeça, sobreposto a uma forma ovalada ou circundante que representa o corpo."
                  />
                </div>
                <p>
                  Sua doação é parte de um esforço coletivo, onde cada
                  contribuição é valiosa e chega acompanhada de outras ações.
                </p>
              </div>
            </div>
            <div className="boxSecaoDoacao">
              <div className="box-content">
                <div className="iconSecaoDoacao">
                  <img
                    src={HandIcon}
                    alt="A imagem mostra um ícone de uma mão com a palma aberta, voltada para cima, com um coração sobre ela. O desenho é simples e simbólico, representando doação, generosidade, e cuidado."
                  />
                </div>
                <p>
                  As doações são utilizadas para adquirir materiais essenciais e
                  manter o funcionamento do site, permitindo que a plataforma
                  continue crescendo e ajudando mais pessoas.
                </p>
              </div>
            </div>
            <div className="boxSecaoDoacao">
              <div className="box-content">
                <div className="iconSecaoDoacao">
                  <img
                    src={HappyFaceIcon}
                    alt="O ícone é representado por um rosto circular simples, com duas pequenas formas ovais ou circulares representando os olhos, e uma linha curva para a boca que forma um sorriso."
                  />
                </div>
                <p>
                  Juntas, as doações garantem que milhares de imigrantes tenham
                  acesso gratuito a informações importantes, transformando vidas
                  e apoiando comunidades.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="btnDoacao">
          <a className="linkDoacao" href="#FormulárioDoacao">
            Faça sua doação aqui!
          </a>
        </button>
      </section>

      <section>
        <h2 className="doadorRecorrente">Seja um doador <br />recorrente!</h2>

        <div className="mainCards">
          <div className="card">
            <img
              className="centralizarIconDoar"
              src={Donation}
              alt="A imagem mostra uma ilustração em estilo 3D de uma mão segurando uma moeda dourada com o símbolo de cifrão e inserindo-a em uma caixa de doação laranja com um coração desenhado na frente."
            />
            <p className="estilizacao">
              R$ <b>20</b>/mês
            </p>
            <p className="beneficios">
              <b>Benefícios</b>
            </p>
            <ul className="listaSecaoDoacao">
              <li className="listaBeneficios">Newsletters;</li>
              <li className="listaBeneficios">Relatórios mensais de transparência.</li>
            </ul>
            <input
              type="checkbox"
              id="opcao1"
              className="checkboxSecaoDoacao"
            />
            <label htmlFor="opcao1">
              <a className="botaoSelecao" href="#FormulárioDoacao">
                Selecionar esta opção
              </a>
            </label>
          </div>

          <div className="card">
            <img
              className="centralizarIconDoar"
              src={Donation}
              alt="A imagem mostra uma ilustração em estilo 3D de uma mão segurando uma moeda dourada com o símbolo de cifrão e inserindo-a em uma caixa de doação laranja com um coração desenhado na frente."
            />
            <p className="estilizacao">
              R$ <b>40</b>/mês
            </p>
            <p className="beneficios">
              <b>Benefícios</b>
            </p>
            <ul className="listaSecaoDoacao">
              <li className="listaBeneficios">Newsletters;</li>
              <li className="listaBeneficios">Relatórios Mensais de transparência;</li>
              <li className="listaBeneficios">Agradecimentos públicos;</li>
              <li className="listaBeneficios">Comunidade de Networking.</li>
            </ul>
            <input
              type="checkbox"
              id="opcao2"
              className="checkboxSecaoDoacao"
            />
            <label htmlFor="opcao2">
              <a className="botaoSelecao" href="#FormulárioDoacao">
                Selecionar esta opção
              </a>
            </label>
          </div>
          <img
            className="circuloPlanos"
            src={Circulo}
            alt="Um círculo com um gradiente de verde-azulado, que vai de um tom mais escuro no canto superior esquerdo para um tom mais claro no canto inferior direito."
          />
        </div>

        <div className="containerOutroValor">
          <div className="card2">
            <div className="divImagem">
              <img
                className="IconeMao"
                src={HandIcon}
                alt="A imagem mostra um ícone de uma mão com a palma aberta, voltada para cima."
              />
            </div>

            <div className="conteudoTexto">
              <p className="paragrafoBranco">Doação de outro <br />valor:</p>
              <button className="btnLaranja">
                <a className="linkDoacao" href="#">
                  Clique aqui
                </a>
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="tituloDuvidas">Principais Dúvidas: </h2>
          <img
            className="circuloCard"
            src={Circulo2}
            alt="Um círculo com um gradiente de verde-azulado."
            width={500}
            height={900}
          />
        </div>
      </section>
    </>
  );
}

export default SecaoDoacao;
