"use client" // Usar por conta dos 'Uses' -> UseState, UseEffect, etc.

import Cabecalho from "@/components/Cabecalho";
import { Lista } from "@/core/lista";
import { getListaGame } from "@/services/listaGame";
import { useEffect, useState } from "react";

export default function Home() {

  // |=======| USE STATE |=======|
  const [ lista, setLista ] = useState<Lista[] | undefined>([]);

  // |=======| USE EFFECT |=======|
  useEffect( () => {
    const fetchData = async () => {
      const dados = await getListaGame()
      console.log("Dados: ", dados)
      setLista(dados)
    }

    fetchData()
  }, [])

  // |=======| RETURN |=======|
  return (
    <div>
      <Cabecalho/>

      <div className="bg-green-300">
        {lista && lista.length > 0
          ?
          (
            <ul>
              {lista.map( (lista, index) => (
                <div key={index}>
                  <span>{lista.name}</span>
                </div>
              ))}
            </ul>
          )
          :
          (
            <p>Carregando lista...</p>
          )
        
        }
      </div>

    </div>
  );
}
