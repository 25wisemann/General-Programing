// These are notes on conditionals in programing

/* A conditioal is basicaly an if and then statement
We will have more complicated examples, but all rely on the idea:
    you are checking if a condition is true, then acting based on that condition
They rely on some form of comparrison
*/

/*
Comparrisons in JavaScript look like math equations to some extent
a < b (is a less than b)
a > b (is a grater than b)
a == b (is a equal to b)
a <= b (less than or equal)
a >= b (grater tha or equal)
*/

// Examples:
let a = 5;
console.log(5 < 3);
console.log(5 > 3);
console.log(a == 5);
console.log(a == "5");

// JavaScript aslo has a tripple equal sign, for strick equality.
// Meaning that is a equal to b and have the same data type.
console.log(a === '5')
console.log(a === 5)

// the last symbol is "!"
// "!" means not

console.log(a != 3);

// You can compare strings, just like numbers
console.log('Badin' > 'Ross');

/* rules for string comparission (Assuming greater than)
1. Compare the first characters of each string
    If the first character of the first string is greater than the first character of the first string return true
    If less than of the second string, return false
    If equal, continue to next step
2. Compare secnd character of string, (as described above)
3. Continue untill either strng ends
4. If both are equal and have the same length, retur flase (equal)
5. If one is longer, it is greater
*/

console.log('B' > 'R');
console.log('b' == 'B');

//Now that we know how comparrisions work we can do consitionals

//An If statement allows you to gate code behind a condition being true
if (3 < 5){
  console.log(' 3 is less than 5');
}

//If you want to make a choice between options, you have other structures that are useful

if (7 < 5){
    console.log('7 is less than 5');
} else {
console.log('7 is not less than 5');
}
// A test for equality
let TestNumber = 6;
if (TestNumber)