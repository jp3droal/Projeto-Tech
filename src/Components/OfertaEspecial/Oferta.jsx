import Sapato1 from "../../assets/Component1.png"
import "./Oferta.css"


export default function OfertaEspecial() {
    return (
        <section id="ofertaEspecial">
            <div className="imagem">
                <img id="sapato" src={Sapato1} alt="Sapato1" />


            </div>
            <div className="textos">
                <h4>Oferta Especial</h4>
                <h1>Air Jordan edição de colecionador</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                <button>Ver Oferta</button>
            </div>



        </section>

    )
}












// import React from "react"
// import Sapato1 from "../../assets/Sapato1.png"


// export default function Oferta(){
//     <>
//     <section>

//         <div className="imagens">
//             <img src={Sapato1} alt="sapato1" />
//         </div>


//         <div className="textos">
//             <h4>Oferta Especial</h4>
//             <h1>Air Jordan edição de colecionador</h1>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
//             <button>Ver Oferta</button>
//         </div>
//     </section>
//     </>
// }