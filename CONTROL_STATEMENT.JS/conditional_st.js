// 1. Conditional Statements  -->> Used to make decisions based on conditions

// let age = 20;
// if (age >= 18){
//     console.log("you are adult ! ")
// }else{
//     console.log("you are not adult !")
// }

// let num = 10
// if (num > 0){
//     console.log("positive number !")
// }

// let num = 10;
// if (num > 4){
//     console.log("true")
// }
//else{
//     console.log("false")
// }

// agr number even hai to masg print kro 

// let num = 893047231;
// if (num % 2 === 0){
//     console.log("even")
// }
// else{
//     console.log("odd")
// }
const prompt = require("prompt-sync")();

// let num = prompt("enter a number = ")

// if(num %2 === 0){
//     console.log("Even number")
// }else{
//     console.log("odd number")
// }

// 1. if Statement 

// let a = true;
// if(a == true){
//     console.log("TRUE")
// }

// let num = prompt("Enter a number = ")
// if (num >= 0){
//     console.log("number is positive")
// }else{
//     console.log("number is nagative")
// }

// let person = prompt("Enter your age = ")
// if (person >= 18){
//     console.log("you can vote !")
// }else{
//     console.log("you cannot vote !")
// }

// let marks = prompt("Enter your age = ")
// if (marks >= 30){
//     console.log("pass, congratulation !")
// }else{
//     console.log("fail, SORRY 🤦‍♀️!")
// }


// let passcode = Number(prompt("Enter your passcode "))

// if(passcode === 7209365){
//     console.log("correct passcode")
// }else{
//     console.log("TRY Again !")
// }

// let passcode = String(prompt("Enter your passcode "))

// if(passcode === "mithi@720_#$"){
//     console.log("correct passcode")
// }else{
//     console.log("TRY Again !")
// }

// let betteryLife = String(prompt("Enter mobile bettery percentage "))

// if(betteryLife <= "20%"){
//     console.log("low battery ! please charge ")
// }else{
//     console.log("not Required charging")
// }

// let UserName = String(prompt("Enter user name  "))

// if(UserName === "admin"){
//     console.log("right ! ")
// }else{
//     console.log("wrong !")
// }

// let SavingAmount = Number(prompt("Enter  your balance = "))
// let withdrawal = Number(prompt("Enter  your withdrawal amount = "))

// if (SavingAmount >= withdrawal){
//     let Remainblance = SavingAmount-withdrawal
//     console.log("Amount withdrawal succesfully !")
//     console.log("Remaining blance = " + Remainblance)
// }else{
//     console.log("Please check blance !")
// }

// let userName = String(prompt("Enter your user name "))
// let pass = String(prompt("Enter your correct password "))


// if (pass === "720mithilesh" && userName === "mithilesh kumar"){
    
//     console.log("Loggin succesfully !")
// }
// else{
//     console.log("Loggin failed !")
// }

// let num = Number(prompt("enter a lucky number[between 10 to 20] = "))
// if (num === 15){
//     console.log("You entered a lucky number =" +num)
// }else{
//     console.log("oops 🤒 Try again sir")
// }


// let Age = Number(prompt("enter your age = "))
// if (Age >= 13 && Age <= 19){
//     console.log("teaneger")
// }else{
//     console.log("Adult")
// }

// 1. College Admission System  Admission allowed only if:
//     marks ≥ 75
//     attendance ≥ 80%
//     documents submitted  -> Otherwise reject.

// let marks = Number(prompt("Enter your marks = "))
// let Attendance = String(prompt("Enter your Attendance % = "))
// let documents = String(prompt("Do you have submited your all document [Yes/No] = "))

// if(marks >=75 && Attendance >= 85 && documents === "Yes" ){
//     console.log("Addmision Allowed")
// }else{
//     console.log("Rejected")
// }


//2. Gaming Rank System ?
// let GameScore = Number(prompt("Enter your gaming score number = "))
// if(GameScore >= 1000){

//     console.log("You are a pro player !")
// }else if (GameScore >= 500) {
    
