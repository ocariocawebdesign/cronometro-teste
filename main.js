'use strict'


let data = new Date();
let diaDaSemana = new Array(7);

diaDaSemana[0] = "Domingo";
diaDaSemana[1] = "Segunda-feira";
diaDaSemana[2] = "Terça-feira";
diaDaSemana[3] = "Quarta-feira";
diaDaSemana[4] = "Quinta-feira";
diaDaSemana[5] = "Sexta-feira";
diaDaSemana[6] = "Sabado";

let diaAtual = diaDaSemana[data.getDay()];

console.log(diaAtual);
console.log(data.toLocaleTimeString("pt-BR"));


/*function updateCountdown() {
    const currentDate = new Date();
    const nextTuesday = new Date(currentDate);

    // Encontra o próximo dia da semana que é terça-feira
    while (nextTuesday.getDay() !== 2) {
        nextTuesday.setDate(nextTuesday.getDate() + 1);
    }

    // Define a hora para 00:00:00
    nextTuesday.setHours(0, 0, 0, 0);

    // Calcula a diferença em milissegundos entre as datas
    const timeRemaining = nextTuesday - currentDate;

    if (timeRemaining <= 0) {
        // Se a próxima terça-feira já passou, reinicie o cronômetro
        nextTuesday.setDate(nextTuesday.getDate() + 7);
    }

    // Calcula a diferença em milissegundos novamente após a reinicialização
    const newTimeRemaining = nextTuesday - currentDate;

    // Converte a diferença de milissegundos para horas, minutos, segundos
    const hours = Math.floor(newTimeRemaining / (1000 * 60 * 60));
    const minutes = Math.floor((newTimeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((newTimeRemaining % (1000 * 60)) / 1000);

    // Exibe o tempo restante no elemento com id "countdown"
    document.getElementById("countdown").textContent = `Tempo restante: ${hours}h ${minutes}m ${seconds}s`;
}

// Atualiza o cronômetro a cada segundo
setInterval(updateCountdown, 1000);

// Inicializa o cronômetro
updateCountdown();
*/
/*function Duracao(){
// Define a data atual
const currentDate = new Date();

// Define a data final em 10 de outubro de 2023
const endDate = new Date('2023-10-10');

// Calcula a diferença em milissegundos entre as datas
const timeRemaining = endDate - currentDate;

// Calcula o número de horas restantes
const hoursRemaining = Math.floor(timeRemaining / (1000 * 60 * 60));

console.log(`Faltam ${hoursRemaining} horas até 10 de outubro de 2023.`);

}

Duracao();*/