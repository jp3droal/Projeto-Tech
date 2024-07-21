import Camiseta from "../../assets/camiseta.png"
import Calca from "../../assets/calca.png"
import Bones from "../../assets/bones.png"
import Headphones from "../../assets/headphones.png"
import Tenis from "../../assets/tenis.png"
import "./Coleçao.css"

export default function ColeçaoEmDestaque(){
    return(
    <section id="coleçao">
        <div className="colecaodestaque">
        <h1>Coleções em destaque</h1>
        <div className="botoes">
            <div className="roupas">
            <button ><img src={Camiseta} alt="camiseta" /></button>
            <p>Camisetas</p>
            </div>
            <div className="roupas">
            <button ><img src={Calca} alt="calca" /></button>
            <p>Calças</p>
            </div>
            <div className="roupas">
            <button ><img src={Bones} alt="bones" /></button>
            <p>Bonés</p>
            </div>
            <div className="roupas">
            <button ><img src={Headphones} alt="headphones" /> </button>
             <p>Headphones</p>
             </div>
             <div className="roupas">
            <button ><img src={Tenis} alt="tenis" /></button>
            <p>Tênis</p>
            </div>
         </div>
         </div>      
    </section>
    )


}