let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

// - Convert the above array "words" into an array of length of word instead of word.
let wordsLngthArr = words.map((arr) => {
  return words.length;
})
// - Create a new array that only contains word with atleast one vowel.

// - Find the index of the word "rhythm"
words.indexOf("rhythm");
// - Create a new array that contians words not starting with vowel.

// - Create a new array that contianse words not ending with vowel

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
let sumArray = function(array){
  return sum;
}
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

// - Create a new array that contains only even numbers
function isEven(num){
  return num % 2 === 0;
}
let evenNumber = numbers.filter(isEven);
// - Create  a new array that contains only odd numbers.
function isOdd(num){
  return num % 2 === 0;
}
let oddNumber = numbers.filter(isOdd);
// - Create a new array that should have true for even number and false for odd numbers.
function oddOrEven(num){
  if ( num % 2 === 0){
    return true;
  } else{
    return false;
  }
}
let evenOrOddNum = numbers.map(oddOrEven);
// - Sort the above number in assending order.
function compareFunction(a , b){
  return a-b;
}
let ascOrder = numbers.sort(compareFunction);
// - Does sort mutate the original array?
 //yes sort mutates the original array.
// - Find the sum of the numbers in the array.
 let sumOfNum = numbers.reduce((acc,cv)  => {return acc + cv});
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
