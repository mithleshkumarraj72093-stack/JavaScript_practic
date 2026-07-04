// let a;
// console.log(a);
// let a = 10;

// Q1. A variable is declared using var and printed before its declaration. What will be the output?
// console.log(a)
// var a;


// Q2. A variable is declared using let and printed before its declaration. What will happen?

// OUTPUT -> ReferenceError: Cannot access 'a' before initialization  in let variable 

// console.log(a)
// let a;

// Q3. A variable is declared and assigned a value first, and then it is printed. What will be the output?
// OUTPUT IS-> value of a =  10

// let a = 10;
// console.log("value of a = ",a);

// Q4. A function declaration is called before it is defined. What will be the output?

// sayhello();        //  pehle call kiya gya ak function ko 

// function sayhello() {
//     console.log("mithilesh");    //yahan defined kiya gya value ko  
// };



// Q7. Inside a function: A variable is printed Then it is assigned a value using var
// Then it is printed again What will be the outputs?

// function inside(){
//     a;
//     console.log(a)
//     var a = 10;
//     console.log(a)

// };
// inside();


// Q8. A variable is declared using let in the global scope. Inside a function, 
// it is printed without declaring it again. What will be the output?


// let a = 20;

// function globla(){
//     console.log(a);
// }
// globla()

// Q9. Inside a function: A variable is printed
// Then it is declared using let What will happen

// function car(){
//     console.log(a);
//     let a = 17;
// }
// car();

//  OUTPUT ->> ReferenceError: Cannot access 'a' before initialization
// let a = 'mithilesh'
// function test(){
//     console.log(a)
//     a = 'kumar'
//     console.log()
// }
// test()