import BuyBox from "../Components/BuyBox/BuyBox";
import GalleryProduct from "../Components/Gallery/GalleryProduct";
import ProductCard from "../Components/ProductCard/ProductCard";
import ProductListing from "../Components/ProductListing/ProductListing";
import Section from "../Components/Section/Section";
import Layout from "./Layout";

import './ProductViewPage.css'

export default function ProductViewPage() {
    return (
        <Layout posicao={1}>
            <div className="ViewPageLinks">
                <p className="LinksDestaque">Home</p>
                <p className="LinksRestante"> &nbsp;/ Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino</p>
            </div>
            <div className="ViewPageSeparacao">
                <GalleryProduct />
                <BuyBox/>
            </div>
            <Section><ProductListing title="Produtos em alta" children={<ProductCard quantidade={2} />} /></Section>
        </Layout>
    )
}