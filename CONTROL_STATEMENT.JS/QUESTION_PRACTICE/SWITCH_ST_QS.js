// 01. E-Commerce Shopping System ?  
const prompt = require("prompt-sync")();



// let amount = Number(prompt("Entre your purchsing = "))

// if (amount >= 50000){
//     let discount = 50000 *20/100
//     discountAmount = amount - discount
//     console.log("You get 20% discount =",discount)
//     console.log("Your total amount is =",discountAmount)
// }

// else if(amount >= 30000){
//     let discount = 30000 *10/100
//     discountAmount = amount - discount
//     console.log("You get 10% discount =",discount)
//     console.log("Your total amount is =",discountAmount)
// }else{
//     console.log("SORRY ! NO discount")
//     console.log("Pay your amount ",amount)
// }
// let paymentMethod = String(prompt("choose your payment method [ATM ,PHONEPE,GOOGLEPE]")).toUpperCase()

// switch(paymentMethod){
//     case"ATM":
//             let balance1 = 100000;
//             let pinOne = 7209365;
//             let userpin1 = Number(prompt("Enter ATM PIN -> "));

//         if(userpin1  === pinOne){

//         console.log("You have", balance1, "rupees in account");

      

//         console.log("Your purchasing amount is =", amount);
//         console.log("Pay now!");

//         let payamount = Number(prompt("Enter your amount = "));
//         let done = amount - payamount;

//         if(done === 0){

//         console.log("Your payment is done!");
//         let sufficientBal = balance1 - amount;
//         console.log("Your sufficient balance =", sufficientBal);

//     }else{
//         console.log("Remaining amount =", done);
//     }

//     }else{
//          console.log("Incorrect PIN!");
//     }
      
//         break;

//     case"PHONEPE":

//         let balance2 = 100000;
//         let pinTwo = 1111;
//         let userpin2 = Number(prompt("Enter phonepe PIN -> "));

//         if(userpin2 === pinTwo){

//         console.log("You have", balance2, "rupees in account");
//         console.log("Your purchasing amount is =", amount);
//         console.log("Pay now!");

//         let payamount = Number(prompt("Enter your amount = "));
//         let done = amount - payamount;

//         if(done === 0){

//         console.log("Your payment is done!");
//         let sufficientBal = balance2 - amount;
//         console.log("Your sufficient balance =", sufficientBal);

//     }else{
//         console.log("Remaining amount =", done);
//     }

//     }else{
//          console.log("Incorrect PIN!");
//     }
//         break;

//     case"GOOGLEPE":
//         let balance3 = 100000;
//         let pinThree = 2222;
//         let userpin3 = Number(prompt("Enter googlepe PIN -> "));

//         if(userpin3 === pinThree){

//         console.log("You have", balance3, "rupees in account");
//         console.log("Your purchasing amount is =", amount);
//         console.log("Pay now!");

//         let payamount = Number(prompt("Enter your amount = "));
//         let done = amount - payamount;

//         if(done === 0){

//         console.log("Your payment is done!");
//         let sufficientBal = balance3 - amount;
//         console.log("Your sufficient balance =", sufficientBal);

//     }else{
//         console.log("Remaining amount =", done);
//     }

//     }else{
//          console.log("Incorrect PIN!");
//     }
//     break;

//     default:
//     console.log("invalid choise !")
// }

// qs 02 . Smart Login System

// let permission = String(prompt("Are you member of this company[yes/no] ->")).toLowerCase();
// let password = Number(prompt("Enter your access password ->"))

// if (permission === 'yes'&& password === 72093){
//     console.log("password is currect !")
//     console.log("Access allow")
// }else{
//     console.log("Access denied")
//     console.log("You entered wrong password. TRY AGAIN !")
// }

// let Role = String(prompt("Who are you [admin,manager,user] please choose one ->")).toLowerCase();

// switch(Role){

//     case"admin":

//         let AdminName = String(prompt("Enter your name ->"))
//         let Adminpassword = Number(prompt("Enter your password ->"))

//             if(Adminpassword === 12344){
//                 console.log("access allow")
//             }else{
//                 console.log("access denied")
//             }
//         break;
//     case"manager":
//             let managerName = String(prompt("Enter your name ->"))
//             let managerpassword = Number(prompt("Enter your password ->"))

//                 if(managerpassword === 2222){
//                 console.log("access allow")
//                 }else{
//                 console.log("access denied")
//                 }
//         break;
//         case"user":
//             let userName = String(prompt("Enter your name ->"))
//             let userpassword = Number(prompt("Enter your password ->"))

//                 if(userpassword === 3333){
//                 console.log("Your name is ",userName)
//                 console.log("access allow")
//                 }else{
//                 console.log("access denied")
//                 }
//         break;


//         default:
//             console.log("INVALID CHOISE")
        
    
// }


// ===========OR===============

// let role = prompt("Enter role (admin / manager / user) ->")
// let username = prompt("Enter username ->")
// let password = Number(prompt("Enter password ->"))

// if(username !== "" && password === 1234){

//     console.log("Login Successful")

//     switch(role){

//         case "admin":
//             console.log("Full Access")
//             console.log("Can manage everything")
//             break;

//         case "manager":
//             console.log("Manager Access")
//             console.log("Can manage employees")
//             break;

//         case "user":
//             console.log("User Access")
//             console.log("Limited access")
//             break;

//         default:
//             console.log("Invalid Role")
//     }

// }else{
//     console.log("Invalid Username or Password")
// }


//  Qs 03. Restaurant Ordering System

console.log("=============MENU==============="/n)

console.log("1. PIZZA. PRICE = 120")
console.log("2. BURGER. PRICE = 100")
console.log("3. DUBBLE-EGG ROLE. PRICE = 80")
console.log("4. VEG-BIRYANI. PRICE = 130")
console.log("5. CHICKEN-RISE. PRICE = 150")



let FoodItem = String(prompt("CHOISE FOOD ITME [1,2,3,4,5]"))

switch(FoodItem){
    case 1:
        a
        let GST = 3/100 *100
        let discount = 2*100/100
        console.log("you ordered pizza")

}