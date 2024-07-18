import { useState } from 'react'
import './main.css'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery.jsx';

function App() {

  return (
    <>
      <Gallery/>
      <Header/>
      <Footer/>
    </>
  )
}

export default App