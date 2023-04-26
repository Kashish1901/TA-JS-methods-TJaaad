Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
 
  - Parameter:
  - Return:a new string converted the string to uppercase
  - Example:
    ```js
    let username = "john";
    console.log(username.toUpperCase();) //"JOHN"
    let message = " its all about learning";
    console.log(message.toUpperCase();) // " ITS ALL ABOUT LEARNING"
    let name = "arya" 
    console.log(name.toUpperCase();) //"ARYA"
    ```
  - `toUpperCase` - it returns the value of the called string converted  to uppercase 

3. `toLowerCase`

 
  - Parameter:
  - Return:a new string converted the string to lowercase
  - Example:
    ```js
    let username = "JOHN";
    console.log(username.toUpperCase();) //"john"
    let message = " ITS ALL ABOUT LEARNING" ;
    console.log(message.toUpperCase();) // " its all about learning"
    let name = "ARYA"; 
    console.log(name.toUpperCase();) //"arya"
    ```
  - `toUpperCase` - it returns the value of the called string converted  to lowercase

4. `trim`

 - Parameter: no parameter 
  - Return: returns new string after removing whitespace from both start and end of the string, without modifying
  - Example:
    ```js
   - let age = "   21" 
    age.trim(); // "21"
   - let greetings = "  hello  World!     ";
   greetings.trim();//"hello  World!"
   - let quote = " its trim obj     ";
   quote.trim();//"its trim obj"
    ```
  -`trim` - it does not accept any parameters and returns new string after removing whitespace from both start and end of the string, without modifying. Whitespace here referes to the blank spaces 

5. `trimEnd`

 - Parameter: no parameter 
  - Return: returns new string after removing whitespace from end of the string, without modifying
  - Example:
    ```js
  - let age = "   21" 
    age.trim(); // "  21"
   - let greetings = "  hello  World!     ";
   greetings.trim();//"  hello  World!"
   - let quote = " its trim obj     ";
   quote.trim();//" its trim obj"
    ```
  - `trimEnd` - it does not accept any parameters and returns new string after removing whitespace from end of the string, without modifying. Whitespace here referes to the blank spaces 

6. `trimStart`

 - Parameter: no parameter 
  - Return: returns new string after removing whitespace from  start  of the string, without modifying
  - Example:
    ```js
    - let age = "   21 " 
    age.trim(); // "21 "
   - let greetings = "  hello  World!     ";
   greetings.trim();//"hello  World!  "
   - let quote = " its trim obj     ";
   quote.trim();//"its trim obj  "
    ```
  - `trimStart`- it does not accept any parameters and returns new string after removing whitespace from  start  of the string, without modifying. Whitespace here referes to the blank spaces 

7. `concat`

 - Parameter: different strings for concatenating in a string.
  - Return: new string of the combined or concatenated strings.
  - Example:
    ```js
    let str1 = "hello"
    let str2 = "world!"
    console.log(str1.concat(str2)); //"helloworld!"
    console.log(str1.concat(' ' , str2)); //"hello World!"
    console.log(str2.concat(' ,' , str1)); // "World!,hello"
    ```
  - `concat`- concat concats different strings and result a new string with the combined values of both the concated strings
8. `endsWith`

 - Parameter:
   - searchingstring means the character to be searched for at the end of the string
   - endposition (optional)
  - Return: true if the given characters are found at the end of the string else false
  - Example:
    ```js
  let str1 = "hello"
  console.log(str1.endsWith('o'));//true
  console.log(str1.endsWith('l'));//false
  let sentense = "its all about learning softwarre dev" ;
  console.log(sentense.endsWith('ev' , 19));//false
    ```
  - `endsWith`- accepts searchingstring(string datatype) and returns true or false based on the occerance of characters

9. `includes`

 - Parameter:
   - searchingstring
   - position(optional)
  - Return: returns true when the searchstring is included within the string somewhere and if not then false
  - Example:
    ```js
    let schoolName = " AltCampus" 
    schoolName.includes('c');//false
    schoolName.includes('C');//true
    schoolName.includes('u');//true
    ```
  - `includes`- accepts two parameters as searching string and position(optional) and returns true when the searchstring is included within the string somewhere and if not then false.This  method performs a case-sensitive search

