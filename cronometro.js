function updateCountdown() {
    const terca = 2; // Representa terça-feira no índice
    const resetarHora = 20;
    const resetarMinuto = 0;
    const resetarSegundo = 0;
  
    const dataAtual = new Date();
    const diaAtual = dataAtual.getDay();
    const horaAtual = dataAtual.getHours();
    const minutoAtual = dataAtual.getMinutes();
    const segundoAtual = dataAtual.getSeconds();
  
    if (diaAtual === terca && horaAtual === resetarHora && minutoAtual === resetarMinuto && segundoAtual === resetarSegundo) {
      clearInterval(interval);
      startCountdown();
      return;
    }
  
    const diasRestantes = ((terca - diaAtual + 7) % 7) * 24 * 3600;
    const segundosRestantes = diasRestantes + (resetarHora - horaAtual) * 3600 + (resetarMinuto - minutoAtual) * 60 + (resetarSegundo - segundoAtual);
  
    const dias = Math.floor(segundosRestantes / (3600 * 24));
    const horas = Math.floor((segundosRestantes % (3600 * 24)) / 3600);
    const minutos = Math.floor((segundosRestantes % 3600) / 60);
    const segundos = Math.floor(segundosRestantes % 60);
  
    const countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = `
      <div style="display:flex; width:100%; justify-content:center; align-items: flex-start;">
        ${createCountdownItem(dias, "DIAS")}
        ${createCountdownItem(horas, "HORAS")}
        ${createCountdownItem(minutos, "MINUTOS")}
        ${createCountdownItem(segundos, "SEGUNDOS")}
      </div>
    `;
  }
  
  function createCountdownItem(value, label) {
    return `
      <div style="display:flex; justify-content:center; flex-direction:column; margin-right:2.8rem;">
        <span style="text-align: center; display: block; font-size:2rem;">${value}</span>
        <span style="white-space: nowrap; word-break: break-word; margin-top: 0; font-weight: 600; font-size: 0.8rem; color: rgba(0,0,0,1);">${label}</span>
      </div>
    `;
  }
  
  function startCountdown() {
    interval = setInterval(updateCountdown, 1000);
  }
  
  startCountdown();
  
