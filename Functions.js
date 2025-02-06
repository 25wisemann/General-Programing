// An example to eaxamine scope:
let x = 1;
function a(){
    let y = 2;
    output(y);
}

function b(){
    let z = 3;
    output(z);
}

function output (value){
    console.log(`value = ${value}`);
}

output(x);
a();
b();

// functions can have return values
// This is somehting the function sends back to the global scope
// Some functions dont have a return value

function RandomLessThan(num){
    let x = Math.floor(Math.random() * num);
    return x;
}
console.log(Math.random());

console.log (RandomLessThan(100));