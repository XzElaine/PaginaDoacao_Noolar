import React from 'react';
import Hero from './components/Hero';
import SecaoDoacao from './components/SecaoDoacao';
import FlipCard from './components/FlipCard';
import ConteudoFlipCard from './components/ConteudoFlipCard';

function Doacao() {
  return (
    <>
      <Hero/>
      <SecaoDoacao/>
      <FlipCard/>
      <ConteudoFlipCard/>
      
    </>
  );
}

export default Doacao;