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