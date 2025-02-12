/* loops are a great way for us to repeat a set of steps
If you have something you want to do multiple times in a row or untill something happens then use loops !!!


Two general flavors:
    while loops
    for loops

*/
let i = 0;
while (i <= 10){
    console.log(i);
    i++; // i = i + 1
}

/* a single time through a loops is called an interation
While loops will continue untill the condition becomes falsey
Remember zero is falsey
*/

while (i){
    console.log('banana');
    i--;
}

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

for(let j = 1; j <= 5; j++){
    console.log(`j = ${j}`)
}

/* With either form if your condition is going to be base d on a number, you probobly want to use
less than, grater than, or their variants
equal to and not equal to ar likley going to be missed and make an infinite loop

you'll also find that you will sometimes be off by one
frequently the sollution is just to change between less than and less than or equal too and vice versa
*/