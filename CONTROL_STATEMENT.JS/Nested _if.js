const prompt = require("prompt-sync")();

// 1. Student Result Checker


// let marks = Number(prompt("Enter marks = "))

// if(marks >= 30 && marks <= 100){
//     console.log("pass")
//     if(marks >= 80){
//         console.log("Grade A")
//     }
//     else if(marks >= 70){
//         console.log("Grade B")
//     }
//     else if(marks >= 40){
//         console.log("Grade C")
//     }
    
// }
// else{
//     console.log("Fail")
// }


let Num = Number(prompt("Enter a number = "))

if ( Num > 0){
    console.log("Positive number")

    if(Num %2 === 0){
        console.log("Even positive !")
            if(Num %2  !== 0)
                 console.log("Odd positive !")
    }else if(Num %2 === 0)

} else{
    console.log("Nothing ")
}