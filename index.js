const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const { definirMoeda, perguntarOValorEmReais, desejaContinuar } = require('./mensagens');
const conversor = require('./conversor');

function iniciarConversao() {
  rl.question(perguntarOValorEmReais(), (valorEmReais) => {
    if (valorEmReais === "0") {
      console.log("Encerrando o programa. Obrigado!");
      rl.close();
      return;
    }

    rl.question(definirMoeda(), (moedaDesejada) => {
      const { deuCerto, resultado } = conversor.converterRealParaOutraMoeda(
        moedaDesejada,
        valorEmReais
      );

      if (!deuCerto) {
        console.log("Erro ao converter. Verifique os dados.");
        return iniciarConversao();
      }

      console.log(
        `O valor ${valorEmReais} foi convertido para ${moedaDesejada}: Resultado -> ${resultado.toFixed(2)}`
      );

      rl.question(desejaContinuar(), (resposta) => {
        if (resposta === "0") {
          console.log("Encerrando o programa. Obrigado!");
          rl.close();
        } else {
          iniciarConversao(); 
        }
      });
    });
  });
}
iniciarConversao();
