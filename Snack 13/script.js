// Scrivi una funzione che dato un numero inverta le sue cifre: 1234 -> 4321

const number = '1256';

function inversione(number) {
    let risultato = number.reverse;
    return risultato;
}

// correzione
function getReversedNumber(number) {
    // trasformo numero in una stringa
    // un numero 92938939 + '' diventa una stringa
    const string = number.toString();
    let reversedString = '';

    for (let index = string.lenght - 1;  index >= 0; index++) {
        reversedString += string [index]
    }

    return Number.parseInt(reversedString,10);
}

const userNumber = Number.parseInt(prompt('type a number'), 10)
const reversedString = getReversedNumber(userNumber)
console.log(reversedString)


// ascolta la registrazione dopo domanda di francesco bigazzi