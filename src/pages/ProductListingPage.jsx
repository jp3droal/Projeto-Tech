import FilterGroup from "../Components/FilterGroup/FilterGroup";
import Layout from "./Layout";
import Section from "../Components/Section/Section";
import ProductListing from "../Components/ProductListing/ProductListing";

export default function ProductListingPage() {
    return (
        <Layout>
            <div className="resultados">
                <p>Resultados para "Tênis"-<p>389 produtos</p> </p>
            </div>
            <FilterGroup/>
           
        </Layout>
    )
}