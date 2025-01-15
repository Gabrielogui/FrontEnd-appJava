import Logo from "./Logo";
import MenuUsuario from "./MenuUsuario";

export default function Cabecalho(){
    return(
        <div className="
            flex justify-between items-center
            h-24 bg-slate-400 px-7 py-6
            
            "
        >
            <Logo />
            <MenuUsuario />
        </div>
    )
}