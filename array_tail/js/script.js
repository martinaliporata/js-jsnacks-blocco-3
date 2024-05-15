// Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e
// generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
// Stampiamo poi gli ultimi 5 elementi dell'Array
// Bonus:
// Chiediamo all'utente quanti elementi dell'array dovremo stampare
// Suggerimenti:
// Probabilmente conviene controllare che il numero di elementi della coda non sia più grande del numero di elementi totali dell'array


// Crea un prompt per chiedere all'utente quanti elementi vuole che l'array contenga
// Crea un array con .split
// Genera numeri con math.random da 1 a 100 con ciclo for (dopo < andrà il valore del prompt dell'utente)
// Uso slice per stamapre gli utlimi cinque numeri dell'array

const userChoice = Number.parseInt(prompt('Write how many elements the array should contain'), 10);
console.log(userChoice);

// array containing prompt value
const array = [userChoice];

for (let i = 0; i <=userChoice; i++) {
    Math.floor (Math.random() * 100) + 1;
    console.log()
}


// correzione
let arrayElements = Number.parseInt(prompt('Write how many elements the array should contain'), 10);

if(Number.isNaN(arrayElements) || arrayElements > 40 || arrayElements < 5){
    arrayElements = 15
}

for (let index = 0; index < arrayElements; index++){
    const randonNumber = Math.floor (Math.random() * 100) + 1;
    numbersArray.push(randonNumber)
}

console.log(numbersArray.slice(-5));
console.log(numbersArray)