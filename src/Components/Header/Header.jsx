import React from "react"
import Logo from "../Logo/Logo"
import Pesquisa from "../../assets/Search.png"
import Carrinho from "../../assets/mini-cart.png"
import './Header.css'

export default function Header() {

    return (
        <header>
            <div className="headerFirst">
                <div className="headerMain">
                 <Logo/>
                    <div className="headerPesCad">
                        <div className="headerPesquisa">
                            <input type="text" placeholder="Pesquisar produto..." />
                            <img src={Pesquisa} alt="Ícone de Pesquisa" />
                        </div>
                        <a href="" className="headerCadastrar">Cadastre-se</a>
                    </div>
                </div>
                <nav className="headerNav">
                    <a href="">Home</a>
                    <a href="">Produtos</a>
                    <a href="">Categorias</a>
                    <a href="">Meus Pedidos</a>
                </nav>
            </div>
            <div className="headerSecond">
                    <a href="#">
                        <button>Entrar</button>
                    </a>
                <img src={Carrinho} alt="Ícone de Carrinho com indicador 2" />
            </div>
        </header>
    )
}