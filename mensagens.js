const perguntarOValorEmReais = () => {
    return 'Por favor, digite o valor em reais: '
}

const definirMoeda = () => {
    return 'Para qual moeda vc deseja converter? Digite apenas EURO ou DOLAR: '
}

const desejaContinuar = () => {
    return 'Deseja continuar ? Digite 0 para sair e 1 para realizar uma nova conversão'
}

module.exports = {
    perguntarOValorEmReais,
    definirMoeda,
    desejaContinuar
}
