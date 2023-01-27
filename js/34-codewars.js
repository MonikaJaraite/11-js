console.clear();

let sum = 0;

function makeNegative(num) {
    if (num <= 0) {
        return num;
      }
    return num * -1;
}

console.log(makeNegative(7));
console.log(makeNegative(-2));
console.log(makeNegative(0));

console.log('-----------')

function solution(str){
  
  let rev = '';

  for (let i = 0; i < str.length; i++) {
      rev = str[i] + rev;
      console.log(i, str, rev)
  }

  return rev;
}

console.log(solution('abc'), '-->', 'cba');
console.log(solution('labas'), '-->', 'sabal');
console.log(solution('alus'), '-->', 'sula');
console.log(solution('x'), '-->', 'x');

console.log('------------');

function opposite(number) {
  if (number !== 0 ) {
    return number * -1;
  }
    return 0;
}

console.log(opposite(1), -1);
console.log(opposite(0), 0);
console.log(opposite(4.25), -4.25);

console.log('------------');

function getCount(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a'); 
      sum ++;
    }  
    return sum
  } 

  console.log(getCount("abracadabra"), 5) ;

  // || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'