10. `indexOf`

 - Parameter:
  - searchstring
  - position 
 - Return: the index of 1st occurance of searchstring or -1 if not found
 - Example:
    ```js
    let info = "its all about AltCampus" 
    info.indexOf('all')//4
    info.indexOf('about' , 12)//-1
    info.indexOf('sye')//-1
    info.indexOf('' , 10)//10
    ```
 - `indexOf` - a case sensitive method , that accepts a parameter searchstring and returns index of 1st occurance of searchstring or -1 if not found

11. `lastIndexOf`

 - Parameter:
  - searchstring
  - position 
 - Return: the index of last occurance of searchstring or -1 if not found
  - Example:
    ```js
     let info = "its all about AltCampus" 
    info.indexOf('all')//4
    info.indexOf('about' , 12)//8
    info.indexOf('sye')//-1
    info.indexOf('' , 10)//10
    ```
  - `lastIndexOf` - a case sensitive method , that accepts a parameter searchstring and returns index of last occurance of searchstring or -1 if not found

12. `padEnd`

 - Parameter:
  - targetlength
  - padstring
 - Return: new string with the targetlength with the padstring or padding applied at the end of the current string
 - Example:
    ```js
    "hello world".padEnd(32 , 'xz');//"hello worldxzxzxzxzxzxzxzxzxzxzx"
    "hello".padEnd(12);//"hello       " 
    "this is bran".padEnd(23 , "..");//"this is bran..........."

    ```
  -  `padEnd` - this method pads up the current string with the given string so that the resulting string reaches the target length/padding is always added to the end

13. `padStart`

 - Parameter:
  - targetlength
  - padstring
 - Return:  new string with the targetlength with the padstring or padding applied at the start of the current string
 - Example:
    ```js
  "hello world".padStart(32 , 'xz');//"xzxzxzxzxzxzxzxzxzxzxhello world"
   "hello".padStart(12);//"       hello"
   "altcampus".padStart(21, "institute");//"instituteinsaltcampus"

    ```
 - `padStart` - this method pads up the current string with the given string so that the resulting string reaches the target length/padding is always added to the start


14. `repeat`

 - Parameter: 
    count which tells number of times the string to be repeated 
  - Return: A new string containing the specified number of copies of the given string.
  - Example:
    ```js
    "abcd".repeat(10);//"abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd" 
    "hello".repeat(3.1);//"hellohellohello" 
    "i am Bram".repeat(9/3);//"i am Brami am Brami am Bram" 
    "hello world!".repeat();//"" 
    ```
  - `repeat` - returns a new string containing the specified number of copies of the given string concated together

15. `replace`

 - Parameter: pattern and replacement
  - Return: A new string with  all matches of the pattern replaced by the specified replacement.
  - Example:
    ```js
   const mssg =" how to learn web development"; 
   mssg.replace('web' , 'software');//" how to learn software development" 
   mssg.replace('' , "__");//"__ how to learn web development" 
    ```
  - `replace` accepts two parameter i.e. pattern and replacement and returns A new string with  all matches of the pattern replaced by the specified replacement.

16. `slice`

 - Parameter: indexStart and indexEnd
  - Return: new string with the extracted portion of the string
  - Example:
    ```js
    const mssg =" how to learn web development" ;
    mssg.slice(21);//"elopment"
    mssg.slice(-2);//"nt"
    mssg.slice(4 , 10);//" to le" 

    ```
  - `slice`  - The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

17. `split`
 - Parameter: indexStart and indexEnd
  - Return:
  - Example:
    ```js
    ```
  - `split`

18. `substring`

 - Parameter: indexStart and indexEnd
  - Return: A new string containing the specified part of the given string.
  - Example:
    ```js
    "Hello World".substring(1, 8);//"ello Wo"
    "Hello World!".substring(5 , 25);//" World!" 
    const mssg =" how to learn web development";
    mssg.substring(12 , 10);//"ar"  
    ```
  -`substring`-  accepts a two parameters indexstart and indexend substring() extracts characters from indexStart up to indexEnd  but not including indexEnd.
