console.log('Inicar busca')

let buscarDados = new Promise((resolve, reject) => {
    console.log("buscando dados...")
    
    setTimeout(() => {
        const sucesso = true;

        if (sucesso) {
            resolve("A busca de dados foi concluida com sucesso");
        }
        else {
            reject("Erro ao buscar os dados");
        }
    }, 5000);

});


buscarDados
    .then((mensagem) => {
        console.log(mensagem);
    })
    .catch((erro) => {
        console.log(erro);
    });

