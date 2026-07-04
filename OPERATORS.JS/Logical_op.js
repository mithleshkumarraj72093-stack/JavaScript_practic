// 4. Logical Operators:  Logical operators in JavaScript are used to combine or manipulate boolean (true/false)

const { question } = require("readline-sync");

// 1. AND (&&) Returns true only if both conditions are true
// let a = 10 
// let b = 20 
// console.log(a == b && a == b)

// let x = 10;
// let y = 20;

// console.log(x > 5 && y > 15); // true
// console.log(x > 3 && y > 18); // false

// let a =10;
// let b = 20;
// if (a >= 5 && b >= 10){
//     console.log("both value grater than 5 and 10")
// }else{
//     console.log("NOT")
// }

// let num = 32;
// if (num > 0 && num < 100){
//     console.log(" yes num is between 0 and 100")
// }else {
//     console.log("not num is between 0 and 100")
// }
// const prompt = require("prompt-sync")();

// let age = Number(prompt("Enter your age: "));

// if (age > 19 && age < 80){
//     console.log("you can vote");
// }else{
//     console.log("you can't vote");
// }

// EXAMPLE 




// let name = String(prompt("Enter your name "))
// let pass = Number(prompt("Enter your password "))


// if (name === "mithilesh","kumar" && pass === 7209365,123456789 ){
//     console.log("login successfully")
// }else{
//     console.log("INVALID DETAILS !")
// }
// EXAMPLE 2
// let Attend = String(prompt("Enter your Attendance %: "))
// let fees=  (prompt("Have you paid fees (yes/no)")).toLowerCase();

// if (Attend === "75%" && fees === "yes"){
//     console.log("You can attend your Exam")
// }else{
//     console.log("SORRY You should paid your fees first ")
// }

// EXAMPLE 3

// let Age = Number(prompt("Enter your age btw (18-81) : "))
// let passID = (prompt("Have you passID (yes/no) : "))

// if ( Age >= 18 && Age <= 85 && passID === "yes"){
//     console.log("You can vote ")
   
   
// }else{
//       console.log("You can`t vote ")
// }


// let money = true
// let parents = true
// let age = 16;
// if (money === true && parents === true && age >= 18){
//     console.log("watch movie")

// }else{
//     console.log("cant watch")
// }

// OR

// let money = prompt("do you have maney (yes/no) :").toLowerCase();
// let parentsAllow = prompt("do your parents allow(yes/no) :").toLowerCase();

// if (money === 'yes' && parentsAllow === "yes"){
//     console.log("you can go and watch movie ");
// }else{
//     console.log("you cant go and watch movie");
// }


// OR OPERATOR EXAMPLE IN JS  -> Meaning: At least one condition must be true
// If one true → result true
// If both false → result false

// let isId = false;

// let pass = true;

// if(isId || pass){
//     console.log("allowed")
// }else {
//     console.log("not allowed")
// }
// example qs 1

// let num1 = 5 
// let num2 = -20;

// if(num1 >= 10 || num2 <= 0){
//     console.log("true")
// }

// example qs 2.

// let maths = 20; 
// let english = 33; 
// if (maths >= 33 || english >= 33){
//     console.log("pass")
// }else {
//     console.log("fail")
// }
// const prompt = require("prompt-sync")();

// let age = Number(prompt("enter your age = "))

// if (age < 18 || age < 60){
//     console.log("special cetegory !")
// }else{
//        console.log("normal cetegory !")
// }

// let Num = Number(prompt("enter your number = "))

// if (Num %2 === 0 || Num %5 === 0){
//     console.log("number even and multiple by 5")
// }else {
//     console.log("NOT number even and NOT multiple by 5")
// }

// let loginPage = String(prompt("Enter your USERNAME or EMAIL ()"))
// let email = String(prompt("Enter your  EMAIL ()"))

// let USERNAME = "mithilesh-kumar";
// let EMAIL = "mithileshkumar@72093gamil.com";

// if (loginPage == USERNAME && email == EMAIL){
//     console.log("login successfully")
// }else{
//     console.log("try Again");
// }


// ANOTHER ONE EX

// let marks = Number(prompt("Enter your marks = "))
// let sportCertificate = (prompt("Do you have sportCertificate[yes/no] ="))

// if (marks >= 90 || sportCertificate == "yes"){
//     console.log("aapko schoolership milega")
// }
// else{
//     console.log("aapko schoolership nhi milega")
// }


// The logical NOT operator (!) reverses the boolean value of a condition, expression, or variable?

// let istrue = false;
// if (!istrue){
//     console.log("false")
// }

// console.log(!'helo')  // single NOT(!) are used to convert boolean value ( false)

// console.log(!! "mithilesh")  // double NOT(!!) are used to convert pure boolean value (true)

// EX 1.

// let rain = false;
// if (!!rain){
//     console.log("aaj barish nhi hogii !")
// }else{
//     console.log("aaj barish  hogii !")
// }

const prompt = require("prompt-sync")();

// let loginID = prompt("Are you logged [yes/no] = ")

// if(!!(loginID ==="yes")){
//     console.log("try Again")
// }else{
//     console.log("logged successfully")
// }

// let num = prompt("Enter a Number = ")

// if(!(num > 0)){
//     console.log("Number is not positive")
// }else{
//     console.log("Number is positive")
// }


// let isRain = true;
// if(!isRain ){
    
//     console.log("go outside")
// }else{
//     console.log("You can`t go outside")
// }

// let isStudent = true;

// if(!isStudent){
//     console.log("student is present in the class room ")
// }else{
//     console.log("not present")
// }

// let isStudent = false;

// if(!isStudent){
//     console.log("student is present in the class room ")
// }else{
//     console.log("not present")
// }

// let hasticket = true;
// if(!hasticket){
//     console.log("Entry denied")
// }else{
//     console.log("Entry confirmed")
// }

// question 2.

// let loggedIn = false;
// if(!loggedIn) {
//     console.log("You can acces this web")
// }else{
//     console.log("first! loging the website")
// }

// question 3.
// let Age = prompt("Enter your age ")
// if(!(Age < 18)){
//     console.log("you can vote")
// }else{
//     console.log("you cant vote")
// }

// question 4. 

// let isinternet = true;
// if (!isinternet){
//     console.log("open")
// }else{
//     console.log("internet reguired")
// }

// let isOnline = false;
// console.log(!isOnline);

// let x = 10;
// console.log(!(x > 5));

// let marks = 30;
// console.log(!(marks >= 33));

// console.log(!0);
// console.log(!1);
// console.log(!4);

// question 5.
// let playerAlive = false;
// if (!playerAlive){
//     console.log("game over")
// }

// OR 

// let playerName = prompt("Enter player name = ")
// let playerAlive = prompt("Is player alive[yes/no]= ")
// if (!(playerAlive ==="yes")){
//     console.log("Game over ",playerName + "!")
// }else{
//     console.log("continue playing",playerName + "!")
// }


// question 6.

let studentName = prompt("Enter your name = ")
let studentIDcard = prompt("have your iDcard [yes/no] = ")

if (!(studentIDcard === "yes")){
    console.log("Acces denied",studentName + "! Please enter right information")
}else{
   
    console.log("Acces allow"+ "! have you good day",studentName)
}
