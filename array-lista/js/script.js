// TuttiFrutti
// Descrizione:
// Abbiamo un frigorifero pieno di frutta: 'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
// C'è anche una pesca sul tavolo, la mettiamo nel frigo.
// Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
// Fasi
// 1. creare l'array con la frutta del frigorifero
// 2. aggiungere la pesca all'array della frutta
// 3. verificare se nell'array di frutta c'è il cocomero:
//    - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
//    - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"
// Suggerimenti/Indicazioni:
// Sì, lo sappiamo che esistono le funzioni includes() e indexOf() ma noi non le vogliamo utilizzare per cercare nel frigorifero.


// Creiamo un array inserendo 'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'.
// Aggiungiamo con .push 'pesca'
// Usiamo find o findIndex per verificare se nell'array è presente il cocomero
// Aggiungiamo un if per stampare una o l'altra situazione

const array = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
array.push('pesca')

// non ho capito come funziona find
const found = array.find((element) === 'cocomero');
console.log(found);

if (found=='cocomero') {
    console.log('Trovato! Devo solo preparare il cocktail.')
} else {
    console.log('Oh no, devo uscire a comprare il cocomero!')
}


// correzione

const fruitArray = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
fruitArray.push('pesca');

//verificare se nell'array di frutta c'è il cocomero:
//- se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
//- se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"
let trovata = false;

for (let index= 0; index < fruitArray.length; index++) {

    if (fruitArray[index] === 'cocomero'){
        trovata=true;
    }

    if (trovata) {
        console.log('Trovato! Devo solo preparare il cocktail')
    } else {
        console.log('Oh no, devo uscire a comprare il cocomero')
    }
}