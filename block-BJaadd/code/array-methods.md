Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
      
      -Parameter:accepts an optional parameter seperater 
      -Return: returns a string with all the elements joined all together
      -Example:
      ```js
      let numbers = [1, , 3 ,4 , 7.8 , 10];
       numbers.join();//"1,,3,4,7.8,10"
       numbers.join('_');//"1__3_4_7.8_10" 
       let color = ["red", "orange" ,"aqua" ,"blue"];
       color.join("-");//"red-orange-aqua-blue" 
      ```
      -`join`- joins all the element of the arr and returns a string with all the elements joined together.
      -
3. `flat`

      -Parameter: accepts an optional parameter depth which specifies  how deep a nested array structure should be flattened
      -Return: a new array with the sub array elements concatenated into it.
      -Example:
      ```js
         let num = [1 ,2 ,3, 5 , [10, 12 , 15 ,56,[231 , 456 , 23]]];
         num.flat();//Array(9) [ 1, 2, 3, 5, 10, 12, 15, 56, (3) […] ]
        num.flat(4);//Array(11) [ 1, 2, 3, 5, 10, 12, 15, 56, 231, 456, … ]
        let feuits =[ "banana", "apple" , "grapes", ["berry", ["pineapple",["orange"]]]] ;
        feuits.flat(Infinity);//Array(6) [ "banana", "apple", "grapes", "berry", "pineapple", "orange" ]
      ```
      -`flat` it concate the elements of sub array into one array and returns the value.
      -it does not mutate the original array
4. `push`
   
      -Parameter: element (n) ehich adds to the end of the array
      -Return: a new array with the added eleemt at the end
      -Example:
      ```js
      const flowers = ["rose" , "jasmine" , "lilly" , "sunflower"];
      flowers.push("habiscus");//5
      console.log(flowers);//Array(5) [ "rose", "jasmine", "lilly", "sunflower", "habiscus" ]
      flowers.push("black-rose" , "waterlitty" , "lotus");//8
      console.log(flowers);//Array(8) [ "rose", "jasmine", "lilly", "sunflower", "habiscus", "black-rose", "waterlitty", "lotus" ]
      ```
      -`push` adds new element to the last of the current array and returns new array with the added element.
      -it  mutates the original array
5. `indexOf`

      -Parameter: searchIndex
      -Return: The first index of the element in the array; -1 if not found.
      -Example:
      ```js
      const array = ["a", "b", "a", "c", "a", "d"];
      array.indexOf();//-1
      array.indexOf("d");//5
      array.indexOf("a" , 2);//2
      ```
      -`indexOf` - it accepts the parameter searchIndex and returns the first index at with the given element is present in the array or returs -1 if not found
      -it does not mutate the original array
6. `lastIndexOf`
      -Parameter: searchIndex
      -Return: The last index of the element in the array; -1 if not found.
      -Example:
      ```js
      const array = ["a", "b", "a", "c", "a", "d"];
     array.lastIndexOf("c");//3
     array.lastIndexOf("a" , 2);//2
     array.lastIndexOf(" ");//-1 
      ```
      -`indexOf` - it accepts the parameter searchIndex and returns the last index at which the given element is present in the array or returs -1 if not found
      -it does not mutate the original array
7. `includes`
    -Parameter: searchElement and fromIndex(optional)
    -Return:  boolean value which is true if the value searchElement is found within the array (or the part of the array indicated by the index fromIndex, if specified).
    -Example:
    ```js
     let num = [1 ,2 ,3, 5 , [10, 12 , 15 ,56,[231 , 456 , 23]]];
    num.includes(10);//false
    num.includes(5);//true
    num.includes(2 , 1);//true
    ```
    -`includes` -method determines whether an array includes a certain value among it,  returning true or false .
    -it does not mutate the original array
8. `reverse`

    -Parameter: it does  not accept any parameter
    -Return: it reverses the original array in its same place
    -Example:
    ```js
    let flowers = [ "rose", "jasmine", "lilly", "sunflower", "habiscus", "black-rose", "waterlitty", "lotus" ];
    flowers.reverse();// [ "lotus", "waterlitty", "black-rose", "habiscus", "sunflower", "lilly", "jasmine", "rose" ]
    arr = [ 1234 , 5678, 8765];// [ 1234, 5678, 8765 ]
    arr.reverse();//[ 8765, 5678, 1234 ]
    ```
    -`reverse` -The reverse() method reverses an array in place and returns the reference to the same array, it also mutates the original array.
      -it  mutates the original array
9. `every`

    -Parameter: callback function , array , index , element
    -Return: true if the cb function returns truthy value for every array element else returns false
    -Example:
    ```js
     function isEven(num){
       return num %2 === 0;
     };
     [1, 2 , 4 ,6 ,5 ,11].every(isEven);//false
     [2 , 4 , 6 ,10].every(isEven);//true
     function isGreater(num,index,arr){
       return num >=3;
      };
     [3 , 5 , 7 , 9 , 10].every(isGreater);//true
    ```
    -`every` - true if the cb function returns truthy value for every array element else returns false if any one even returns false.
    -it does not mutate the original array
10. `shift`
    -Parameter: does not accept any parameter 
    -Return: the removed element from the current array and undefined it the array is empty
    -Example:
    ```js
     const myFish = ["angel", "clown", "mandarin", "surgeon"];
     myFish.shift();//"angel"
     let numGrester = [ 21 , 32, 34 , 12]
     numGrester.shift();//21 
​     let name = ["john", "arya" , "bran"]
      name.shift();//"john
    ```
     `shift` The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
     -it  mutates the original array
