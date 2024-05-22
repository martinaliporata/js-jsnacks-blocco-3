// Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10
// Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla.

const palla = {
    "nome" : ['palla'],
    "peso" : ['10'],
}
console.log(palla)

const userChoice = prompt('Change balls weight')
console.log(palla.peso = userChoice)


// correzione
// const palla = {
//     nome : 'palla',
//     peso : 10,
// }

// const userWord = Number.parseInt(prompt('Inserisci il peso da modificare'),10);
// palla.peso = userWord;

    // Altrimenti così
    // palla.peso = Number.parseInt(prompt('Inserisci il peso da modificare'),10)

// console.log(palla)