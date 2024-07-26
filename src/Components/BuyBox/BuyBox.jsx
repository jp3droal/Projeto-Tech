import './BuyBox.css'
import Estrela from '../../assets/Stars.png'
import Estrela1 from '../../assets/Star1.png'
import ProductOptionsSquare from '../ProductOptions/ProductOptionsSquare'
import ProductOptionsCircle from '../ProductOptions/ProductOptionsCircle'

export default function BuyBox() {
    return (
        <div className='buyBoxMain'>
            <h3 className='buyBoxH3'>Tênis Nike Revolution <br/> 6 Next Nature Masculino</h3>
            <p className='buyBoxP'>Casual | Nike | REF:38416711</p>
            <div className='buyBoxEstrela'>
                <img src={Estrela} alt="Estrelas" />
                <div className='buyBoxAval'>
                    <div><p>4.7</p><img src={Estrela1} alt="1Estrela" /></div>
                    <p>(90 avaliações )</p>
                </div>
            </div>
            <div className="buyBoxPreco">
                <p className='RS'>R$</p>
                <div>
                    <h3>219</h3>
                    <p>,00</p>
                </div>
                <p>219,00</p>
            </div>
            <p className='desc'>Descrição do produto</p>
            <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <ProductOptionsSquare/>
            <ProductOptionsCircle/>
            <button className='comprar'>COMPRAR</button>
        </div>
    )
}