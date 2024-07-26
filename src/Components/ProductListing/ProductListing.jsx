import ArrowRight from '../../assets/ArrowRight.png'
import ProductCardPromo from '../ProductCard/ProductCardPromo'
import Section from '../Section/Section'
import './ProductListing.css'

export default function ProductListing({ title, titleAlign = 'left', display, nomeClasse = 'productListing', margin,children }) {
    const link = {
        text: "Ver todos",
        href: "/ProductListingPage"
    }

    return (
        <Section classe={nomeClasse}>
            <div id="productMain">
                <div className="productTitles" style={{marginBottom: margin}}>
                    <p style={{ textAlign: titleAlign }}>{title}</p>
                    <a style={{display: display}} href={link.href}>{link.text}<img src={ArrowRight} href="Seta para Direita"></img></a>
                </div>
                <div className="productRender">
                    <ProductCardPromo quantidade={2} />
                    {children}
                </div>
            </div>
        </Section>

    )
}




