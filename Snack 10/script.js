// Crea due array che hanno un numero di elementi diversi. 
// Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

const arrayFirst = ['1', '2'];
const arraySecond = ['1','2','3','4','5','6','7','8'];

while (arrayFirst.length < arraySecond.length) {
    arrayFirst.push('1');
}

console.log(arrayFirst, arraySecond)