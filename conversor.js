const VALOR_ATUAL_DOLAR = 5.20
const VALOR_ATUAL_EURO = 6.10

const converterRealParaOutraMoeda = (moedaDesejada,valor) => {
    const moedaParaConverter = moedaDesejada.toLowerCase();

    if(moedaParaConverter !== "euro" && moedaParaConverter !== "dolar") {
        console.log(`${moedaDesejada} é uma moeda inválida`);
        return {
            resultado: 0,
            deuCerto: false
        };
    } 
    
    let valorFinal;

    console.log(moedaDesejada)

    console.log(moedaParaConverter)

    switch(moedaParaConverter) {
        case "euro":
            valorFinal = valor / VALOR_ATUAL_EURO
            break

        case "dolar":
            valorFinal = valor / VALOR_ATUAL_DOLAR
            break;
    }

    return {
        resultado: valorFinal,
        deuCerto: true
    };
}

module.exports = {
    converterRealParaOutraMoeda
}