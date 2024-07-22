import './main.css'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery.jsx';
import OfertaEspecial from './Components/OfertaEspecial/Oferta.jsx';
import Section from './Components/Section/Section.jsx';
import ColeçaoEmDestaque from './Components/ColeçãoEmDestaque/Coleçao.jsx';
import ProductCard from './Components/ProductCard/ProductCard.jsx';
import ProductListing from './Components/ProductListing/ProductListing.jsx';
import FilterGroup from './pages/ProductListingPage/FilterGroup.jsx';

function App() {

  return (
    <>

      <FilterGroup/>



      <Header/>
      <Gallery/>
      <ColeçaoEmDestaque/> 
      <ProductCard/>
      <ProductListing/>
      <OfertaEspecial/>
      <Footer/>
    </>
  )
}

export default App