/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Game } from "@/core/game";
import { getGames } from "@/services/games";
import { use, useEffect, useState } from "react";

export default function Page(props:any){
  
  const params = use(props.params);
  const [jogos, setJogos] = useState<Game[]>([])

  useEffect(() => {
    const fetchJogos = async () => {
        try {
            const listaJogos: Game[] = await getGames(params.id); // Aguardando a resposta da API
            setJogos(listaJogos);
        } catch (error) {
            console.error("Erro ao buscar jogos:", error);
            setJogos([]); // Optional: Reset games if there was an error
        }
    };

    fetchJogos(); // Chama a função assíncrona
}, [params.id]); // Reexecuta o useEffect sempre que params.id mudar


  return (
    <div>
      <p>{params.id}</p>
      {
        jogos.map((jogo: Game) => (
          <div key={jogo.id}>
            <p>{jogo.title}</p>
            <p>{jogo.imgUrl}</p>
            <p>{jogo.year}</p>
            <p>{jogo.shortDescription}</p>
          </div>
        ))
      }
    </div>
  );

}
