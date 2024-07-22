import Gallery from "../Components/Gallery/Gallery";
import Layout from "./Layout";

export default function ProductListingPage() {
    const productListing = <Gallery/>

    return (
        <Layout children={productListing}/>
    )
}