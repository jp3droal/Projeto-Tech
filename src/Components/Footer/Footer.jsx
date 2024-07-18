import React from 'react';
import InfoComponent from './InfoComponent';
import './Footer.css'
import Logo from '../Logo/Logo';
import Facebook from '../../assets/Facebook.svg'
import Instagram from '../../assets/Instagram.svg'
import Twitter from '../../assets/Twitter.svg'
import LogoFooter from '../Logo/LogoFooter';

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

export default function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-corpo'>
          <div className='primeira-parte'>
            <LogoFooter />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores earum facilis error quis? Quo rem enim corporis.</p>
            <div className='redes-sociais'>
              <a href="#"><img src={Facebook} alt="Facebook" /></a>
              <a href="#"><img src={Instagram} alt="Instagram" /></a>
              <a href="#"><img src={Twitter} alt="Twitter" /></a>
            </div>
          </div>


          <div className='elementos'>
            <div className='informacao'>
              <InfoComponent title="Informação" informations={informations} />
            </div>
            <div className='categorias'>
              <InfoComponent title="Categorias" informations={Categorias} />
            </div>
            <div className='contatos'>
              <InfoComponent title="Contato" informations={Contato} />
            </div>
          </div>

        </div>
        <div className='hr'>
          <hr />
        </div>
        <div className='final'>
          <p>@2024 Digital College</p>
        </div>
      </div>
    </footer>
  )
}





