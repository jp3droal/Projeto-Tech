import { useState } from 'react'
import './main.css'
import InfoComponent from './Components/Footer/Footer';
import './Components/Footer/Footer.css'

function App() {

    const informations = [
      {
        text: "Sobre Drip Store",
        link: "/about"
      },
      {
        text: "Segurança",
        link: "/security"
      },
      {
        text: "Wishlist",
        link: "/wishlist"
      },
      {
        text: "Blog",
        link: "/blog"
      },
      {
        text: "Trabalhe conosco",
        link: "/work-with-us"
      },
      {
        text: "Meus pedidos",
        link: "/my-orders"
      },
    ];

    const Categorias = [
      {
        text: "Camisetas",
        link: "/camiseta"
      },
      {
        text: "Calças",
        link: "/calças"
      },
      {
        text: "Bonés",
        link: "/bonés"
      },
      {
        text: "Headphones",
        link: "/headphones"
      },
      {
        text: "Tênis",
        link: "/Tênis"
      }
    ]

    const Contato = [
      {
        text: "Av Santos Dumont,1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161",
        link: "/address"
      },
      {
        text: "(85) 3051-3411",
        link: "/phone"
      }
    
    ]


  return (

  
    <>







        {/* footer */}
<footer>
    <div className='footer-container'>
    <div className='footer-corpo'>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa temporibus repellendus sint dolorum unde illo blanditiis. Ducimus nesciunt placeat deserunt, sed, sequi officia totam, dolore asperiores quae voluptatibus praesentium eum?</p>
     
   

      <div className='elementos'>
        <div className='informacao'>
        <InfoComponent title="Informações" informations={informations} />
      </div>
      <div className='categorias'>
        <InfoComponent title="Categorias" informations={Categorias} />
      </div>
      <div className='contatos'>
        <InfoComponent title="Contatos" informations={Contato} />
      </div>
      </div>
     
      </div>
       <hr/>
      <div className='final'></div>
      <p>@2024 Digital College</p>
      </div>
      </footer>
    </>
  )
}

export default App
