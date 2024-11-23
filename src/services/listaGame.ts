import { Lista } from "@/core/lista";

const getListaGame = async () : Promise<Lista[] | undefined> => {
    const url: string = "http://localhost:8080/lists";
    console.log("1");
    try{
        console.log("2");
        const resposta = await fetch(url, {
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        });

        console.log("3");

        if(!resposta){
            throw new Error("Falha ao buscar as listas");
        }
        console.log("Resposta: ", resposta);
        console.log("4");

        const dados = await resposta.json();

        console.log("5");

        return dados ? dados : undefined;
    }catch(error){
        console.log("[ERRO] : " + error);
    }
}

export{
    getListaGame
}