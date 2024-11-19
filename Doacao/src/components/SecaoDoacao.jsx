import React from 'react';
import '../css/SecaoDoacao.css';

function SecaoDoacao() {
  return (
    <>
    <section className="containerSecaoDoacao">
      <div>
        <h2 className='tituloDoacao'>O caminho da sua doação</h2>
        <div className="caminhoDoacao">
          <div className="boxSecaoDoacao">
            <div className="box-content">
              <div className="iconSecaoDoacao"><img src="src/assets/UserIcon.png" alt="A imagem mostra o ícone padrão de um avatar ou uma silhueta de uma pessoa, com uma forma simples e minimalista, sem detalhes detalhados. É um círculo representando a cabeça, sobreposto a uma forma ovalada ou circundante que representa o corpo." /></div>
              <p>Sua doação é parte de um esforço coletivo, onde cada contribuição é valiosa e chega acompanhada de outras ações.</p>
            </div>
          </div>
          <div className="boxSecaoDoacao">
            <div className="box-content">
              <div className="iconSecaoDoacao"><img src="src/assets/HandIcon.png" alt="A imagem mostra um ícone de uma mão com a palma aberta, voltada para cima, com um coração sobre ela. O desenho é simples e simbólico, representando doação, generosidade, e cuidado. A mão aberta sugere um gesto de oferta, enquanto o coração indica que o ato é feito com amor ou intenção positiva. É comumente usado para representar caridade, apoio e solidariedade."/></div>
              <p>As doações são utilizadas para adquirir materiais essenciais e manter o funcionamento do site, permitindo que a plataforma continue crescendo e ajudando mais pessoas.</p>
            </div>
          </div>
          <div className="boxSecaoDoacao">
            <div className="box-content">
              <div className="iconSecaoDoacao"><img src="src/assets/HappyFaceIcon.png" alt="O ícone é representado por um rosto circular simples, com duas pequenas formas ovais ou circulares representando os olhos, e uma linha curva para a boca que forma um sorriso. O design é minimalista e transmite sentimentos de felicidade, alegria e positividade. A simplicidade desse ícone o torna universalmente reconhecível e frequentemente usado para expressar emoções de satisfação ou gentileza em diversas plataformas digitais e comunicações" /></div>
              <p>Juntas, as doações garantem que milhares de imigrantes tenham acesso gratuito a informações importantes, transformando vidas e apoiando comunidades.</p>
            </div>
          </div>
        </div>
      </div>
      <button className="btnDoacao"><a className="linkDoacao" href="#FormulárioDoacao">Faça sua doação aqui !</a></button>
    </section>

    <section>
        <h2 className="doadorRecorrente">Seja um doador <br />recorrente!</h2>
      
        <div className="mainCards">
            <div className="card">
                    <img className="centralizarIconDoar" src="src/assets/Donation.png" alt="A imagem mostra uma ilustração em estilo 3D de uma mão segurando uma moeda dourada com o símbolo de cifrão e inserindo-a em uma caixa de doação laranja com um coração desenhado na frente. Ao fundo, há elementos decorativos verdes que lembram folhas ou plantas, conferindo um tom natural e harmonioso à composição." />
                    <p className="estilizacao">R$ <b>20</b>/mês</p>
                    <p className="beneficios"><b>Beneficíos</b></p>
                <ul>
                    <li>Newslatters;</li>
                    <li>Relatórios mensais de <br />transparência.</li>
                </ul>
                <input type="checkbox" id="opcao1" class="checkbox"></input>
                <label for="opcao1"><a className="botaoSelecao" href="#FormulárioDoacao">Selecionar esta opção</a></label>
                </div>

                <div className="card">
                    <img className="centralizarIconDoar" src="src/assets/Donation.png" alt="A imagem mostra uma ilustração em estilo 3D de uma mão segurando uma moeda dourada com o símbolo de cifrão e inserindo-a em uma caixa de doação laranja com um coração desenhado na frente. Ao fundo, há elementos decorativos verdes que lembram folhas ou plantas, conferindo um tom natural e harmonioso à composição." />
                    <p className="estilizacao">R$ <b>40</b>/mês</p>
                    <p className="beneficios"><b>Beneficíos</b></p>
                <ul>
                    <li>Newslatters;</li>
                    <li>Relatórios Mensais de transparência;</li>
                    <li>Agradecimentos públicos;</li>
                    <li>Comunidade de Networking.</li>
                </ul>
                <input type="checkbox" id="opcao2" class="checkbox"></input>
                <label for="opcao2"><a className="botaoSelecao" href="#FormulárioDoacao">Selecionar esta opção</a></label>
            </div>
            <img className="circuloPlanos" src="src/assets/Circulo.png" alt="um círculo com um gradiente de verde-azulado, que vai de um tom mais escuro no canto superior esquerdo para um tom mais claro no canto inferior direito. O círculo apresenta elementos decorativos, como pequenos ícones em formato de X e linhas curvas suaves, que adicionam textura. Há também alguns quadrados e linhas que parecem desenhados em um estilo minimalista, dando um toque moderno e abstrato à imagem. Ela possui uma sombra suave ao redor, dando um efeito de profundidade."/>
        </div>

        
        <div className="containerOutroValor">
            <div className="card2">
            <div className='divImagem'>
            <img className="IconeMao" src="src/assets/HandIcon.png" alt="A imagem mostra um ícone de uma mão com a palma aberta, voltada para cima, com um coração sobre ela. O desenho é simples e simbólico, representando doação, generosidade, e cuidado. A mão aberta sugere um gesto de oferta, enquanto o coração indica que o ato é feito com amor ou intenção positiva. É comumente usado para representar caridade, apoio e solidariedade."/>
            </div>
            
                <div className='conteudoTexto'>
                  <p className="paragrafoBranco">Doação de outro <br />valor:</p>
                  <button className="btnLaranja"><a className='linkDoacao' href="#">Clique aqui </a></button>
                </div>
            </div>
        </div>
        <div>
            <h2 className="tituloDuvidas">Principais Dúvidas: </h2>
            <img className="circuloCard" src="src/assets/Circulo2.png" alt="um círculo com um gradiente de verde-azulado, que vai de um tom mais escuro no canto superior esquerdo para um tom mais claro no canto inferior direito. O círculo apresenta elementos decorativos, como pequenos ícones em formato de X e linhas curvas suaves, que adicionam textura. Há também alguns quadrados e linhas que parecem desenhados em um estilo minimalista, dando um toque moderno e abstrato à imagem. Ela possui uma sombra suave ao redor, dando um efeito de profundidade." width={500} height={900}/>
      </div>
    </section>
    </>
  );
}

export default SecaoDoacao;
