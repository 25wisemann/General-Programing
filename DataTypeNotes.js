// These will be notes on data types

// There are 8 data types in JavaScript

/*
1. Numbers (integers and Floating)
    - In addition to traditional numbers this includes infinity and NAN (Not a Number)
2. BigInt
    - For very large numbers, Java Script starts to estimate numbers
    - This can be overidden with a BigInt, formed by a lowercase n and the ebd of the number
3. String
    - Letters words, characters, numbers, symbols, that are treated as text
    - With strings prduces "concatenation" connecting two symbols one after the other
    - Generally formed by encaptuling symbols in qutation marks
        - In Java there are three types of quotes
            - "Hello"
            - 'Hello'
            - `Hello`
*/
console.log("Hello World!");
console.log('Hello World!');
console.log("This is Mr. John's output");
console.log('"Nevermore" quoth the raven');

// If String contatins an apostophe, use double quotes
// If contatins diolague use single quote

// Backticks allow you to imbed variables into a string
let MyName = 'John';
console.log(`Hello, ${MyName}`);

// you can also do math or other opperations inside of the curly brackets
console.log(`2 + 3 = ${2 + 3}`);

// Many Programing Languages have a 'char' data type, represening a single data type, JavaScript does not

/* Boolean
    - is named for George Boole, who did a lot of work with fromal logic
        - Namely ways to make decisions with true and false statements
    - Can hold only two values
        - True
        - Flase
Null
    - This is a special data type. It contains only one data type
        - Null
    - Null in JavaScript means nothing, empty, or value unknown
Undefined
    - It contains only one data type
        - Undefined
    - Means that the value has not been assigned
*/
let age; // declared, but not defined
console.log(age);

// The other two, object and symbols, are not needed for this class

// If you need to find the data type for a variable, use the type of() function

console.log(typeof('word'))
console.log(typeof(354))
console.log(typeof(age))