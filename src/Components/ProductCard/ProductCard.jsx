import React from 'react';
import imageCard from '../../assets/imageCard.png'
import './ProductCard.css'

const baseProducts = {
    name: "K-Swiss V8 - Masculino",
    image: imageCard,
    subName: "Tênis",
    price: "$200",
    priceDiscount: "$100"
};

export default function ProductCard({ quantidade }) {
    const products = Array(quantidade).fill(baseProducts);

    return (
        <>
            {products.map((product, index) => (
                <a href='/ProductViewPage' className='productCardA'>
                    <div key={index} className="cardPrincipal">
                        <div className="cardImagem">
                            <img src={product.image} alt="Imagem do ProductCard" />
                        </div>
                        <p className='tinny'>{product.subName}</p>
                        <p className='large'>{product.name}</p>
                        <div className='cardValor'>
                            <p className="large2">{product.price}</p>
                            <p className="largeBold">{product.priceDiscount}</p>
                        </div>
                    </div>
                </a>

            ))}
        </>
    );
}