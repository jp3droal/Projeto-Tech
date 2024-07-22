import ArrowRight from '../../assets/ArrowRight.png'
import ProductCardPromo from '../ProductCard/ProductCardPromo'
import Section from '../Section/Section'
import './ProductListing.css'

export default function ProductListing({ title, titleAlign = 'left', children }) {
    const link = {
        text: "Ver todos",
        href: "/ProductListingPage"
    }

    return (
        <Section classe='productListing'>
            <div id="productMain">
                <div className="productTitles">
                    <p style={{ textAlign: titleAlign }}>{title}</p>
                    <a href={link.href}>{link.text}<img src={ArrowRight} href="Seta para Direita"></img></a>
                </div>
                <div className="productRender">
                    <ProductCardPromo quantidade={2} />
                    {children}
                </div>
            </div>
        </Section>

    )
}




