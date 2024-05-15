// Crea un array vuoto. Chiedi fino a che l'array non ha 6 numeri all'utente di inserire un numero,
//  se è dispari inseriscilo nell'array.

const array = [];

while (array.length < 5) {
    let userNumber = Number.parseInt(prompt('Type a number'), 10);
    if (Number.isNaN(userNumber) !== true && userNumber% 2 === 1) {
        array.push(userNumber);
    }
}

console.log(array)