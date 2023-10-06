

        function updateCountdown() {
            const currentDate = new Date();
            const currentDay = currentDate.getDay();
            const currentHour = currentDate.getHours();
            const currentMinute = currentDate.getMinutes();
            const currentSecond = currentDate.getSeconds();

            // Define o dia da semana para terça-feira (terça-feira é 2 no JavaScript, onde domingo é 0)
            const tuesday = 2;

            // Define a hora de reinício para 20:00:00
            const restartHour = 20;
            const restartMinute = 0;
            const restartSecond = 0;

            if (currentDay === tuesday && currentHour === restartHour && currentMinute === restartMinute && currentSecond === restartSecond) {
                // Se for terça-feira às 20:00:00, reinicie o cronômetro
                clearInterval(interval);
                startCountdown();
                return;
            }

            // Calcula o tempo restante até a próxima terça-feira às 20:00:00
            let timeRemaining = 0;
            if (currentDay < tuesday || (currentDay === tuesday && (currentHour < restartHour || (currentHour === restartHour && currentMinute < restartMinute)))) {
                // Se for antes de terça-feira às 20:00:00, calcula o tempo restante no mesmo dia
                timeRemaining = (restartHour - currentHour) * 3600 +
                    (restartMinute - currentMinute) * 60 +
                    (restartSecond - currentSecond);
            } else {
                // Se for depois de terça-feira às 20:00:00, calcula o tempo restante até a próxima terça-feira
                const daysUntilTuesday = (tuesday + 7 - currentDay) % 7;
                timeRemaining = (daysUntilTuesday * 24 + restartHour - currentHour) * 3600 +
                    (restartMinute - currentMinute) * 60 +
                    (restartSecond - currentSecond);
            }

            // Converte o tempo restante em horas, minutos e segundos
            const hours = Math.floor(timeRemaining / 3600);
            const minutes = Math.floor((timeRemaining % 3600) / 60);
            const seconds = Math.floor(timeRemaining % 60);

            // Exibe o tempo restante no elemento com id "countdown"
            document.getElementById("countdown").textContent = `Tempo restante: ${hours}h ${minutes}m ${seconds}s`;
        }

        function startCountdown() {
            // Atualiza o cronômetro a cada segundo
            interval = setInterval(updateCountdown, 1000);
        }

        // Inicializa o cronômetro
        startCountdown();
 

          /*function updateCountdown() {
            const currentDate = new Date();
            const currentDay = currentDate.getDay();
            const currentHour = currentDate.getHours();
            const currentMinute = currentDate.getMinutes();
            const currentSecond = currentDate.getSeconds();

            // Define o dia da semana para terça-feira (terça-feira é 2 no JavaScript, onde domingo é 0)
            const tuesday = 2;

            // Define a hora de reinício para 12:40:00
            const restartHour = 12;
            const restartMinute = 40;
            const restartSecond = 0;

            if (currentDay === tuesday && currentHour === restartHour && currentMinute === restartMinute && currentSecond === restartSecond) {
                // Se for terça-feira às 12:40:00, reinicie o cronômetro
                clearInterval(interval);
                startCountdown();
                return;
            }

            // Calcula o tempo restante até a próxima sexta-feira às 12:40:00
            let timeRemaining = 0;
            if (currentDay < 5 || (currentDay === 5 && (currentHour < restartHour || (currentHour === restartHour && currentMinute < restartMinute)))) {
                // Se for antes de sexta-feira às 12:40:00, calcula o tempo restante no mesmo dia
                timeRemaining = (restartHour - currentHour) * 3600 +
                    (restartMinute - currentMinute) * 60 +
                    (restartSecond - currentSecond);
            } else {
                // Se for depois de sexta-feira às 12:40:00, calcula o tempo restante até a próxima terça-feira
                const daysUntilTuesday = (tuesday + 7 - currentDay) % 7;
                timeRemaining = (daysUntilTuesday * 24 + restartHour - currentHour) * 3600 +
                    (restartMinute - currentMinute) * 60 +
                    (restartSecond - currentSecond);
            }

            // Converte o tempo restante em horas, minutos e segundos
            const hours = Math.floor(timeRemaining / 3600);
            const minutes = Math.floor((timeRemaining % 3600) / 60);
            const seconds = Math.floor(timeRemaining % 60);

            // Exibe o tempo restante no elemento com id "countdown"
            document.getElementById("countdown").textContent = ` Tempo restante: ${hours}h ${minutes}m ${seconds}s`;
        }

        function startCountdown() {
            // Atualiza o cronômetro a cada segundo
            interval = setInterval(updateCountdown, 1000);
        }

        // Inicializa o cronômetro
        startCountdown();*/
