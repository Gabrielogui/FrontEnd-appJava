const getListaGame = async () => {
    const url: string = "http://localhost:8080/lists";

    try{
        const resposta = await fetch(url, {
            mode: "cors",
            headers: {
                "content-Type": "application/json",
            }
        })

        if(!resposta){
            throw new Error("Falha ao buscar as listas");
        }

        const dados = await resposta.json();

        return dados;
    }catch(error){
        console.log("[ERRO] : " + error);
    }
}

export{
    getListaGame
}