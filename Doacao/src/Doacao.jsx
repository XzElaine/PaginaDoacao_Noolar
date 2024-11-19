import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SecaoDoacao from './components/SecaoDoacao'
import FlipCard from './components/FlipCard';
import ConteudoFlipCard from './components/ConteudoFlipCard';
import SectionSlogan from './components/SectionSlogan';
import Footer from './components/Footer';


function Doacao() {
  return (
    <>
      {/* <Navbar/>*/}
      <Hero/>
      <SecaoDoacao/>
      <FlipCard/>
      <ConteudoFlipCard/>
      <SectionSlogan/>
      {/* <Footer/> */}
    </>
  );
}

export default Doacao;