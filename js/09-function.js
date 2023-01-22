console.clear();

function sudetis(pirmas, antras) {
    return pirmas + antras;
}

const s1 = sudetis(7, 5);
console.log(`7 + 5 = ${s1}`);

const s2 = sudetis(17, -8);
console.log(`17 + -8 = ${s2}`);

function arLyginis(skaicius) {
    if (skaicius % 2 === 0) {
        return 'lyginis';
    }
    return 'ne lyginis';
}

const l1 = arLyginis(7);
console.log(`7 yra ${l1}`);

const l2 = arLyginis(88);
console.log(`88 yra ${l2}`);

console.log('-------------');

const petras = [10, 2, 8, 4, 6];
const maryte = [10, 9, 8, 7];
const jonas = [2, 3, 4, 5];
const ona = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];

function average(marks) {
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    return sum / marks.length;
}

console.log('Petras:', average(petras));
console.log('Maryte:', average(maryte));
console.log('Jonas:', average(jonas));
console.log('Ona:', average(ona));

console.log('-------------');

const petroVidurkis = average(petras);  // galima pirma susiskaiciuoti ir priskirti kintamajam,
// bet ar jis tau reikalingas; jeigu ne - galima spausdinti iskart kaip maryte:

console.log('PetrasX:', petroVidurkis, petras);
console.log('Maryte:', average(maryte), maryte);
console.log('Jonas:', average(jonas), jonas);
console.log('Ona:', average(ona), ona);

console.log('----------');

function skirtumas(a, b) {
    // jeigu a yra ne skaicius
        // grazinti: klaida...
    if (typeof a !== 'number') {
        return 'Klaida: pirmas parametras turi buti skaicius.';
    }

    if (typeof b !== 'number') {
        return 'Klaida: antras parametras turi buti skaicius.';
    }

    return a - b;
}

console.log(skirtumas(7, 5));
console.log(skirtumas(17, 5));
console.log(skirtumas(-17, 5));

// Testai:
console.log(skirtumas(true, 5)); // true traktuoja kaip vieneta, ir gauna -4, bet reikia, kad butu klaida...
console.log(skirtumas(8, false)); // klaida...

console.log(skirtumas('labas', 5)); // klaida...
console.log(skirtumas(8, 'ezys')); // klaida...