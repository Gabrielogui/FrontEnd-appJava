"use client" // Usar por conta dos 'Uses' -> UseState, UseEffect, etc
import { Lista } from "@/core/lista"
import { getListaGame } from "@/services/listaGame";
import Image from "next/image";
import { useEffect, useState } from "react";

import style from "@/app/css/style.module.css"
import Link from "next/link";
 
export default function CartaoTipos() {

    const imagens = ["/aventura-rpg.jpg", "/plataforma.jpg"]

    // |=======| USESTATE |=======|
    const [listas, setListas] = useState<Lista[] | undefined>([]);

    // |=======| USEEFFECT |=======|
    useEffect(() => {
        const fetchData = async () => {
            const dados = await getListaGame()
            console.log("Dados: ", dados)
            setListas(dados)
        }

        fetchData();

    }, [])

    // |=======| RETORNO |=======|
    return(

        <div 
            className="
                flex flex-col
                gap-4
            "
        >
            {listas?.map((lista) => (
                <Link className="" key={lista.id} href={`/lists/${lista.id}`}>
                    <span
                        className="
                        flex items-center
                        w-[85%] mx-auto rounded-md gap-5
                        overflow-hidden hover:scale-105 transition-all
                        bg-orange-300
                    " key={lista.id}>
                        <div className={`w-fit overflow-hidden ${style.corte}`}>
                            <Image src={imagens[lista.id - 1]} alt="Tipos do Game" width={300} height={100}/>
                        </div>
                        <span className="text-2xl">{lista.name}</span>
                    </span>
                </Link>
            ))}
        </div>
    )
}