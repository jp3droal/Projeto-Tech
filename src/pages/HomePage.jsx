import ColeçaoEmDestaque from "../Components/ColeçõesEmDestaque5/Coleçao5";
import Gallery from "../Components/Gallery/Gallery";
import OfertaEspecial from "../Components/OfertaEspecial/Oferta";
import ProductListing from "../Components/ProductListing/ProductListing";
import ProductCard from "../Components/ProductCard/ProductCard"
import Section from "../Components/Section/Section";
import Layout from "./Layout";
import Colecao3 from "../Components/ColeçõesEmDestaque3/Coleçao3";

export default function HomePage() {
    return (
        <>
            <Layout posicao={0}>
                <Gallery />
                <Colecao3/>
                <ColeçaoEmDestaque />
                <Section><ProductListing title="Produtos em alta" children={<ProductCard quantidade={6} />} /></Section>
                <OfertaEspecial />
            </Layout>
        </>
    )
}