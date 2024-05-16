// Dare la possibilità di inserire due parole. 
// Verificare tramite una funzione che le due parole abbiano
// la stessa lunghezza. 
// Se hanno la stessa lunghezza, stamparle entrambe 
// altrimenti stampare la più lunga delle due.

const parola1 = prompt('dimmi una parola') 
const parola2 = prompt('dimmi una seconda parola')

function dueParole (parola1, parola2) {
    if (parola1.lenght === parola2.lenght) {
        console.log(parola1, parola2)
    } else if (parola1.lenght < parola2.lenght) {
        console.log(parola2)
    } else (parola1.lenght > parola2.lenght) {
        console.log(parola1)
    }
}

dueParole('Ciao', 'buongiorno')