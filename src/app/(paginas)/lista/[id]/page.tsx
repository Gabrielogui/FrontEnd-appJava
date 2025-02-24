/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { FocusCards } from "@/components/ui/focus-cards";
import { Game } from "@/core/game";
import { getGames } from "@/services/games";
import { use, useEffect, useState } from "react";

interface Cartao {
  title: string,
  src: string
}

export default function Page(props:any){
  
  const params = use(props.params); // Desembrulhando a Promise de params
  const [jogos, setJogos] = useState<Game[]>([]);
  const [cartoes, setCartoes] = useState<Cartao[]>([]);

  useEffect(() => {
      const fetchJogos = async () => {
          try {
              const listaJogos: Game[] = await getGames(params.id); // Aguardando a resposta da API
              setJogos(listaJogos);

              setCartoes(
                  listaJogos.map((jogo: Game) => ({
                      title: jogo.title,
                      src: jogo.imgUrl,
                  }))
              )
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
                jogos.length === 0 ? (
                    <p>Nenhum jogo encontrado.</p>
                ) : (
                    <FocusCards cards={cartoes} />

                )
            }
        </div>
  );

}
