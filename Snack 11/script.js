// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

const array = []
let somma = 0;

while (somma < 50) {
    let userNumber = Number.parseInt(prompt('Inserisci un numero'), 10)
    
    if (Number.isNaN(userNumber) !== true)
    array.push(userNumber);
// somma= somma+username
    somma += userNumber; 
}

console.log(array, somma)