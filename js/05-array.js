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

/*
let sentence = 'Reikia nupirkti: ';
let index = 0;

sentence += vegs[index];
index += 1;
sentence += ', ';

sentence += vegs[index];
index += 1;
sentence += ', ';

sentence += vegs[index];
index += 1;
sentence += ', ';

sentence += vegs[index];
index += 1;
sentence += '.';

console.log(sentence);
*/

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

console.log('--------------');

// homework - I (variables):

const hours = [1, 3, 5, 7, 9];
console.log(hours);

const list1 = [2, 5, 8, 10, 16];
console.log(list1);

const happy = [2, 4, 6, 8, 10];
console.log(happy);

const toys = ['horse', 'giraffe', 'doll', 'doll-house', 'car']
console.log(toys);

const vacation = ["sun", "swimming-pool", "beach", "sea", "sunshine"];
console.log(vacation);

const random = [`books`, `stories`, `movies`, `cinema`, `good emotions`];
console.log(random);

const favourite = `Her favourite toys are: ${toys.join(' ')}.`
console.log(favourite);

const iLove = 'I love vacation, because it is about ' +vacation.join(' ');
console.log(iLove);

const iLike = `I like ${random.join(' ')}`
console.log(iLike);

const countHours = hours[0] - hours[1] + hours[2] - hours[3] + hours[4];
console.log(countHours);

const countList1 = list1[0] - list1[1] + list1[2] - list1[3] + list1[4];
console.log(countList1);

const countHappy = happy[0] - happy[1] + happy[2] - happy[3] + happy[4];
console.log(countHappy);

const backwards1 = vacation[4] + ', ' + vacation[3] + ', ' + vacation[2] + ', ' + vacation[1] + ', ' + vacation[0] + '.'
console.log(backwards1); 

let sentence = 'Joined backwards: ';
let index = 4;

sentence += toys[index];
index -= 1;
sentence += ', ';

sentence += toys[index];
index -= 1;
sentence += ', ';

sentence += toys[index];
index -= 1;
sentence += ', ';

sentence += toys[index];
index -= 1;
sentence += ', ';

sentence += toys[index];
index -= 1;
sentence += '. ';

console.log(sentence);

const backwards3 = `Joined backwards 3: ` + random[4] + ', ' + random[3] + ', ' + random[2] + ', ' + random[1] + ', ' + random[0] + '.'
console.log(backwards3); 
