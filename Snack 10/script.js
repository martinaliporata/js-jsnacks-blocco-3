// Crea due array che hanno un numero di elementi diversi. 
// Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

const arrayFirst = ['mela', 'mela','mela','mela','mela','mela','mela'];
const arraySecond = ['mela','mela','mela','mela','mela','mela','mela','mela','mela','mela',];

while (arrayFirst.length < arraySecond.length) {
    arrayFirst.push('mela')
}