/* loops are a great way for us to repeat a set of steps
If you have something you want to do multiple times in a row or untill something happens then use loops !!!


Two general flavors:
    while loops
    for loops

*/
// let i = 0;
// while (i <= 10){
//     console.log(i);
//     i++; // i = i + 1
// }

/* a single time through a loops is called an interation
While loops will continue untill the condition becomes falsey
Remember zero is falsey
*/

// while (i){
//     console.log('banana');
//     i--;
// }

// let x = -1
// let y = 5
// while (x <= 5){
//     x++
//     y += 4
//     console.log(y)
// }

/* There is another while loop called a do while loop
a doo while loop will always exacute at least once

do{
    code
} while(condition);
 */

/* the other kind of loop is the for loop
for loops are esentially fancy while loops
their syntax is more complicated, but also more commonly used
Less likely to set up an infinite loop
*/

// for(let j = 1; j <= 5; j++){
//     console.log(`j = ${j}`)
// }

/* With either form if your condition is going to be base d on a number, you probobly want to use
less than, grater than, or their variants
equal to and not equal to ar likley going to be missed and make an infinite loop

you'll also find that you will sometimes be off by one
frequently the sollution is just to change between less than and less than or equal too and vice versa
*/

/* You can skip elements of the for loop declaration
    For example:

    let i = 0
    for(; i < 3; i ++){
        console.log(i);
    }

    or

    for(let i = 0; i < 3;){
        console.log(i++);
    }

    or

    Let i = 0
    for(; i < 3;){
        Console.log(i++);
    }

    or

    for(;;){
        Console.log    // THIS IS AN INFINITE LOOP DUM DUM
    }
*/

/* BREAK as a command
Imeditatly exits from a loop and advances to the next part of the code

BREAKs act as failsafes if you believe you are going to make an infinite loop
*/

// Example 1: sum numbers from a user

// let sum = 0
// while(true){
//     let value = +prompt('Enter a number','');

//     if(!value){
//         break;
//     }

//     sum += value;
// }

// console.log(`Sum equals ${sum}`)

// Example 2: add numbers from one to a given value, WITH a timeout function
// let sum = 0
// let max = +prompt('Add numbers from 1 to what?', '');
// let now = Date.now();
// console.log(now)

// for(let i = 1; i <= max; i++){
//     sum += i;

//     if(Date.now() > now + 2000){
//         alert('uwu uh oh there wus an isuwe OwO');
//         break;
//     }
// }

// console.log(sum)

/* continue is like a lighter version of break
Instead of ejecting out of the loop it just skips to the end of the current itteration
*/

//Example: Print just odd numbers from 1 - 20

// for(let i = 0; i < 21; i++){
//     if (i % 2 == 0){
//         continue;
//     }
//     console.log(i);
// }

// Loops Pt2 AKA Arrays



/* ARRAYS
in programing an array is a collection of values
Specifically it is an ordered collecton of values

let ArrayName = [item1, item2, item3, item4];

to make an empty array:
    let FakeArray1 = new Array()

    let FakeArray2 = [];
*/

// let Fruits = ['Apples', 'Bannana', 'Cantalope', 'Durian', 'Leychess'];
// console.log (Fruits);
// console.log (Fruits [3])

// Fruits[3] = 'Watermellon'

// console.log (Fruits)

// // add strawberries

// Fruits[5] = 'Strawberry';

// console.log (Fruits);

// // finsout how many elements are in an array
// console.log (Fruits.length);

// // Add an element to the end
// Fruits[Fruits.length] = 'Dragonfruit'
// console.log (Fruits);

// Fruits[Fruits.length] = 'Blueberry'
// console.log (Fruits)

// /* An Array can store elements of any kind
// Including mixing types in the same array
// */

// let ExampleArray = ['Apple', 34, true, function () {console.log('hello')}, 'Array']
// console.log (ExampleArray)

// // do math with the values in an array
// // Function to calculate distance between points on the x-y array

// let obj1 = [3, 5];
// let obj2 = [7, 11];

// let distance = Math.sqrt((obj2[0] - obj1[0])**2 + (obj2[1] - obj1[1])**2)
// console.log(distance)

// let primes = [2, 3, 5, 7, 11, 13, 17, 19]
// let i = 0
// while (i < primes.length){
//     console.log(primes[i]);
//     i++;
// } 

// console.log (primes.at(-1));

// Array methods

//  .pop() - finds the last element of the array, returns it, and deletes it from the array

// console.log(primes)
// console.log(primes.pop())
// console.log(primes)

// find sum of all primes under 20

// let sum = 0
// while (primes.length){
//     sum += primes.pop()
//     console.log(primes)
// }
// console.log(sum)

