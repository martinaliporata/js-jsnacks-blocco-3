// Chiedi all'utente un numero di secondi da attendere e fai partire un timer da quel momento a zero secondi, interrompendo il timer

let userNumber = Number.parseInt(prompt('Scrivi quanti secondi attendere'))

const timer = setInterval (function(){
    if (userNumber < 0)
        clearInterval(timer)
        alert('Stop!')
}, userNumber)