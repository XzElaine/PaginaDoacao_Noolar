import React from 'react';
import Hero from './components/Hero';
import SecaoDoacao from './components/SecaoDoacao';
import FlipCard from './components/FlipCard';
import ConteudoFlipCard from './components/ConteudoFlipCard';
import SecaoSlogan from './components/SecaoSlogan';

function Doacao() {
  return (
    <>
      <Hero/>
      <SecaoDoacao/>
      <FlipCard/>
      <ConteudoFlipCard/>
      <SecaoSlogan/>
    </>
  );
}

export default Doacao;