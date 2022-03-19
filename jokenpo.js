const prompt = require("prompt-sync")();
//variaveis do jogo
const lista = ["pedra", "papel", "tesoura"];
let escolha = "";
let qdtRodadas;
let continuar = "";

//função para pegar rodadas
function pegaRodadas() {
  while (true) {
    let rodadas = +prompt("Quantas rodadas iremos jogar? ");
    if (!isNaN(rodadas) && rodadas != 0) {
      return rodadas;
    } else {
      if (rodadas == 0) {
        console.log("Erro! Digite um valor entre 1 e 20");
      } else {
        console.log("Erro! Por favor digite um valor númerico.");
      }
    }
    console.log();
  }
}
//função para rodar o jogo
function playing() {
  qdtRodadas = pegaRodadas();

  //variaveis para coletar as vitórias de cada rodada
  let pontosComputador = 0;
  let pontosEmpate = 0;
  let pontosJogador = 0;
  //loop para rodadas
  for (let i = 0; i < qdtRodadas; i++) {
    console.log();
    do {
      console.log("############################");
      console.log(`######## ${i + 1}º rodada #########`);
      console.log("############################");
      console.log();
      escolha = prompt("pedra, papel ou tesoura? ");
      console.log();
      if (lista.includes(escolha) === false) {
        console.log("ERRO! Por favor, digite uma opção válida.");
      }
    } while (lista.includes(escolha) === false);

    //pega a escolha do computador
    let comp = lista[Math.floor(Math.random() * lista.length)];

    //condiçao que difine o vencedor a cada rodada

    if (comp == "pedra") {
      if (escolha == "pedra") {
        console.log("EMPATE!");
        pontosEmpate++;
      } else if (escolha == "papel") {
        console.log("GANHOU!");
        pontosJogador++;
      } else if (escolha == "tesoura") {
        console.log("PERDEU!");
        pontosComputador++;
      }
    } else if (comp == "papel") {
      if (escolha == "pedra") {
        console.log("PERDEU!");
        pontosComputador++;
      } else if (escolha == "papel") {
        console.log("EMPATE!");
        pontosEmpate++;
      } else if (escolha == "tesoura") {
        console.log("GANHOU!");
        pontosJogador++;
      }
    } else if (comp == "tesoura") {
      if (escolha == "pedra") {
        console.log("GANHOU!");
        pontosJogador++;
      } else if (escolha == "papel") {
        console.log("PERDEU!");
        pontosComputador++;
      } else if (escolha == "tesoura") {
        console.log("EMPATE!");
        pontosEmpate++;
      }
    }
    console.log();
    //mostra a escolha de cada jogador
    console.log(`Eu escolhi ${comp} e você ${escolha}.`);
  }
  console.log();

  //mostra o resultado contando todas partidas
  console.log(`JOGADOR: ${pontosJogador} pontos`);
  console.log(`COMPUTADOR: ${pontosComputador} pontos`);
  console.log(`EMPATE: ${pontosEmpate} pontos`);

  //imprime o vencedor contando todas as rodadas
  if (pontosEmpate > pontosComputador && pontosEmpate > pontosJogador) {
    console.log("############################");
    console.log("        Deu empate!");
    console.log("############################");
  } else if (pontosComputador < pontosJogador) {
    console.log("############################");
    console.log("    Você foi o VENCEDOR!");
    console.log("############################");
  } else if (pontosComputador > pontosJogador) {
    console.log("############################");
    console.log("     Eu ganhei de você!");
    console.log("############################");
  }
  console.log();
  //condição para parar ou continuar o jogo
  do {
    continuar = prompt("Deseja continuar? ").toLowerCase();
    console.log();
    switch (continuar) {
      case "s":
        playing();
        break;
      case "n":
        return console.log(
          "############################",
          "\n        GAME OVER!",
          "\n############################"
        );
    }
  } while (continuar != "s" && continuar != "n");
}
//chamando o inicio do jogo
playing();
