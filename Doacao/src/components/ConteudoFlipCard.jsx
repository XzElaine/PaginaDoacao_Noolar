import React from 'react';
import FlipCard from './FlipCard';

function ConteudoFlipCard() {
  return (
    <div>
    <section className="flip-card-container">
      <FlipCard frontText="Como são direcionados os recursos da minha doação?" backText="O valor ajudará a manter as funcionalidades do site garantindo que todas as páginas funcionem e, consequentemente, alcançar mais pessoas que precisam de nossa ajuda!" cardNumber="1" />
      <FlipCard frontText="Quais são as regiões que a Noolar atua no Brasil?" backText="Com R$ 20 por mês, você ajuda a fornecer materiais de primeira necessidade para nossas iniciativas e ajuda a manter todas as funcionalidade do nosso site." cardNumber="2" />
      <FlipCard frontText="Porque o mínimo da Plano Mensal é R$20 ?" backText="Atualmente, atuamos na região da Lapa, onde focamos nossos esforços e recursos para atender nosso público. No entanto, temos planos de expansão para outras áreas no futuro." cardNumber="3" />
      <FlipCard frontText="Como funciona o processo de doação?" backText="Você escolhe o valor da doação e insere suas informações de pagamento, em seguida receberá uma confirmação por e-mail, e a organização beneficiada é notificada sobre a doação." cardNumber="4" />
    </section>
    </div>
  );
}

export default ConteudoFlipCard;
