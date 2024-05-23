// Crea un array di oggetti che rappresentano delle persone, 10.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

const people = [
    {
        nome: 'lucia',
        cognome: 'pippo',
        età: 12
    },
    {
        nome: 'paola',
        cognome: 'seveso',
        età: 15
    },
    {
        nome: 'martina',
        cognome: 'liporata',
        età: 18
    },
    {
        nome: 'marco',
        cognome: 'minora',
        età: 21
    },
    {
        nome: 'luca',
        cognome:'compagnoni',
        età: 25
    },
    {
        nome: 'alessandra',
        cognome: 'terrioti',
        età: 30
    },
    {
        nome: 'diego',
        cognome: 'bordegoni',
        età: 10
    },
    {
        nome: 'laura',
        cognome: 'lampugnano',
        età: 8
    },
    {
        nome: 'lorenzo',
        cognome: 'calzi',
        età: 6,
    },
    {
        nome: 'tiziano',
        cognome: 'amati',
        età: 20,
    },
]

// (condizione)? 'valoredivero' : 'valore di falso'
const personeModificate = persone.map((persona) =>{
    return `${persona.nome}${persona.cognome}${persona.età >= 18}? "può guidare perche maggiorenne" : "non puo guidare perche minorenne"}`;
})

console.log(people)
console.log(personeModificate)