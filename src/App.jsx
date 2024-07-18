import { useState } from 'react'
import './main.css'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import CustomCarousel from './Components/Gallery/Gallery.jsx';
import OfertaEspecial from './Components/OfertaEspecial/Oferta.jsx';
import Section from './Components/Section/Section.jsx';
import ColeçaoEmDestaque from './Components/ColeçãoEmDestaque/Coleçao.jsx';
;

function App() {

  return (
    <>
      <Gallery/>
      <Header/>
      <ColeçaoEmDestaque/>
      <OfertaEspecial/>
      <Footer/>
    </>
  )
}

export default App