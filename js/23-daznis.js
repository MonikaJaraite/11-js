console.clear();

// Prieinu prie kiekvieno simbolio
function frequency(string) {
    for (const letter of string) {
        console.log(letter);
    }
}

const text1 = 'vasara';

function freq (st) {
    let a = 0;
    let b = 0;

    for (const symb of st) {
        // if (symb === 'a') {
        //     a++;
        // }
        // if (symb === 'b') {
        //     b++;
        // }
        if (symb === 'a') a++;
        if (symb === 'b') b++;
        // jeigu if'as turi tik vienintele salyga, galima taip i 1 eilute sukisti
    }

    console.log(a, b);
    return 'x';
}

console.log(freq(text1));

function daznis(str) {
    const abc = {};

    for (const symbol of str) {
        if (symbol in abc) {
            abc[symbol]++;
        } else {
            abc[symbol] = 1;
        }
    }

    let max = 0;
    for (const symbol in abc) {
        if (abc[symbol] > max) {
            max = abc[symbol];
        }
    }

    const maxSymbols = [];
    for (const symbol in abc) {
        if (abc[symbol] === max) {
            maxSymbols.push(symbol);
        }
    }

    return { symbols: maxSymbols, max };
    // return [maxSymbols, max];
}

console.log(daznis('vasara'));
console.log(daznis('cipolinas'));
console.log(daznis('savas'));
console.log(daznis('mama'));