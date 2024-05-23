// > Crea un array composto da 15 automobili.
// > Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// < Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// < Infine stampa separatamente i 3 array.

const automobili = 
[
    {
        nome: 'pippo',
        marca: 'ford',
        modello: 'fiesta',
        alimentazione: 'benzina'
    },
    {
        nome: 'mattia',
        marca: 'ford',
        modello: 'fiesta',
        alimentazione: 'diesel'
    },
    {
        nome: 'ettore',
        marca: 'ford',
        modello: 'fiesta',
        alimentazione: 'gpl'
    },
    {
        nome: 'tiziano',
        marca: 'ford',
        modello: 'fiesta',
        alimentazione: 'elettrico'
    },
    {
        nome: 'lidia',
        marca: 'ford',
        modello: 'fiesta',
        alimentazione: 'metano'
    },
    {
        nome: 'paola',
        marca: 'ford',
        modello: 'fiesta',
        alimentazione: 'benzina'
    },
    {
        nome: 'sandro',
        marca: 'ford',
        modello: 'fiesta',
        alimentazione: 'benzina'
    },
    {
        nome: 'luigi',
        marca: 'ford',
        modello: 'fiesta',
        alimentazione: 'diesel'
    },
    {
        nome: 'andrea',
        marca: 'ford',
        modello: 'fiesta',
        alimentazione: 'gpl'
    },
    {
        nome: 'martina',
        marca: 'ford',
        modello: 'fiesta',
        alimentazione: 'elettrico'
    },
    {
        nome: 'marco',
        marca: 'ford',
        modello: 'fiesta',
        alimentazione: 'benzina'
    },
    {
        nome: 'giorgia',
        marca: 'ford',
        modello: 'fiesta',
        alimentazione: 'elettrico'
    },
    {
        nome: 'sara',
        marca: 'ford',
        modello: 'fiesta',
        alimentazione: 'metano'
    },
    {
        nome: 'lucia',
        marca: 'ford',
        modello: 'fiesta',
        alimentazione: 'benzina'
    },
    {
        nome: 'luca',
        marca: 'ford',
        modello: 'fiesta',
        alimentazione: 'diesel'
    },
]

// const benzina = automobili.filter(alimentazione) => {
//     if(marca === benzina) {
//         return true
//     }
// }
// console.log(benzina)

// const diesel = automobili.filter(alimentazione) => {
//     if(marca === diesel) {
//         return true
//     }
// }
// console.log(diesel)

// const others = automobili.filter(alimentazione) => {
//     if(marca === gpl && elettrico && metano) {
//         return true
//     }
// }
// console.log(others)


// correzione

const gasAutos = cars.filer((singleAuto) => {
    if(singleAuto.alimentazione==='benzina')
        return true
})
console.log(gasAutos)


const dieselAutos = cars.filer((singleAuto) => {
    if(singleAuto.alimentazione==='diesel')
        return true
})
console.log(dieselAutos)

const othersAutos = cars.filer((singleAuto) => {
    if(singleAuto.alimentazione!=='diesel' && singleAuto.alimentazione!=diesel)
        return true
})
console.log(othersAutos)






// Alternativa
// const gasAutos = []
// const dieselAutos = []
// const othersAutos = []

// for(let index = 0; index < Array.length; index++) {
//     const element = cars[index];

//     if(element.alimentazione==='benzina'){
//         gasAutos.push(element)
//     } else if (element.alimentazione==='diesel'){
//         dieselAutos.push(element)
//     } else {
//         othersAutos.push(element)
//     }
// }
// console.log(gasAutos)
// console.log(dieselAutos)
// console.log(othersAutos)