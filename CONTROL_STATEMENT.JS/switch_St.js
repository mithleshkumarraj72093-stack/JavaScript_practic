// switch Statement -->> A switch statement is used to check multiple conditions 
// in a cleaner way instead of using many if...else if statements.

const prompt = require("prompt-sync")();


// let day = Number(prompt("Enter day number [1 to 7]"))
// switch(day){
//         case 1:
//         console.log("sunday")
// break;
//         case 2:
//         console.log("Monday")
// break
//         case 3:
//         console.log("Tuesday")
// break
//         case 4:
//         console.log("wednesday")
// break
//         case 5:
//         console.log("Thirsday")
// break
//         case 6:
//         console.log("Friday")
// break
//         case 7:
//         console.log("Saturday"
//         )
//         break;
//         default:
//             console.log("default number. Please enter right number !")
//         }


// let balance = 2000;

// let ATMPIN = Number(prompt("Enter your ATM pin = "))
// if (ATMPIN === 72093){
// console.log("Your balance =",balance)
   
// }else{
//     console.log("Enter currect ATM PIN")
// }
// let choiseOption = String(prompt("choise Option [deposit, withdrwal]"))
// switch(choiseOption){
//     case "deposit":

//         let add = Number(prompt("Enter your deposit amount= "))
//         let final_amount = balance + add
//         console.log("your final amount =",final_amount)
//     break;
//     case "withdrwal":

//         let withdrwal = Number(prompt("Enter your withdrwal amount="))
//         let remainbalance = balance - withdrwal;
//         console.log("your withdrwal amount=",withdrwal)
//         console.log("your sufficient balance=",remainbalance)

//     break;
//     default:
//         console.log("choise right options")
// }


// let balance = 2000;

// let ATMPIN = Number(prompt("Enter your ATM pin = "))
// if (ATMPIN === 72093){
// console.log("Your balance =",balance)
   
// }else{
//     console.log("Enter currect ATM PIN")
// }
// let choiseOption = String(prompt("choise Option [deposit, withdrwal]"))
// switch(choiseOption){
//     case "deposit":

//         let add = Number(prompt("Enter your deposit amount= "))
//         let final_amount = balance + add
//         console.log("your final amount =",final_amount)
//     break;
//     case "withdrwal":

//         let withdrwal = Number(prompt("Enter your withdrwal amount="))
//         let remainbalance = balance - withdrwal;
//         console.log("your withdrwal amount=",withdrwal)
//         console.log("your sufficient balance=",remainbalance)

//     break;
//     default:
//         console.log("choise right options")
// }

// 2. Student Result System  ?

// let marks = Number(prompt("Enter your marks ->"))

// if (marks >= 80 && marks <= 100){
//     console.log("Grade A")
// }else if(marks >= 79){
//     console.log("Grade B")
// }else if (marks >= 50){
//     console.log("Grade C")
// }else {
//     console.log("FAIL")
// }

// let grade = String(prompt("Enter your grade->")).toLowerCase();

// switch(grade){
//     case"a":
//         console.log("Excellent")
//         break;
//     case "b":
//         console.log("Good")
//         break;

//     case"c":
//         console.log("Average")
//         break;
//     case "FAIL":
//         console.log("study hard")
//         break;
//     default:
//         console.log("Invalid grade")
// }

// 3. E-Commerce Shopping System ?

let amount = Number(prompt("Entre your purchsing = "))

if (amount >= 50000){
    let discount = 50000 *20/100
    discountAmount = amount - discount
    console.log("You get 20% discount =",discount)
    console.log("Your total amount is =",discountAmount)
}

else if(amount >= 30000){
    let discount = 30000 *10/100
    discountAmount = amount - discount
    console.log("You get 10% discount =",discount)
    console.log("Your total amount is =",discountAmount)
}else{
    console.log("SORRY ! NO discount")
    console.log("Pay your amount ",amount)
}
let paymentMethod = String(prompt("choose your payment method [ATM ,PHONEPE,GOOGLEPE]")).toUpperCase()

switch(paymentMethod){
    case"ATM":
            let balance1 = 100000;
            let pinOne = 7209365;
            let userpin1 = Number(prompt("Enter ATM PIN -> "));

        if(userpin1  === pinOne){

        console.log("You have", balance1, "rupees in account");

      

        console.log("Your purchasing amount is =", amount);
        console.log("Pay now!");

        let payamount = Number(prompt("Enter your amount = "));
        let done = amount - payamount;

        if(done === 0){

        console.log("Your payment is done!");
        let sufficientBal = balance1 - amount;
        console.log("Your sufficient balance =", sufficientBal);

    }else{
        console.log("Remaining amount =", done);
    }

    }else{
         console.log("Incorrect PIN!");
    }
      
        break;

    case"PHONEPE":

        let balance2 = 100000;
        let pinTwo = 1111;
        let userpin2 = Number(prompt("Enter phonepe PIN -> "));

        if(userpin2 === pinTwo){

        console.log("You have", balance2, "rupees in account");
        console.log("Your purchasing amount is =", amount);
        console.log("Pay now!");

        let payamount = Number(prompt("Enter your amount = "));
        let done = amount - payamount;

        if(done === 0){

        console.log("Your payment is done!");
        let sufficientBal = balance2 - amount;
        console.log("Your sufficient balance =", sufficientBal);

    }else{
        console.log("Remaining amount =", done);
    }

    }else{
         console.log("Incorrect PIN!");
    }
        break;

    case"GOOGLEPE":
        let balance3 = 100000;
        let pinThree = 2222;
        let userpin3 = Number(prompt("Enter googlepe PIN -> "));

        if(userpin3 === pinThree){

        console.log("You have", balance3, "rupees in account");
        console.log("Your purchasing amount is =", amount);
        console.log("Pay now!");

        let payamount = Number(prompt("Enter your amount = "));
        let done = amount - payamount;

        if(done === 0){

        console.log("Your payment is done!");
        let sufficientBal = balance3 - amount;
        console.log("Your sufficient balance =", sufficientBal);

    }else{
        console.log("Remaining amount =", done);
    }

    }else{
         console.log("Incorrect PIN!");
    }
    break;

    default:
    console.log("invalid choise !")
}
