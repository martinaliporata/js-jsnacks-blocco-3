// Dare la possibilità di inserire due parole. 
// Verificare tramite una funzione che le due parole abbiano
// la stessa lunghezza. 
// Se hanno la stessa lunghezza, stamparle entrambe 
// altrimenti stampare la più lunga delle due.

const parola1 = prompt('dimmi una parola');
const parola2 = prompt('dimmi una seconda parola');

function dueParole (parola1, parola2) {
    if (parola1.lenght === parola2.lenght) {
        console.log(parola1, parola2)
    } else if (parola1.lenght < parola2.lenght) {
        console.log(parola2)
    } else (parola1.lenght > parola2.lenght); {
        console.log(parola1)
    }
}

dueParole('Ciao', 'buongiorno')

// correzione

const userWordA = prompt('dimmi una parola');
const userWordB = prompt('dimmi una seconda parola');

if (sonoLungheUguali(userWordA, userWordB) === true){
    console.log(userWordA, userWordB);
} else {
    if (userWordA.lenght > userWordB.length) {
        console.log(userWordA)
    } else {
        console.log(userWordB)
    }
}

// io ho "sbagliato" perché la consegna chiedeva un vero o falso
function sonoLungheUguali(parolaA, parolaB) {
    if(parolaA.lenght === parolaB.lenght) {
        return true;
    } else {
        return false;
    }
}