import FilterGroup from "../Components/FilterGroup/FilterGroup";
import Layout from "./Layout";
import Section from "../Components/Section/Section";
import ProductListing from "../Components/ProductListing/ProductListing";
import ProductCard from "../Components/ProductCard/ProductCard";
import SetaDown from "../assets/icons/SetaDown.png"
import './ProductListingPage.css'

export default function ProductListingPage() {
    return (
        <Layout posicao={1}>
            <div className="resultados">
                <div className="resProd">
                    <p className="resultado">Resultados para "Tênis" - &nbsp;</p>
                    <p className="prod389">389 produtos</p>
                </div>
                <div className="boxRes">
                    <p className="ordenar">Ordenar por: &nbsp;</p>
                    <p className="relevantes">mais relevantes</p>
                    <img src={SetaDown} alt="Seta para baixo" />
                </div>

            </div>
            <div style={{ display: 'flex' }}>
                <FilterGroup />
                <Section><ProductListing nomeClasse="productListingPage" display='none' margin='0' children={<ProductCard quantidade={13} />} /></Section>
            </div>

        </Layout>
    )
}