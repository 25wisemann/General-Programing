// // These are notes on conditionals in programing

// /* A conditioal is basicaly an if and then statement
// We will have more complicated examples, but all rely on the idea:
//     you are checking if a condition is true, then acting based on that condition
// They rely on some form of comparrison
// */

// /*
// Comparrisons in JavaScript look like math equations to some extent
// a < b (is a less than b)
// a > b (is a grater than b)
// a == b (is a equal to b)
// a <= b (less than or equal)
// a >= b (grater tha or equal)
// */

// // Examples:
// let a = 5;
// console.log(5 < 3);
// console.log(5 > 3);
// console.log(a == 5);
// console.log(a == "5");

// // JavaScript aslo has a tripple equal sign, for strick equality.
// // Meaning that is a equal to b and have the same data type.
// console.log(a === '5')
// console.log(a === 5)

// // the last symbol is "!"
// // "!" means not

// console.log(a != 3);

// // You can compare strings, just like numbers
// console.log('Badin' > 'Ross');

// /* rules for string comparission (Assuming greater than)
// 1. Compare the first characters of each string
//     If the first character of the first string is greater than the first character of the first string return true
//     If less than of the second string, return false
//     If equal, continue to next step
// 2. Compare secnd character of string, (as described above)
// 3. Continue untill either strng ends
// 4. If both are equal and have the same length, retur flase (equal)
// 5. If one is longer, it is greater
// */

// console.log('B' > 'R');
// console.log('b' == 'B');

// //Now that we know how comparrisions work we can do consitionals

// //An If statement allows you to gate code behind a condition being true
// if (3 < 5){
//   console.log(' 3 is less than 5');
// }

// //If you want to make a choice between options, you have other structures that are useful

// if (7 < 5){
//     console.log('7 is less than 5');
// } else {
// console.log('7 is not less than 5');
// }
// // A test for equality. Check if TestNumber is greater, less, or equal to 6
// // Nested if else
// let TestNumber = 2;
// if (TestNumber > 6){
//     console.log(`${TestNumber} is greater than 6`);
// } else {
//     if(TestNumber < 6){
//         console.log(`${TestNumber} is less than 6`);
//     } else {
//         console.log(`${TestNumber} is equal to 6`);
//     }
// }

// // there are two better ways
// // If-ElseIf-Else
// let testNumber = 8
// if(testNumber > 6){
//     console.log(`${testNumber} is greater than 6`)
// } else if (testNumber == 6){
//     console.log(`${testNumber} is equal to 6`)
// } else {
//     console.log(`${testNumber} is less than 6`)
// }

// Make a grade generator. Make variable test grade
// 0-59 F
// 60-69 D
// 70-79 C
// 80-89 B
// 90-100 A

// let TestGrade = 5
// if (TestGrade <= 59){
//     console.log('F');
// } else if (TestGrade <= 69){
//     console.log('D');
// } else if (TestGrade <= 79){
//     console.log('C');
// } else if (TestGrade <= 89){
//     console.log('B');
// } else {
//     console.log('A');
// } 

/* Logical Opperators:
 modify or combine multiple logic statements
 AND: &&  -> Will return true only when both statements are true
 OR: ||   -> Will return true when either statment is true
 NOT: !   -> Flips the true/false values
 */

 // A cholthing selector based on weather
 // Two variables: Temp and Percipitation
// let temp = 80;
// let Percipitation = 1;

/* List of options
tshirt and pants (60-75)
tshirt and short (>=75)
long sleeve shirt and pants (>=45)
sweatshirt and pants (<45)
jacket (percipitation)
*/

// if (temp >= 75 && Percipitation == 0){
//     console.log('shirt and shorts')
// } else if (temp >= 60 && Percipitation == 0){
//     console.log('Shirt and pants')
// } else if (temp >= 45 && Percipitation == 0){
//     console.log('Long sleeve shirt and pants') 
// } else if (temp < 45 && Percipitation == 0){
//     console.log('Sweatshirt and pants')
// } else if (temp >= 75 && Percipitation == 1){
//     console.log('Jacket and Shorts')
// } else console.log('Jacket and Pants');

// You must restate variable each time

/* Java script usees "truthy" and "falsy" values
Truthy: Will be treated the same as true
The following values are truthy:
    True
    Any not empty string ('Including false)
    Any number other than 0
    arrays
    functions
    objects

The folowing values are falsey
    False (not a string)
    0 (number)
    0n BigInt
    empty string
    null
    undefined
    not a number (NaN)

OR -> finds the first truthy value:
    for example:

    let testVariable = null || 'banana' || 1 || false;
    console.log(testVariable)

    This will say 'banana'

    let testVariable = null || 0 || undefined || false;
    console.log(testVariable)

    This will say 'false' (last falsey value)

    This can be used if yo have a form that ust be filled out
        let name = `${USER_INPUT}` || 'Unkown Name'
    Can also be used to set up conditional alerts or functions

        let PrintSuccess = true;
        PrintSuccess || alert('DID NOT PRINT');
        !PrintSuccess || alert('Printed Successfully);
*/

/* 
&& finds th first falsey value
    Evaluates from left to right
    converst vale to a boolean based on truthy/falseey values
    stops when it gets to the first false value
    if no falsey, returns last value
*/

// console.log(true && true && true);
// console.log(true && 0 && true && true);
// console.log(true && "false" && 5 && 3.14);

// && has a higher Precedence than ||
// (a && b || c && d) == (a && b) || (c && d)

// DO NOT DO THIS. SERIOUSLY. DON'T. 
// some poeple use && instead of if
// let(z = 1)
// (z > 0) && alert('x greater than zero!');

/*
! takes a single argument or value and does the following
    1. converts the value to a boolian type
    2. returns the opposit of the result of 1
*/

console.log(!NaN);
console.log(!1);

// Because of this ome pople will use !! to convert it to a boolian value

console.log(!!NaN);

// can also be done with Boolean()

console.log(Boolean(false));

/* if we have a lot of possible test cases we want to check it is better to use a switch than an if-else-if
Basic structure:
    Switch(expression){
    case x:
        code
        break
    case y:
        code
        break
    case z:
        code
        break
    default:
        code
    }

The switch expression is evaluated
the valuse of the expresion is compared with the values with each case
If there is a match, the code for that case activates
If no match default case activates
*/

// There is something called the git day method
// Returns the week day as a number between 0 and 6
// We'll use  aswitch to convert this output to an actual day

let day

switch(new Date().getDay()){
    case 0:
        day = 'sunday'
        break
    case 1:
        day = 'monday'
        break
    case 2:
        day = 'teusday'
        break
    case 3:
        day ='wednesday'
        break
    case 4:
        day = 'thursday'
        break
    case 5:
        day = 'friday'
        break
    case 6:
        day = 'saturday'
        break
    default:
        console.log('Not a Date')
}

console.log(day)

 console.log(console.log(1) && console.log(2));

 let age = 70

 if (age >= 14 && age <= 90){
    console.log('yippe')
 } else {
    console.log('no Yip')
 }

 
 if (!(age >= 14 && age <= 90)){
    console.log('yippe')
 } else {
    console.log('no Yip')
 }