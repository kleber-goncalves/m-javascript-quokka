const atualizaContadorRegressivo = (tempo, callback) => {
    let segundosRestantes = tempo;

    const interval = setInterval(() => {
        console.log(segundosRestantes);
        if (segundosRestantes === 0) {
            clearInterval(interval);
            callback()
        } else {
            segundosRestantes--;
        }
    }, 1000)
}

const iniciarContador = (tempo, callback) => atualizaContadorRegressivo(tempo, callback);


// iniciar o contador a cada '5' segundos
iniciarContador(5, () => {
    console.log('Finalizei a execução da contagem regressiva!') 
})

