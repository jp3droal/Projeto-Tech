import { useState } from 'react'
import './main.css'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import CustomCarousel from './Components/Gallery/Gallery.jsx';

function App() {

  return (
    <>
      <CustomCarousel/>
      <Header/>
      <Footer/>
    </>
  )
}

export default App