11. `splice`
   
   -Parameter:
    -Return:
    -Example:
    ```js
    ```
    -`splice`
     -it  mutates the original array
12. `find`
    
    -Parameter: callback function , array , index
    -Return: whenever the value will be there in the array it will return that vslue else will return undefined
    -Example:
    ```js
    let number = [ 1, 7 ,10 , 34]
    function isNum(num){
      return num ===12;
    }
    number.find(isNum);//undefined
    function isEven(num){
      return num %2 === 0;
    }
    number.find(isEven);//10
​
    ```
    -`find` - it returns only one value at a time .  whenever the value will be there in the array it will return that vslue else will return undefined.
     -it does not mutate the original array
13. `unshift`

    -Parameter: element (n) which adds to the start of the array
      -Return: a new array with the added element at the start
      -Example:
      ```js
      const lightColors = ["lightblue" , "lightGrey" , "lightGreen"];
      console.log(lightColors.unshift("lightRed"));//[ "lightred", "lightblue", "lightGrey", "lightGreen" ]
     let  arr = [1,4 ,6 ,20];
      console.log(arr.unshift("0"));// [ 1, 4, 6, 20 ]
​      arr.unshift(0 , 23) ;//[ 0, 23, "0", 1, 4, 6, 20 ]     
      ```
      - `unshift` adds new element to the start  of the current array and returns new array with the added element.
     -it  mutates the original array
14. `findIndex`

    -Parameter: callback function , array , index
    -Return: The index of the first element in the array that passes the test. Otherwise, -1
    -Example:
    ```js
   let number = [ 1, 7 ,10 , 34]
    function isNum(num){
      return num ===12;
    }
    number.find(isNum);//-1
    function isEven(num){
      return num %2 === 0;
    }
    number.findIndex(isEven);//2
    ```
    -`findIndexethod`returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
     -it does not mutate the original array
15. `filter`

    -Parameter: callback function , array , index
    -Return: if the callback function returns true than the value passed will be stored into a new array else will not.
    -Example:
    ```js
    let number = [ 1, 7, 10, 34 ];
    number.filter (isEven);// [ 10, 34 ]
    number.filter(isOdd);//[1 , 7]
    ```
    -`filter`it accepts a callback function and if the callback function returns true than the value passed will be stored into a new array else will not.
     -it does not mutate the original array
16. `flat`

    -Parameter: accepts an optional parameter depth which specifies  how deep a nested array structure should be flattened
      -Return: a new array with the sub array elements concatenated into it.
      -Example:
      ```js
         let num = [1 ,2 ,3, 5 , [10, 12 , 15 ,56,[231 , 456 , 23]]];
         num.flat();//Array(9) [ 1, 2, 3, 5, 10, 12, 15, 56, (3) […] ]
        num.flat(4);//Array(11) [ 1, 2, 3, 5, 10, 12, 15, 56, 231, 456, … ]
        let feuits =[ "banana", "apple" , "grapes", ["berry", ["pineapple",["orange"]]]] ;
        feuits.flat(Infinity);//Array(6) [ "banana", "apple", "grapes", "berry", "pineapple", "orange" ]
      ```
      -`flat` it concate the elements of sub array into one array and returns the value.
      -it does not mutate the original array
17. `forEach`
     
      -Parameter:
    -Return:
    -Example:
    ```js
    ```
    -`includes`
     -it does not mutate the original array 
    
18. `map`

     -Parameter: callback function , array , index
    -Return: a new array with each element being the result of the callback function.It always returns the same size of array
    -Example:
    ```js
    number = [ 1, 7, 10, 34 ]
    function double(number){
     return number * 2;
    };
    number.map(double);// [ 2, 14, 20, 68 ]
    function half(number){
     return number / 2;
    };
    number.map(half);// [ 0.5, 3.5, 5, 17]
    number.map(isEven);//[false , false ,true , true]

    ```
    -`map` method creates a new array populated with the results of calling a provided function on every element in the calling array.
     -it does not mutate the original array
19. `pop`

      -Parameter:
    -Return:
    -Example:
    ```js
    ```
    -`includes`
20. `reduce`

      -Parameter:
    -Return:
    -Example:
    ```js
    ```
    -`includes`
     -it does not mutate the original array
21. `slice`

    -Parameter:it acceptd optional parameter as start and end
    -Return: A new array containing the extracted elements.
    -Example:
    ```js
    let name = ["john", "arya" , "bran"]
    name.slice(1);//["bran" ]
    name.slice(0 , 2);//[ "arya", "bran" ]
    let number = [ 1, 7 ,10 , 34];
    number.slice(3);// [ 34 ]

    ```
    -`slice` A new array containing the extracted elements.
     -it does not mutate the original array
22. `some`
   
    -Parameter:callback function , array , index , element
    -Return: true if  cb function returns truthy value for any one of the array element else returns false
    -Example:
    ```js
     function isEven(num){
       return num %2 === 0;
     };
    [1, 2 , 4 ,6 ,5 ,11].some(isEven);//true 
    [1 , 5 , 7 ,9].some(isEven);//false 
     function isGreater(num,index,arr){
       return num >=3;
      };
    [3 , 5 , 7 , 9 , 10].some(isGreater);//true 
    ```
    -`some` - The some() method tests whether at least one element in the array passes the test implemented by the provided function. 
     -it does not mutate the original array