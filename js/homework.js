// KINTAMUJU INICIJAVIMAS - ex. 1, ex. 2; VEIKSMAI SU KINTAMAISIAIS

const m = 13;
console.log(m);

const n = 9;
console.log(n);

const o = 8;
console.log(o);

console.log(m, n, o);

const p = 2;

const r = 3;

const sumaH = m + n + o + p + r;
console.log(sumaH);

const skirtumasH = m - n - o - p - r;
console.log(skirtumasH);

const dalmuoH = m / n / o / p / r;
console.log(dalmuoH);

const sandaugaH = m * n * o * p * r;
console.log(sandaugaH);

const liekanaH = m % n + n % o + o % p + p % r;
console.log(liekanaH);

// KINTAMUJU INICIJAVIMAS - ex. 3, ex. 4; VEIKSMAI SU KINTAMAISIAIS

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

// KINTAMUJU PALYGINIMAS - PALYGINIMAS:

if (m > n) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (o < n) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (p > r) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (m === n) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (m !== n) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (o >= p) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (p <= r) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

// TEKSTO TIPO KINTAMUJU ILGIAI:

console.log(toys.length);

console.log(vacation.length);

console.log(random.length);

// TEKSTO TIPO KINTAMUJU ILGIU PALYGINIMAS:

if (toys.length > vacation.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (random.length < vacation.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (random.length === toys.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (vacation.length !== toys.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (vacation.length >= random.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (toys.length <= random.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

// SARASO TIPO KINTAMUJU ILGIAI:

const usual = [2, 16, 351, 8, 14, 21, 98, 17, 461]
console.log(usual.length);

console.log(happy.length);

const variety = [8, 19, 23, 46, 64, 29, 322, 10018, 51, 462];
console.log(variety.length);

// SARASO TIPO KINTAMUJU ILGIU PALYGINIMAS:

if (usual.length > happy.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (happy.length < variety.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (happy.length === hours.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (usual.length !== variety.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (happy.length >= list1.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (toys.variety <= list1.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

// CIKLO FOR PANAUDOJIMAS

function rangeSum(from, to) {

    let sum = 0;

    for (let i=from; i<=to; i++) {
        sum+= i;
    }
    
    return sum;
}

console.log(rangeSum(0, 0));
console.log(rangeSum(0, 4));
console.log(rangeSum(0, 100));
console.log(rangeSum(574, 815));
console.log(rangeSum(-50, 50));
console.log(rangeSum(-70, 30));

console.log('---------------');

function reverseString(str) {
    
    let ats = '';

    for (let i = 0; i < str.length; i++) {
        ats = str[i] + ats;
    }

    return ats;
}

console.log(reverseString('sunaitelis'), '-->', 'siletianus');
console.log(reverseString('dukruzele'), '-->', 'elezurkud');
console.log(reverseString('nestrapuik'), '-->', 'kiupartsen');

console.log('---------------');







