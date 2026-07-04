// Comparison operator in javascript ->>  Used to compare two values.

// 1. == (Equal to)

// let a = 10;
// let b = 10;
// console.log("is equal a == b ",a == b)

// string 

// let a = "mithilesh";
// let b = "mithilesh";
// console.log("is equal a == b ",a == b)

// with character

// let a = 'a';
// let b = 'a';
// console.log("is equal a == b ",a == b)

// A. Implicit Conversion-->>JavaScript automatically converts types when it expects a different type, sometimes called "coercion"

// let x = 10;
// let y = '10';
// console.log(x == y);

// B.Explicit Conversion --> You manually convert types using built-in methods.

// Example of string

// let n = 100;
// let m = String(200);
// console.log("Original value of N and M is",n,m)
// console.log("type of m is-->",typeof (m),".and total value is-> ",m+n)

// example of boolean 

// let a = 1;
// let b = Boolean(a);
// console.log("Original value is =",typeof(a))
// console.log("Convert type is =",typeof(b),b)

// 2. === (Strict Equal to)  Value + Data type dono same hone chahiye, tabhi result true aata hai.
// Example with number 
// let A = 10;
// let B = "10";
// console.log(A === B)

// Example with string.
// let A = 10;
// let B = "mithilesh";
// console.log(A === B)

// console.log(5 === 5);        // true (value same, type same)
// console.log(5 === "5");      // false (value same but type different)
// console.log(true === 1);     // false (type different)
// console.log(null === undefined);  // true
// console.log(undefined === undefined);  // true


// 3. != (Not Equal)--> Used to compare two values.

// let a = 10;
// let b = 20;
// console.log(a != b)

// let a = 10;
// let b = "20";
// console.log(a != b)

// 4. !== (Strict Not Equal) should be both value and types same.

// let a = 10;
// let b = 20;
// console.log(a !== b)

// 5. > (Greater Than)
// let A = 10;
// let B = 20;
// console.log("20 value 10 se bada hian !", A > B)

// 6. < (less Than).
// let A = 10;
// let B = 20;
// console.log("20 value 10 se chhota hian !", A < B)

// 7. >= (Greater Than or Equal)

// let A = 20;
// let B = 10;
// console.log("value a and value b!", A >= B)

// 8.<= (less Than or Equal)

let A = 10;
let B = 20;
console.log("value a and value b!", A <= B)