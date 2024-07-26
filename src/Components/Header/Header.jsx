import React from "react"
import { useState } from 'react';
import Logo from "../Logo/Logo"
import Pesquisa from "../../assets/Search.png"
import Carrinho from "../../assets/mini-cart.png"
import './Header.css'

export default function Header({posicao}) {
    const [activeIndex, setActiveIndex] = useState(posicao);

    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    return (
        <header>
            <div className="headerFirst">
                <div className="headerMain">
                    <Logo />
                    <div className="headerPesCad">
                        <div className="headerPesquisa">
                            <input type="text" placeholder="Pesquisar produto..." />
                            <img src={Pesquisa} alt="Ícone de Pesquisa" />
                        </div>
                        <a href="" className="headerCadastrar">Cadastre-se</a>
                    </div>
                </div>
                <nav className="headerNav">
                    <a href="/" className={activeIndex === 0 ? 'active' : ''} onClick={() => handleSelect(0)}>
                        Home
                    </a>
                    <a href="/ProductListingPage" className={activeIndex === 1 ? 'active' : ''} onClick={() => handleSelect(1)}>
                        Produtos
                    </a>
                    <a href="" className={activeIndex === 2 ? 'active' : ''} onClick={() => handleSelect(2)}>
                        Categorias
                    </a>
                    <a href="" className={activeIndex === 3 ? 'active' : ''} onClick={() => handleSelect(3)}>
                        Meus Pedidos
                    </a>
                </nav>
            </div>
            <div className="headerSecond">
                <a href="">
                    <button>Entrar</button>
                </a>
                <img src={Carrinho} alt="Ícone de Carrinho com indicador 2" />
            </div>
        </header>
    )
}