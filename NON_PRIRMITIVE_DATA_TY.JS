// Non-primitive Data Types
// Non-primitive data types, also known as reference types, are objects and derived data types.
// They can store collections of values or more complex entities. 
// The two key non-primitive data types in JavaScript are:
// Below is a list of Non-primitive data types.

// let square = {a : 20, b : 10};

// // let circle = {a : 20, b : 10 };

// console.log(square.a);
// console.log(square.b);

// create a object with name of person 

// let person = {

//     Name : 'mithilelsh',
//     last : 'kumar'
    
// };

//print(console) the value of person in object

// console.log("firstName = ",person.Name)
// console.log("lastName = ",person.last)



// ***one object and inside the another object example***
// let person = {

//     Name : 'mithilelsh',
//     last : 'kumar',
//     address : {
//         city : "patna",
//         state : "bihar"
//     }

// };
// console.log("city = ",person.address.city)
// console.log("state = ",person.address.state)

// **question**

// 1. create a object with name book and title, price,author and print all properties

// let Book = {
//     BookTitle : "GULZAR",
//     BookAuthor :"PAVAN k VARMA" ,
//     BookPrice : 200
// };
// console.log("book Title = ", Book.BookTitle)
// console.log("book author = ", Book.BookAuthor)
// console.log("book price = ", Book.BookPrice)

// 2.question
// let laptop = {
//   brand: "HP",
//   ram: "8GB",
//   price: 50000
// };
// console.log("laptop brand -> ",laptop.brand)
// console.log("laptop price -> ",laptop.price)

// let User = {
//     UserName : "mithilesh kumar",
//     UserEmail : "mithileshkumarraj72093@gamil.com",
//     UserAge : 20

// };

// console.log("UserName -> ",User.UserName)
// console.log("UserEmail -> ",User.UserEmail)
// console.log("UserAge -> ",User.UserAge)

// Q4. Nested Object

// let college = {
//     CollegeName : "NALANDA INSTITUTE OF TECHNOLOGY",
//     CollegeLocation : "VIll- CHANADAKA,BBSR,ODISHA",

//     department :{
//         courseName : "BCA",
//         courseDuration : "2024-2027"
//     }
// };
// console.log("courseName -> ",college.department.courseName)
// console.log("courseduration -> ",college.department.courseDuration)

//  Q5. Update & Delete 
// Update price
// Add brand property
// Delete name property

// let product = {
//   name: "Shoes",
//   price: 2000
// };

// product.price = 3000
// product.brand = "nike",
// delete product.name;

// console.log(product)