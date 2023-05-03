let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of name key from persons array
let peopleName = [];

for (let people of persons){
  peopleName.push(people.name);
 
}

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = [];

for (let people of persons){
  peopleGrade.push(people.grade);
 
}
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = [];

for (let people of persons){
  peopleSex.push(people.sex);
 
}
// Log the filtered named of people in peopleName that starts with 'J' or 'P'

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'

// Log all the filtered male ('M') in persons array
console.log(persons.filter('M'));
// Log all the filtered female ('F') in persons array
console.log(persons.filter('F'));
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

// Log all the even numbers from peopleGrade array
console.log(peopleGrade.filter((grade) => grade % 2 ===0
));
// Find the first name that starts with 'J' in persons array and log the object
persons.find(persons.name.startWith("J"));
// Find the first name that starts with 'P' in persons array and log the object

// Find the first name that starts with 'J', grade is greater than 10 and is a female

// Filter all the female from persons array and store in femalePersons array
let femalePersons = peopleSex.filter('F');
// Filter all the male from persons array and store in malePersons array
let malePersons = peopleSex.filter('M');
// Find the sum of all grades and store in gradeTotal
let gradeTotale = peopleGrade.reduce((acc , cv) => {
  return acc + cv;
} , 0);

// Find the average grade

// Find the average grade of male

// Find the average grade of female

// Find the highest grade

// Find the highest grade in male

// Find the highest grade in female

// Find the highest grade for people whose name starts with 'J' or 'P'

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
console.log(peopleGrade.sort((a,b) => {a-b}));
// Sort the peopleGrade in descending order
peopleGrade.sort((a,b) => {b-a});
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
[...peopleGrade].sort((a,b) => {b-a});
// Sort the array peopelName in ascending `ABCD..Za....z`
peopleName.sort((a,b) => {a-b});
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
[...peopleName].sort((a,b) => {a-b});