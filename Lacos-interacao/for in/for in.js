// for (let chave in Object) {
//     // executa a interação sobre a propriedade do objeto
// }

let pessoa = {
    nome: 'Kleber',
    age: '20',
    height: 173,
    documento: 12345,
}

Object.prototype.surname = 'teste'

for (let chave in pessoa) {
    // executa a interação sobre a propriedade do objeto
    console.log(chave)
}