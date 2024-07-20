import imageCard from '../../assets/imageCard.png'
import './ProductCard.css'

export default function ProductCard() {
    return(
        <div className="cardPrincipal">
            <div className="cardImagem">
                <img src={imageCard} alt="Imagem do ProductCard" />
            </div>
            <p className='tinny'>Tênis</p>
            <p className='large'>K-Swiss V8 - Masculino</p>
            <div className='cardValor'>
                <p className="large2">$200</p>
                <p className="largeBold">$100</p>
            </div>
        </div>
    )
}   