import { useState } from 'react'
import './main.css'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery.jsx';
import OfertaEspecial from './Components/OfertaEspecial/Oferta.jsx';
import Section from './Components/Section/Section.jsx';
import ColeçaoEmDestaque from './Components/ColeçãoEmDestaque/Coleçao.jsx';
;

function App() {

  return (
    <>
      <Header/>
      <Gallery/>
      <ColeçaoEmDestaque/>
      <OfertaEspecial/>
      <Footer/>
    </>
  )
}

export default App