import { Game } from "@/core/game"


const getGames = async (idList : string) : Promise<Game[] | undefined> => {
    const url: string = `http://localhost:8080/lists/${idList}/games`;

    try{
        const resposta = await fetch(url)

        if(!resposta.ok){
            throw new Error("Erro ao buscar os jogos!");
        }

        const games = await resposta.json();

        return games;
    }  catch(error){
        console.log("Erro: ", error);
    }
}

export{
    getGames
}