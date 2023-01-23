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

// KINTAMUJU PALYGINIMAS

