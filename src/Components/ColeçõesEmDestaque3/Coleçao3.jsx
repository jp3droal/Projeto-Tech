import Section from "../Section/Section";
import './Coleçao3.css'

export default function Colecao3() {
    return (
        <Section title='Coleções em destaque' classe='colecao3'>
            <div className="imagensColecao3">
                <div className="Col1">
                    <div className="colPromo">
                        <p>30% OFF</p>
                    </div>
                    <div className="h3Limit">
                        <h3>Novo Drop Supreme</h3>
                    </div>
                    <a href="#productMain">
                        <button>Comprar</button>
                    </a>
                </div>
                <div className="Col2">
                    <div className="colPromo">
                        <p>30% OFF</p>
                    </div>
                    <div className="h3Limit">
                        <h3>Coleção Adidas</h3>
                    </div>
                    <a href="#productMain">
                        <button>Comprar</button>
                    </a>
                </div>
                <div className="Col3">
                    <div className="colPromo">
                        <p>30% OFF</p>
                    </div>
                    <div className="h3Limit">
                        <h3>Coleção Adidas</h3>
                    </div>
                    <a href="#productMain">
                        <button>Comprar</button>
                    </a>
                </div>
            </div>
        </Section>
    )
}