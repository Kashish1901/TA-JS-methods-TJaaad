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
function findLongestWord(array){
  return [...array].sort((a, b) => a.length- b.length).pop()
}

findLongestWord(words)
// - Convert the above array "words" into an array of length of word instead of word.
let wordsLngthArr = words.map((w) => w.length);
// - Create a new array that only contains word with atleast one vowel.
function checkvowel(words){
  return words.toLowerCase().includes("a")||
  words.toLowerCase().includes("e")||
  words.toLowerCase().includes("i")||
  words.toLowerCase().includes("o")||
  words.toLowerCase().includes("u")
}

words.filter((w) => checkvowel(w) )
// - Find the index of the word "rhythm"
words.indexOf("rhythm");
// - Create a new array that contians words not starting with vowel.
let notStartingWithVowels = words.filter((w) => !checkvowel(w[0]));
// - Create a new array that contians words not ending with vowel
let notEndingWithVowels = words.filter((w) => !checkvowel(w[w.length - 1]));


let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
let sumArray = function(array){
  return array.reduce((acc ,cv) => {
    acc = acc +cv;
    return acc;
  } , 0);
  }
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multipliedByThree = numbers.filter((num) => num % 3 === 0);
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
let ascOrder = [...numbers].sort(compareFunction);
// - Does sort mutate the original array?
 //yes sort mutates the original array.
// - Find the sum of the numbers in the array.
 let sumOfNum = numbers.reduce((acc,cv)  => {return acc + cv});
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(array){
  return avg = numbers.reduce((acc ,cv) => {
  acc = acc +cv;
    return acc  ;
  } , 0)/array.length;
}

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
function averageWordLength(words){
  return  words.map((w) => w.length).reduce((acc ,cv) => {
      return acc + cv;
    } , 0)/words.length;
  }