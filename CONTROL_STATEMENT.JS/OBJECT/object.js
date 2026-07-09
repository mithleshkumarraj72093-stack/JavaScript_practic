// const person = {
//     firstname : "mithilesh",
//     lastname : "kumar",
//     age : 19
// }
// console.log(person["firstname"]);
// console.log(typeof person)


// updata the value and key name 

// const person = {
//     firstname : "mithilesh",
//     lastname : "kumar",
//     age : 19
// }

// person . firstname = "ashd"
// person . lastname = "Alam"
// person . age = 20

// console.log(person.firstname);
// console.log(person["lastname"]);

// console.log(person);



// add new properties in object ?

// const person = {
//     firstname : "mithilesh",
//     lastname : "kumar",
//     age : 19
// }

// person . marks = '99%'
// person . course = "BCA"
// person . firstname = "Sourav"
// console.log(person.firstname);

// console.log(person);

// deleting a properties in an object ?


// const person = {
//     firstname : "mithilesh",
//     lastname : "kumar",
//     age : 19
// }
// delete person.firstname
// delete person.lastname
// delete person.age
// console.log(person);


// Nested object ?

const person = {
    firstname : "mithilesh",
    lastname : "kumar",
    age : 19,
    course_detail1:{
        Coursename : "BCA",
        CourseDuration : 2027-2024,
        collagename : "NIT",
    },
    course_detail2:{
        Coursename : "MCA",
        CourseDuration : 2027-2023,
        collagename : "IIT patna",
    }
  
}
person.course_detail2 .StudentName  = "sumit kumar"
person.course_detail1 .StudentName  = "sourav kumar"


console.log(person.course_detail1);
console.log(person.course_detail2);



