const prompt = require("prompt-sync")();
console.log();
// Declarando funções

function avançoTempo(horaAtual, horaPassada) {
  console.log(`Se passaram ${horaPassada} horas`);
  tempo = horaAtual + horaPassada;
  return tempo;
}

// Declarando obejeto/ função dentro dele
let personagem = {
  energia: 50,
  inteligencia: 50,

  exibeStatus: function () {
    console.log(`
        Sua inteligência é: ${this.inteligencia}.
        Sua energia é: ${this.energia}.`);
  },

  modificaStatus: function (ener, intel) {
    this.energia += ener;
    this.inteligencia += intel;
  },
};

// Variáveis

let horas = 7;
let dia = 1;
let loop;
let escolha;
let tempo;

// Introdução do jogo!

console.log(`Bem vindos a "STUDENT"`);
console.log(`-------------------------------`);
console.log(`A finalidade do nosso jogo é que você crie uma rotina para seu personagem ser aprovado em uma prova de um processo seletivo que acontecerá dentro de 7 dias, de acordo com suas escolhas 
o seu personagem irá ganhar ou perder pontos de inteligência e energia. Para que ele seja aprovado nessa prova é nécessário mínimo de 70 de inteligência e 60 de energia. Então foque em fazer 
uma rotina equilibrada para que consiga ser aprovado.`);
console.log(`-------------------------------`);

// ciclo de repetição
do {
  personagem.energia = 50;
  personagem.inteligencia = 50;
  semana: do {
    for (dia = 1; dia < 7; dia++) {
      while (horas <= 24) {
        console.log(
          `Agora são ${horas} horas do dia ${dia}, o que focê gostaria de fazer?`
        );
        console.log(`
          [1] Estudar novos conteúdos (+4 horas / +5 inteligência / -4 Energia)
          [2] Assistir TV (+2 horas / -3 inteligência / +2 Energia)
          [3] Praticar Exercícios fisicos (+2 horas / +1 inteligência / -5 Energia)
          [4] Comer (+1 horas / +0 inteligência / +4 Energia)
          [5] Jogar (+2 horas / -3 inteligência / -4 Energia)
          [6] Revisar conteúdos (+4 horas / +3 inteligência / -4 Energia)
          [7] Dormir (+8 horas / -5 inteligência / +5 Energia)`);
        let escolha = +prompt();
        if (escolha == 1) {
          horas = avançoTempo(horas, 4);
          personagem.modificaStatus(-4, 5);
          personagem.exibeStatus();
          console.log();
        } else if (escolha == 2) {
          horas = avançoTempo(horas, 2);
          personagem.modificaStatus(2, -3);
          personagem.exibeStatus();
          console.log();
        } else if (escolha == 3) {
          horas = avançoTempo(horas, 2);
          personagem.modificaStatus(-5, 1);
          personagem.exibeStatus();
          console.log();
        } else if (escolha == 4) {
          horas = avançoTempo(horas, 1);
          personagem.modificaStatus(4, 0);
          personagem.exibeStatus();
          console.log();
        } else if (escolha == 5) {
          horas = avançoTempo(horas, 2);
          personagem.modificaStatus(-4, -3);
          personagem.exibeStatus();
          console.log();
        } else if (escolha == 6) {
          horas = avançoTempo(horas, 4);
          personagem.modificaStatus(-4, 3);
          personagem.exibeStatus();
          console.log();
        } else if (escolha == 7) {
          horas = avançoTempo(horas, 8);
          personagem.modificaStatus(5, -5);
          personagem.exibeStatus();
          console.log();
        } else {
          console.log(`Digite uma alternativa válida`);
        }
        if (personagem.energia <= 0 || personagem.inteligencia <= 0) {
          break semana;
        }
        if (dia === 7 && horas >= 7) {
          break semana;
        }
      }
      horas = horas - 24;
    }
  } while (
    escolha != 1 &&
    escolha != 2 &&
    escolha != 3 &&
    escolha != 4 &&
    escolha != 5 &&
    escolha != 6 &&
    escolha != 7
  );
  // finais possiveis

  if (personagem.inteligencia <= 0 || personagem.energia <= 0) {
    if (personagem.inteligencia <= 0) {
      console.log(
        `A não, sua inteligência zerou, com esse nivel de inteligência você não consegirá ser aprovado, fim de jogo para você!`
      );
    } else if (personagem.energia <= 0) {
      console.log(
        `A não, sua energia zerou, com esse nível de energia você passou mal e terá que ficar no hospital com isso perderá a prova, fim de jogo para você!`
      );
    }
  } else if (personagem.inteligencia >= 85 && personagem.energia >= 60) {
    console.log(
      `Meus parabéns!! Você fez uma rotina muito boa e passou entre os melhores do processo. `
    );
  } else if (personagem.inteligencia >= 70 && personagem.energia >= 60) {
    console.log(
      `Meus parabéns!! Você fez o melhor possível, não está entre os melhores mas conseguiu sua aprovação.`
    );
  } else if (personagem.inteligencia >= 70 && personagem.energia < 60) {
    console.log(
      `Nossa que pena, sua rotina te deixou muito cansado, por mais que você tivesse domínio de conteúdo o cansaço te deixou desatendo fazendo você errar questões a mais, por isso não foi aprovado.`
    );
  } else if (personagem.inteligencia <= 40) {
    console.log(
      `Que pena, você está entre os piores do processo, deveria revisar sua rotina e criar uma rotina melhor e principalmente estudar mais, mas não esqueça de descançar também. `
    );
  }

  do {
    console.log(`Você gostaria de tentar novamente? [1] SIM [2] NÃO `);
    loop = +prompt();
    console.log();
    if (loop == 2) {
      console.log(`Muito obrigado por ter jogado STUDENT, até a próxima! :)`);
      console.log();
    } else if (loop != 1 && loop != 2) {
      console.log(`Digite uma resposta válida. `);
    }
  } while (loop != 1 && loop != 2);
} while (loop == 1);
