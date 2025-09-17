// switch case - identificando frutas

let fruta = "manga";

switch (fruta) {
    case "maçã":
    case "banana":
    case "laranja":
        console.log("essa fruta é comum");
        break;
    case "kiwi":
    case "manga":
        console.log("essa fruta é incomum");
        break;
    default:
        console.log("fruta desconhecida");
}