// the opposite of .pop() is .push()
// .push() adds an element to the end of the array

// let fruits = ['Apples', 'Bannana', 'Cantalope', 'Durian', 'Leychess'];

// fruits.push('wattermellon');

// console.log(fruits);

// the problem with these two is that you can only modiffy the end of the array
// Different methods are needed for the begining of the array

// .shift() - .pop() but at the begining

// console.log(fruits.shift());
// console.log(fruits);

// // .unshift() - .push() but at the start

// fruits.unshift('Appricot');
// console.log(fruits);

// // push and unshift can add multiple elements at once

// fruits.unshift('Oranges', 'Lemons');
// console.log(fruits);

// fruits.push('Apple', 'Peach');
// console.log(fruits);

// using loops with arrays.
// Here's an old style of printing all the array values

// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }

//there is a different kind of way to do it, with a for ... of loop:

// for ( let fruit of fruits) {
// console.log(fruit)
// }

/* one thing to note about arrays
the array.length value returns the value of the las index + 1
It is not counting how many values are in the array
*/

// let grades = [71, 89, 65, 56, 31, 100, , 0, 89, 100];
// console.log(grades);
// console.log(grades.length);

// let BadArray = [];
// BadArray[314] = 'pie';
// console.log(BadArray.length);
// console.log (BadArray);

/* Multi Dimensional Arrays
An array made up of multiple arrays*/
// An array holding x,y coordinate of 5 points
//(3,4), (1,2), (9,15), (37,11), (215,1)
let coordinates = [
    [3,4],
    [1,2],
    [9,15],
    [37,11],
    [215,1]
 ]
console.log(coordinates);
console.log(coordinates[4]);
console.log(coordinates[4][0]);
coordinates[4][0] = 21
console.log(coordinates[4][0]);

/* Methods are fnctions tied to a dattype

e.g. arr.pop() is the pop method

-We've learned 4 array methods: pop, shift, push, unshift
- arr.length is not technically a method due to lack of ()
arr.at() works like [] notation, but utilizes negatives
ex: arr = [a,b,c,d,e,f,g] => arr.at(-2) => f

NEW ARRAY METHODs:
.join()
    allow you to combine the terms of an array into a string
    You can specify the seperator

example:

let arrayForStrig = ['A', 'B', 'C', 'D']
console.log(arrayForStrig.join()) // Single string with commas
console.log(arrayForStrig.join('o.O')) // o.O relplaces the comma

concat() => concatenate, combine arrays
 Example:

let MikesSons = ['Greg', 'Peter', 'Bobby']
let CarolsDaughters = ['Marcia', 'Jan', 'Cindy']

let BradyBunch = MikesSons.concat(CarolsDaughters)
console.log(BradyBunch)

Finally:
 .Splice() and .Slice()

 .Splice() adds new items to the array
 .Slice() removes  piece of an array

Example:*/

let fruits = ['Apple', 'Oranage', 'Apple', 'Kiwi']
fruits.splice(2,0, 'Mango', 'Papaya')
console.log(fruits)

// .splice(targetIndex, How many items to remove after the insertion, Stuff to be added)

// You can acctually use splice to delete items from the middle of an array

fruits.splice(4,1)
console.log(fruits)

// .slice() Returns a new array from a section, or slice of an old array

let fruitsILike = [fruits.slice(1,5)]
console.log(fruitsILike)

// .slice(Index to start, Index to end but not use)


/* strings behave a lot like arrays and have some simmilar methods

strings.length => length of string

*/
 
let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
console.log(alpha.charAt(2));
console.log(alpha.at(7));
console.log(alpha[12]);

/* .at() allows negative indeces
If you put something in that doesnt exist, like: 
alpha[28] => Undefined
alpha.carAt => ''

ALSO: observe this example */

alpha[1] = 'Q'
console.log(alpha) // [] are read only, can not change

/* 3 methods to remove parts of a string

.Splice( start, end)
.substring( start value, end value)
    values les than 0 are treaed as zero
If end value is left out of either of these it goes to the end of the string

.substr(start, length)*/

// let testString = 'the quick brown fox jumped over the lazy dog'

// let string1 = testString.slice(3,10)
// let string2 = testString.substring(3,10)
// let string3 = testString.substr(3,10)

// console.log(string1)
// console.log(string2)
// console.log(string3)

/* two more method
.toUpperCase() -> Makes string all uppercase
.toLowerCase() -> Makes string all lowercase
*/

let testString2 ='THe QuicK BROwn fOx JUMped OVeR The LaZy DOg'

console.log(testString2.toLowerCase())