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

let TestGrade = 478
if (TestGrade <= 59){
    console.log('F');
} else if (TestGrade <= 69){
    console.log('D');
} else if (TestGrade <= 79){
    console.log('C');
} else if (TestGrade <= 89){
    console.log('B');
} else if (TestGrade >= 90){
    console.log('A');
} 