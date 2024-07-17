import React from "react"
import Logo from "../Logo/Logo"
import Pesquisa from "../../assets/Search.png"
import './Header.css'

export default function Header() {

    return (
        <header>
            <div class="headerFirst">
                <div className="headerMain">
                    <Logo />
                    <div class="headerPesquisa">
                        <input type="text" placeholder="Pesquisar produto..." />
                        <img src={Pesquisa} alt="Ícone de Pesquisa" />
                    </div>
                    <a href="" class="headerCadastrar">Cadastre-se</a>
                </div>
                <nav className="headerNav">
                    <a href="">Home</a>
                    <a href="">Produtos</a>
                    <a href="">Categorias</a>
                    <a href="">Meus Pedidos</a>
                </nav>
            </div>
            <div className="headerSecond">

            </div>


        </header>
    )
}