//Javascript cronômetro LP

//Funcionando

function updateCountdown() {


  /*Array diasDaSemana = [
    "Domingo", = 0
    "Segunda-feira", 1
    "Terça-feira", = 2
    "Quarta-feira", = 3
    "Quinta-feira", = 4
    "Sexta-feira", = 5
    "Sábado", = 6
  ];*/

  const dataAtual = new Date();
  console.log(dataAtual);
  const diaAtual = dataAtual.getDay();
  const horaAtual = dataAtual.getHours();
  const minutoAtual = dataAtual.getMinutes();
  const segundoAtual = dataAtual.getSeconds();

  const terca = 2; // Representa terça-feira no indice
  const resetarHora = 20;
  const resetarMinuto = 0;
  const resetarSegundo = 0;

  if (
    diaAtual === terca &&
    horaAtual === resetarHora &&
    minutoAtual === resetarMinuto &&
    segundoAtual === resetarSegundo
  ) {
    // Se for terça-feira às 20:00:00, reinicie o cronômetro
    clearInterval(interval);
    startCountdown();
    return;
  }

  // Calcula o tempo restante até a próxima terça-feira às 20:00:00
  let timeRemaining = 0;
  if (
    diaAtual < terca ||
    (diaAtual === terca &&
      (horaAtual < resetarHora ||
        (horaAtual === resetarHora && minutoAtual < resetarMinuto)))
  ) {
    timeRemaining =
      ((terca - diaAtual + 7) % 7) * 24 * 3600 +
      (resetarHora - horaAtual) * 3600 +
      (resetarMinuto - minutoAtual) * 60 +
      (resetarSegundo - segundoAtual);
  } else {
    timeRemaining =
      ((terca - diaAtual + 7) % 7) * 24 * 3600 +
      (resetarHora - horaAtual) * 3600 +
      (resetarMinuto - minutoAtual) * 60 +
      (resetarSegundo - segundoAtual);
  }

  const dias = Math.floor(timeRemaining / (3600 * 24));
  const horas = Math.floor((timeRemaining % (3600 * 24)) / 3600);
  const minutos = Math.floor((timeRemaining % 3600) / 60);
  const segundos = Math.floor(timeRemaining % 60);

  document.getElementById(
    "countdown"
  ).innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

function startCountdown() {
  interval = setInterval(updateCountdown, 1000);
}

startCountdown();
