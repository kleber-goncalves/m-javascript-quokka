const caixa = ["carro", "boneco"];



    const remover = caixa.map(() => {
        if (caixa.length >= 2) {
            caixa.pop(); //remover
            
        } else { 
            caixa.push("copo"); //adicionar
        }
    })
    


console.log(caixa);

// const adicionar = caixa.map((item) => {
//     if (caixa.length <= 2) {
//         caixa.push("copo"); //adicionar
//     }
// });

