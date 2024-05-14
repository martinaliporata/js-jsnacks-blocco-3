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

const userChoice = Number.parseInt(prompt('Write how many elements the array should contain'))
console.log(userChoice)

