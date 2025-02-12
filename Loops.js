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

for(let i = 0; i < 21; i++){
    if (i % 2 == 0){
        continue;
    }
    console.log(i);
}