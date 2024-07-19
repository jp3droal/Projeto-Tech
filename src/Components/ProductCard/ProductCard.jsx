import imageCard from '../../assets/imageCard.png'
import './ProductCard.css'

export default function ProductCard() {
    return(
        <div className="cardMain">
            <div className="cardImage">
                <img src={imageCard} alt="Imagem do ProductCard" />
            </div>
            
        </div>
    )
}   