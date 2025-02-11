//1
function multiply(a, b){
    console.log(a * b)
}

multiply(4, 7)

//4

function checkAge(age) { 
    if (age > 18) { 
         return true; 
     } else { 
         return confirm('Did parents allow you?');
}
}


function checkAge(age) { 
    if (age > 18) { 
       return true;
} 
return confirm('Did parents allow you?');
}

checkAge(19)

//They both return the same thing

//5
function CheckAge(age){
    return (age > 18) ? true : confirm('Did your parents allow you')
}
CheckAge(13)

//6
function min(a,b){
    if (a < b){
        console.log(a)
    } else {
        console.log(b)
    }
}

min(3,9)

//7

function pow(x,n){
    console.log(x ** n)
}

pow (3,4)