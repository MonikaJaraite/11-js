console.clear();

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }   
}

console.log(evenOrOdd(7));
console.log(evenOrOdd(2));
console.log(evenOrOdd(-42));
console.log(evenOrOdd(-7));
console.log(evenOrOdd(0));

console.log('-----------')

function addFive(num) {
  var total = num += 5;
  return num
}

console.log(addFive(5), 10);
console.log(addFive(0), 5);
console.log(addFive(-5), 0);

console.log('-----------')

const id = 3;

switch (id) {
    case 1:
      console.log('Mercury');
      break;

    case 2:
      console.log('Venus');
      break;

    case 3:
      console.log('Earth');
      break;

    case 4:
      console.log('Mars');
      break;

    case 5:
      console.log('Jupiter');
      break;

    case 6:
      console.log('Saturn');
      break;

    case 7:
      console.log('Uranus');
      break;

    case 8:
      console.log('Neptune');
      break;
  }
  
console.log('-----------------');

  function multiply(a, b){
    return a * b
  }

console.log(multiply(1,1), 1);
console.log(multiply(2,1), 2);
console.log(multiply(2,2), 4);
console.log(multiply(3, 5), 15);

console.log('-----------------');

/*
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.

Duota pradzia:
function positiveSum(arr) {
  
}
*/

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) 
      sum += arr[i];
    }   return sum
  } 

console.log(positiveSum([1,2,3,4,5]), '-->', 15);
console.log(positiveSum([1,-2,3,4,5]), '-->',13);
console.log(positiveSum([]), '-->',0);
console.log(positiveSum([-1,-2,-3,-4,-5]), '-->',0);
console.log(positiveSum([-1,2,3,4,-5]), '-->',9);

console.log('--------------');

function removeChar(str){
  let sum = '';
  for (let i = 1; i < str.length - 1; i++) {
  sum += str[i];
  } return sum;
 } 

 console.log(removeChar('eloquent'), 'loquen');

/* Kur sudeti skliaustelius????

Alternatyvus sprendimas:

function removeChar(str) {
  return str.slice(1, -1);
}

arba:
removeChar = str => str.slice(1,-1)

arba:
function removeChar(str){
  let res = '';
  for (let i = 0; i < str.length; i++) {
    if (i != 0 && i != str.length - 1) {
      res += str[i]
    }
  }
  return res;
}
*/
console.log('--------------');

// CODEWARS:
// https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript

function hero(bullets, dragons){
  if (bullets >= dragons * 2) {
   return true }
   else {
    return false;
   }
}

  console.log(hero(10, 5), true);
  console.log(hero(7, 4), false);
  console.log(hero(4, 5), false);
  console.log(hero(100, 40), true);
  console.log(hero(1500, 751), false);
  console.log(hero(0, 1), false);