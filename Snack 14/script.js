// Chiedi all'utente un numero di secondi da attendere e fai partire un timer da quel momento a zero secondi, interrompendo il timer

let userNumber = Number.parseInt(prompt('Scrivi quanti secondi attendere'))

if (userNumber > 10 || Number.isNaN(userNumber)){
    userNumber = 3;
}

const timer = setInterval (function(){
    userNumber--;
    if (userNumber < 0)
        clearInterval(timer);
        alert('Stop!');
}, 2000)