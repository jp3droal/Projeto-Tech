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
            <button ><img src={Camiseta} alt="camiseta" /><p>Camisetas</p></button>
            <button ><img src={Calca} alt="calca" /><p>Calças</p></button>
            <button ><img src={Bones} alt="bones" /><p>Bonés</p></button>
            <button ><img src={Headphones} alt="headphones" />  <p>Headphones</p></button>
            <button ><img src={Tenis} alt="tenis" /><p>Tênis</p></button>
         </div>
         </div>      
    </section>
    )


}