//     console.log("You are a intermedite player !")
// } else {
//     console.log("You are a beginer player !")
    
// }

//3. Smart Phone Lock ? 

// let faceDetections =prompt("Is face detected [Yes/No] ");
// let Fingerprint =prompt("Is fingerprints correct [Yes/No] ");
// let password =prompt("Is your password correct [Yes/No] ");

// if(faceDetections === 'Yes' || Fingerprint ==='yes' || password === 'yes'){
//     console.log("Phone Unlock done")
// }else{
//     console.log("Acces denied")
// }

//4.ATM Machine Logic ?

// let cardInsert = prompt("Is your card inserted[Yes/No] = ")
// let PIN = Number(prompt("Enter your ATM PIN = "))
// let savingbalance  = 2000;
// console.log("Your blance is =",savingbalance)

// let withdrawalBalance = Number(prompt("Enter your withdrawlBlance = "))

// if(cardInsert === 'Yes' && PIN === 72093 && withdrawalBalance <= savingbalance){

//     let RemainBalance = (savingbalance - withdrawalBalance)
//     console.log("Amount withdrawal succesfully =",withdrawalBalance )
//     console.log("Remaining blance = " , RemainBalance)

// }else{
//     console.log("Please ! Enter right informations !")
// }
// console.log("HAVE A GOOD DAY SIR ❤️")

//5.  Smart Traffic Signal ?

// let AmbulanceDetected = String(prompt("Ambulance is coming[yes/no] "))
// let trafficDensity = String(prompt("Is traffic density high [yes/no] "))
// let mightnight = String(prompt("Is it mightnight [yes/no] "))

// if(AmbulanceDetected === 'yes'){
//     console.log("Green light mode on")
// }else if(trafficDensity === 'yes'){
//     console.log("Increase traffic singnal timer")
// }else if (mightnight === 'yes'){
//     console.log("Blinking yellowlight  mode on")
// }else{
//     console.log("Traffic singnal normal")
// }

//6.Job Application Portal ?

// let Resume = String(prompt("Is your resume uploaded [yes/no]"))
// let Exprience = String(prompt("Enter your exprience in years "))
// let skill = String(prompt("Do you have this skills ? [yes/no]"))

// if(Resume === 'yes' && Exprience >= 2 && skill === "yes"){

//     console.log("Your job application portal accepted")
// }else{
//     console.log("Your are Rejected ! SORRY 🙏")
// }


let Name = String(prompt("Enter your full Name -> "))
let Age = Number(prompt("Enter your age -> "))
let Gender= prompt("what is your Gender -> ")
let phone_No = Number(prompt("Enter your Phone_no -> "))
let country = String(prompt("Enter your Country name -> "))
let Resume = String(prompt("Is your resume uploaded[yes/no] -> "))
let Qualifications = String(prompt("Are you graduated [yes/no] -> "))
let Exprience = prompt("Enter your expriences in year -> ")


console.log("------------- applicant Detail-------------")

console.log("Your name is ",Name)
console.log("Your age is " , Age)
console.log("Your Gender is ", Gender)
console.log("Your phone number is ", phone_No)
console.log("Your country is ", country)

if(Resume === "yes" && Qualifications === "yes" && Exprience >= 2){
    console.log("Your applications accepted")
}else{
    console.log("Applications rejected")
    if(Resume !== "yes"){
        console.log("Resume: Resume not uploaded")
        console.log("PLEASE UPLOAD YOUR RESUME !")
    }
    if(Qualifications !== "yes"){
        console.log("Resume: Resume graduate required")
    }
    if(Exprience < 2){
        console.log("Resume: Required minimum 2 years exprience")
    }
}


//7. Job Application Portal ?

// let passport = prompt("Is your passport authontication all clear[yes/no] ")
// let visaApproved = prompt("Is your visa approved [yes/no] ")
// let BaggageWeight = Number(prompt("Enter your bagge weight[Kg] ="))

// if(passport === "yes" && visaApproved === "yes" && BaggageWeight <= 30){
//     console.log("Passanger can board")
// }else{
//     console.log("Passanger cannot board")
// }