console.clear();
/*
FOR (ciklas)

for (pradzia; klausimas; pakeitimas) {
    kartojama logika
}

*/

const marks = [10, 2, 8, 4, 6];

let sum = 0;
let index = 0;

/*
suma += marks[index];
index +=1;

suma += marks[index];
index +=1;

suma += marks[index];
index +=1;

suma += marks[index];
index +=1;

suma += marks[index];
index +=1;
*/

sum += marks[index++];
sum += marks[index++];
sum += marks[index++];
sum += marks[index++];
sum += marks[index++];

console.log('Vidurkis', sum / marks.length);

/*5 kartus pakartok {
    suma += marks[index];
    index +=1; */

// let svoris = 20;
// console.log(svoris);

// svoris = svoris + 1;
// svoris +=1;
// kai reikia padidinti tik vienu vienetu, galima naudoti ++ bet tarpu;
// svoris++;
// console.log(svoris);

// ugis = ugis -1;

// ugis -= 1;


// du minusai gali buti priekyje arba gale.
// daugyba ar dalyba taip negalima, nes nera prasmes dauginti ar dalinti is 1, ypac kai ** ir // turi kitas reiksmes.
// jei yra du dalykai ir rasomi skirtingai, bet duoda ta pati rezultata - ne, tai ne tas pats rezultatas; 
// cia kalbama apie operatorius - reikia iskelti prie nubers.

// Isspausdinti nuo 0 iki 5.
for (let i = 0; i <= 5; i++) {
    console.log(i);
}

// Isspausdinti nuo 100 iki 104.
for (let k = 100; k <= 104; k++) {
    console.log(k);
}

// Isspausdinti nuo 1000 iki 995.
for (let j = 1000; j >= 995; j--) {
    console.log(j);
}

console.log('--------------');
const pazymiai = [2, 4, 6, 8, 10, 10, 8, 6, 4, 2];

let suma = 0;

for (let i = 0; i < pazymiai.length; i++) {
    console.log(i, '-->', pazymiai[i]);
}

console.log('----------------');

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (let i = 2; i < numbers.length; i += 3) {
    console.log(i, '-->', numbers[i]);
}

console.log('----------------');

const abc = 'abcdefghijklmnopqrstuvwxyz';
let text = '';

for (let i = 0; i < abc.length; i += 5) {
    text += abc[i];
    console.log(i, abc[i], text);
}

console.log('----------------');

const students = ['Petras', 'Maryte', 'Jonas', 'Ona'];

// Sveiki, mano vardas yra [vardas]!

for (let i = 0; i < students.length; i++) {
    const name = students[i];
    const hi = `Sveiki, mano vardas yra ${name}!`;
    console.log(hi);
}