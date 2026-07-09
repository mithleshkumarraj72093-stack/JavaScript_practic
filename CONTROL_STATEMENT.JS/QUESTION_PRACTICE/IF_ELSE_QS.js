const prompt = require("prompt-sync")();
// 1 . Check whether a number is: positive , nagative ,zero ?

// let number = Number(prompt("Enter a number = "))

// if(number > 0){
//     console.log("Number is positive ")
// } else if(number < 0 ){
//     console.log("Number is nagative")
// } else{
//     console.log("ZERO")
// }

// 2. Check whether a number is: even or odd ?
// let num = Number(prompt("Enter a number = "))

// if (num %2 === 0){
//     console.log(num,"= Number is even")
// }else{
//     console.log(num,"= Number is odd")
// }

// let num1 = Number(prompt("Enter first number = "))
// let num2 = Number(prompt("Enter 2nd number = "))
// let num3 = Number(prompt("Enter 3rd number = "))
// if (num1 > num2 && num1 > num3){
//     console.log(num1 , "is largest number")
// }else if(num2 > num1 && num3 < num2){
//     console.log(num2 , "is largest number")
// }else{
//     console.log(num3 , "is largest number")
// }

// let num1 = Number(prompt("Enter first number = "))
// let num2 = Number(prompt("Enter 2nd number = "))
// let num3 = Number(prompt("Enter 3rd number = "))
// let num4 = Number(prompt("Enter 4th number = "))

// if (num1 < num2 && num1 < num3  && num1 < num4){
//     console.log(num1 ,"smallest number")
// }else if (num2 < num1 && num2 < num3 && num2 <num4)
// {
//     console.log(num2 ,"smallest number")

// }else if(num3 < num1 && num3 < num2 && num3 < num4){
//     console.log(num3 ,"smallest number")
// }else{
//     console.log(num4 ,"smallest number")
// }

// let character= String(prompt("enter a character"))

// if (character === "a" || character === "e "|| character === "i" ||
//      character === "o" ||character === "u" || character === "A" || character === "E "
//      ||character === "I" ||  character === "O" || character === "U"  )
//     {
//     console.log("Vowel")
// }else{
//     console.log("consonant")
// }

// let ch = String(prompt("Enter a character -> "))

// if(ch >= "a" && ch <= "z"){
//     console.log("lowercase")

// }else if (ch >= "A" && ch <= "Z"){
//     console.log("upercase")
// }else if (ch >= "0" && ch <= "9"){
//     console.log("Number")
// }
// else if (ch >= "-0" && ch <= "-9"){
//     console.log("nagative number")
// }else{
//     console.log("special character ")
// }

// let marks = Number(prompt("Enter your marks = "))

// if (marks >= 90 && marks <= 100){
//     console.log("grade A")
// }else if (marks >= 75 && marks <= 89){
//      console.log("grade B")
// }else if (marks >= 50 && marks <= 74){
//      console.log("grade C")
// }else {
//       console.log("fail")

// }

// let balance = 1000;
// console.log("Your balance is = ",balance)

// let withdrawalBalance = Number(prompt("Enter withdrawal Amount = "))

// if (balance >= withdrawalBalance){
//     let Remainingbalance = balance - withdrawalBalance
//     console.log("withdrawal balance is = " ,withdrawalBalance)
//     console.log("Your Remainingbalance is =", Remainingbalance)
// } else{
//     console.log("insuffient balance")
// }

// let amount = Number(prompt("Enter purches amount = "));

// let discount;

// if (amount > 5000) {
//   discount = (amount * 20) / 100;
//   console.log("You got 20% discount");
//   let finalAmount = amount - discount;
//   console.log("Your final amount is = ", finalAmount);
// } else if (amount > 2000) {
//   discount = (amount * 10) / 100;
//   console.log("You got 10% discount ☺️");
// } else {
//     discount = 0
//   console.log("No discount");
// }
// let finalAmount = amount - discount;
// console.log("Your discount amount is = ",discount);
// console.log("Your final price is = ", finalAmount);
// console.log("Have a good day sir ❤️ ")


// PRO LEVEL QUESTION IN JAVASCRIPT ?
// 1. Create a railway reservation confirmation system. ?

// let passengerName = prompt("Enter Passenger Name:");
// let age = Number(prompt("Enter Age:"));
// let source = prompt("Enter Source Station:");
// let destination = prompt("Enter Destination Station:");
// let trainName = prompt("Enter Train Name:");

// // Available seats
// let availableSeats = 5;

// // RAC seats
// let racSeats = 2;

// // Waiting list
// let waitingList = 3;

// console.log("===== Railway Reservation System =====");

// if (availableSeats > 0) {

//     availableSeats--;

//     let seatNumber = Math.floor(Math.random() * 100) + 1;
//     let pnr = Math.floor(Math.random() * 1000000);

//     console.log("Booking Status : CONFIRMED");
//     console.log("Passenger Name :", passengerName);
//     console.log("Age :", age);
//     console.log("Train :", trainName);
//     console.log("Route :", source, "to", destination);
//     console.log("Seat Number :", seatNumber);
//     console.log("PNR Number :", pnr);

// } else if (racSeats > 0) {

//     racSeats--;

//     let pnr = Math.floor(Math.random() * 1000000);

//     console.log("Booking Status : RAC");
//     console.log("Passenger Name :", passengerName);
//     console.log("Train :", trainName);
//     console.log("PNR Number :", pnr);

// } else if (waitingList > 0) {

//     waitingList--;

//     let pnr = Math.floor(Math.random() * 1000000);

//     console.log("Booking Status : WAITING LIST");
//     console.log("Passenger Name :", passengerName);
//     console.log("Train :", trainName);
//     console.log("PNR Number :", pnr);

// } else {

//     console.log("Sorry! No Tickets Available");

// }

// 2. Create a military security access system. ?
let Name = String(prompt("Enter your name "))
let IDCard = String(prompt("Do you have IDCard [yes/no]"))
let password = Number(prompt("Enter your password ->"))
let Rank = Number(prompt("Enter your Rank No ->"))
let clearanceLevel = String(prompt("Is your Security Clearance is clear [yes/no]"))

console.log("=========== YOUR DETAIL==========")

console.log("Your name is",Name)
console.log("Your IDcard ->",IDCard)
console.log("Your password is",password)
console.log("Your Rank No",(Rank))
console.log("Your clearanceLevel",clearanceLevel)

if(IDCard === "yes" && password === 7209365 && Rank === 1003 && clearanceLevel === "yes"){
  console.log("ACCESS GRANTED !")
}else{
  console.log("ACCESS DENIED !")
  if(IDCard !== "yes"){
    console.log("IDcard is compolsary")
  }
  if(password !== 7209365){
    console.log("Enter your currect password ")
  }
  if(Rank !== 1003){
    console.log("Enter your currect rank NO ")
  }
  if(clearanceLevel !== "yes"){
    console.log("Sorry I need your clearanceLevel")
  }
}


