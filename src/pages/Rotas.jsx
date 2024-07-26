import { Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";
import ProductListingPage from "./ProductListingPage"
import ProductViewPage from "./ProductViewPage"
import NotFoundPage from "./NotFoundPage/NotFoundPage";


export default function Rotas(){
    return(
        <Routes>
           <Route element={<HomePage/>} path="/" exact/>    
           <Route element={<ProductListingPage/>} path="/ProductListingPage"/>  
           <Route element={<ProductViewPage/>} path="/ProductViewPage"/>  
           <Route element={<NotFoundPage/>} path="*"/>
        </Routes>        
    )
}