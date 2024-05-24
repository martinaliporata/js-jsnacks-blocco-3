// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.

const zucchine = [
    {varieta: 'Nera di Milano', 
    peso: 341.23, 
    lunghezza: 14.58
    },
    {varieta: 'Romanesca', 
    peso: 287.45, 
    lunghezza: 19.75
    },
    {varieta: 'Fiorentina', 
    peso: 458.12, 
    lunghezza: 22.36 
    },
    {varieta: 'Tonda', 
    peso: 132.67, 
    lunghezza: 25.98 
    },
    {varieta: 'Lunga fiorentina', 
    peso: 376.54, 
    lunghezza: 28.45 
    },
    {varieta: 'Striata d\'Italia', 
    peso: 231.78,
    lunghezza: 11.23 
    },
    {varieta: 'Bianca triestina', 
    peso: 314.89, 
    lunghezza: 17.56
    },
    {varieta: 'Gialla', 
    peso: 459.31, 
    lunghezza: 12.67
    },
    {varieta: 'Rugosa friulana', 
    peso: 278.44, 
    lunghezza: 26.89
    },
    {varieta: 'Patisson', 
    peso: 387.56, 
    lunghezza: 29.12 
    }
]

// Calcola quanto pesano tutte le zucchine.

const pesoTotaleZucchine = 0;
zucchine.forEach(zucchina => {
    pesoTotaleZucchine += zucchina.peso;
});

console.log(pesoTotaleZucchine)
// Dividi in due array separati le zucchine che misurano meno o più di 8cm.

const zucchineCorte = [];
const zucchineLunghe = [];

zucchine.forEach(zucchina => {
    if (zucchina.lunghezza < 8) {
        zucchineCorte.push(zucchina);
    } else {
        zucchineLunghe.push(zucchina);
    }
});

// Infine stampa separatamente quanto pesano i due gruppi di zucchine.
const pesoTotaleZucchineCorte = 0;
zucchineCorte.forEach(zucchina => {
    pesoTotaleZucchineCorte += zucchina.peso;
});

const pesoTotaleZucchineLunghe = 0;
zucchineLunghe.forEach(zucchina => {
    pesoTotaleZucchineLunghe += zucchina.peso;
});