// IMC projeto pratico JS
const conversionFactor = 0.01; // O "conversionFactor" ira converter "cm" para "metros"

const IMC_STATUS_DICT = {
    UNDERWEIGHT: "UNDERWEIGHT",
    REGULAR: "REGULAR",
    OVERWEIGHT: "OVERWEIGHT",
    OBESITY: "OBESITY",
};


function getClassificationDetail(classification) {

    return {
        [IMC_STATUS_DICT.UNDERWEIGHT]: "Abaixo do peso",
        [IMC_STATUS_DICT.REGULAR]: "Peso normal",
        [IMC_STATUS_DICT.OVERWEIGHT]: "Acima do peso",
        [IMC_STATUS_DICT.OBESITY]: "Obesidade",
    }[classification] || "Falha ao encontrar a descrição do status"
}


function classificateIMC(imc) {
    // informar os pesos
    if (imc < 18.5) {
        return IMC_STATUS_DICT.UNDERWEIGHT;
    } else if (imc >= 18.5 && imc < 25) {
        return IMC_STATUS_DICT.REGULAR;
    } else if (imc >= 25 && imc < 30) {
        return IMC_STATUS_DICT.OVERWEIGHT;
    } else {
        return IMC_STATUS_DICT.OBESITY
    }
}

function calcularIMC(person) {
    let height = person.height; // Altura
    let weight = person.weight; // peso

    height *= conversionFactor;

    let imc = weight / (height * height); // A formula padrão do IMC
    const classification = classificateIMC(imc);
    const classificationDetail = getClassificationDetail(classification);
    console.log(classificationDetail)
    const result = "O resultado do IMC é de " + imc;
    const isHealthy = true;

    return {
        name: person.name,
        imc,
        classification,
        classificationDetail,
        result,
        isHealthy,
    };
}

const person = {
    name: 'Kleber',
    weight: 90,
    height: 173,
};

console.log(calcularIMC(person));
