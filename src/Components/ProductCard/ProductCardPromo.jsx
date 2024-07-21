import React from 'react';
import imageCard from '../../assets/imageCard.png'
import './ProductCardPromo.css'

const baseProducts = {
    promo: "30% OFF",
    name: "K-Swiss V8 - Masculino",
    image: imageCard,
    subName: "Tênis",
    price: "$200",
    priceDiscount: "$100"
};

export default function ProductCardPromo({ quantidade }) {
    const products = Array(quantidade).fill(baseProducts);

    return (
        <>
            {products.map((product, index) => (
                <div key={index} className="cardPromo">
                    <div className="cardImagem">
                        <div className='cardPromo'>
                            <p>{product.promo}</p>
                        </div>
                        <img src={product.image} alt="Imagem do ProductCard" />
                    </div>
                    <p className='tinny'>{product.subName}</p>
                    <p className='large'>{product.name}</p>
                    <div className='cardValor'>
                        <p className="large2">{product.price}</p>
                        <p className="largeBold">{product.priceDiscount}</p>
                    </div>
                </div>
            ))}
        </>
    );
}