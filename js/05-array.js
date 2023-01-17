console.clear();
/*
ARRAY (sarasas, list'as, masyvas, matrica)
- rekomenduotina laikyti homogeniska informacija (jei skaiciai, tai skaiciai; jei tekstai, tai tekstai, jei boolean'ai, tai boolean'ai)
- galima ir skirtingu tipu informacija laikyti sarase
[chaosinis variantas imanomas, bet tada neaisku, ka reiskia, ka reiskia 7 arba true]
*/

const empty = [];
const marks = [10, 2, 8, 4, 6];
const names = ['Petras', 'Maryte', 'Jonas', 'Ona'];
const chaos = [true, 7, 'asd', -3.14, 'ewreg', false, []];

console.log(empty);
console.log(marks);
console.log(names);
console.log(chaos);

const petroPazymys1 = 10;
const petroPazymys2 = 2;
const petroPazymys3 = 8;
const petroPazymys4 = 4;
const petroPazymys5 = 6;

const petroSuma = petroPazymys1 + petroPazymys2 + petroPazymys3 + petroPazymys4 + petroPazymys5;

const petroKiekis = 5;

const petroVidurkis = petroSuma / petroKiekis;
console.log('Petro pazymiu vidurkis', petroVidurkis);

console.log('------------------');

//  index: 0, 1, 2, 3, 4, ....
const ona = [10, 2, 8, 4, 6, 10];

const onosSuma = ona[0] + ona[1] + ona[2] + ona [3] + ona[4] + ona[5];
console.log(onosSuma);

const onosKiekis = ona.length;
console.log(onosKiekis);

const onosVidurkis = onosSuma / onosKiekis;
console.log('Onos pazymiu vidurkis', onosVidurkis);

console.log('-------------');

const vegs = ['pomidoras', 'agurkas', 'svogunas', 'bulve'];

// Reikia nupirkti: pomidoras, agurkas, svogunas, bulve.

let sakinys = 'Reikia nupirkti: ';
let index = 0;

sakinys += vegs[index];
index += 1;
sakinys += ', ';

sakinys += vegs[index];
index += 1;
sakinys += ', ';

sakinys += vegs[index];
index += 1;
sakinys += ', ';

sakinys += vegs[index];
index += 1;
sakinys += '.';

console.log(sakinys);

const sakinys2 = 'Reikia nupirkti: ' +vegs.join(', ')+ '.';
console.log(sakinys2);

const sakinys3 = `Reikia nupirkti: ${vegs.join(', ')}.`;
console.log(sakinys3);

console.log('--------------');

// 10, 2, 8
// indekso atveju: 0, 1, 2
const jonas = [];
console.log(jonas);

jonas.push(10);
console.log(jonas);

jonas.push(2);
console.log(jonas);

jonas.push(8);
console.log(jonas);

const arTuri7 = jonas.includes(7);
console.log(arTuri7);

const arTuri2 = jonas.includes(2);
console.log(arTuri2);

const kelintas2 = jonas.indexOf(2);
console.log(kelintas2);

const kelintas8 = jonas.indexOf(8);
console.log(kelintas8);

const kelintas777 = jonas.indexOf(777);
console.log(kelintas777);

// const hi = 'Labas';
// const h = ['l', 'a', 'b', 'a', 's'];

