// let inc = document.getElementByIdt = ("count");
// let count = 0;
// document.getElementById("count_el").innerText = 5;
// function increase() {
//     count += 1;
// }
// inc.addEventlistener('click',increase)
// console.log(m)
// var m = 20;
// let b =  "1";
// let a = "10"
//finding the hidden word
// function detectWord(word) {
//     let ans = "";
//     for(i = 0;i < word.length;i++) {
//         if(word[i].toLowerCase() === word[i]) {
//             ans += word[i];
//         }
//     }
//     return ans;
// }
// console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));

//forEach
// let a = [1,2,3,4,5];
// a.forEach(square) //don't return anything only update the array 
// function square(ele) {
//     console.log(ele ** 2);
// }
// indexOf
// function indexOf(arg,arr) {
//     for(let i = 0;i < arr.length;i++) {
//         if(arg == arr[i]) {
//             return i;
//         }
//     }
// }
// console.log(indexOf(2,a))
// let contacts = [{
//     name: "Maxwell Wright",
//     phone: "(0191) 719 6495",
//     email: "Curabitur.egestas.nunc@nonummyac.co.uk"
//     }, {
//     name: "Raja Villarreal",
//     phone: "0866 398 2895",
//     email: "posuere.vulputate@sed.com"
//     }, {
//     name: "Helen Richards",
//     phone: "0800 1111",
//     email: "libero@convallis.edu"
//     }
// ];
    

// let w = prompt("name")
// let h = prompt("phone")
// let l = prompt("Email")
// // console.log(w)
// contacts.push({
//     name:w,
//     phone: h,
//     email: l
// })
// alert(`The name of user you added is ${contacts[contacts.length - 1].name}`);
// console.log(contacts[contacts.length - 1].name)
// let day = "monday";
// switch(day) {
//     case "tuesday":
//         console.log(2);
//         break;
//     case "friday":
//         console.log(5);
//         break;
//     case "monday":
//         console.log(1);
//         // break;
//     case "saturday":
//         console.log(6);
//         // break;
//     default:
//         console.log("nah");
//         break;
// }
// let user = prompt("enter any number: ","1,2,3...");
// if (user > 90 && user < 110) {
//     alert("Bingo");
// } else {
//     alert("Miss")
// }
// let message = user > 90 && user < 110 ? "Bingo" : "Miss";
// alert(message)

//simple calculator
// let ope = prompt("Choose operation to be done: "," +, *, /, -");
// let input1 = parseFloat(prompt("Enter the first number: ",0));
// let input2 = parseFloat(prompt("Enter the second number: ",0));
// // console.log(ope !== "+")
// // operating on specific operator
// if(ope !== "+" || ope !== "*" || ope !== "/" || ope !== "-" ) {
//     alert("Please enter a valid operation");
// } else{
// switch (ope) {
//     case "+":
//         if(Number.isNaN(input1 || input2)) {
//             alert("Please enter number values")
//         } else {
//             let sum = +input1 + +input2;
//             alert(`Your sum is ${sum}`);
//         }
//         break;
//     case "*":
//         if(Number.isNaN(input1 || input2)) {
//             alert("Please enter number values")
//         } else {
//             let product = input1 * input2;
//             alert(`Your product is ${product}`);
//         }
//         break;
//     case "/":
//         if(Number.isNaN(input1 || input2)) {
//             alert("Please enter number values")
//         } else {
//             let div = input1 / input2;
//             alert(`Your division is ${div}`);
//         }
//         break;
//     case "-":
//         if(Number.isNaN(input1 || input2)) {
//             alert("Please enter number values")
//         } else {
//             let sub = input1 - input2;
//             alert(`Your subtraction is ${sub}`);
//         }
//         break;
//     default:
//         alert("You didn't choose a valid operator");
//         break;
// }
// }

// exercise
// 
// let loop = parseInt(prompt("How many movie you want to enter? "));
// let movie = [];
// if(!Number.isNaN(loop)) {
//     for(let i = 0; i < loop;i++) {
//         let Mname = prompt("What is the name of the movie? ");
//         let rate = prompt("What is the rating? ");
//         movie.push(
//             {
//                 name : Mname,
//                 rating : rate
//             }
//         )
//     }
// }
// for(let ele of movie) {
//     console.log(`${ele.name} => ${ele.rating}`)
// }
//exercise
// let add = (a,b) => (!Number.isInteger(a) || !Number.isInteger(b)) ? NaN : a + b;
// function action(func,c,d) {
//     let res = func(c,d);
//     return res;
// }
// console.log(action(add,1.1,2));
// exercise
// Write a program that will print out (to the console) consecutive integers 10 times, in two-second intervals (start with the number 1). Use the functions setInterval, clearInterval and setTimeout.
// let i = 1;
// let intervalId = setInterval(() => {
//         console.log(i++);
// },2000);
// setTimeout(() => clearInterval(intervalId),22000);

// Exercise 6: Write a function that will calculate the n-th element of the Fibonacci sequence. This sequence is defined by a formula:

// function fibonacci(n) {
//     let fibSum = 0
//     if(n !== 0) {
//         if ( n === 1) {
//         fibSum =   1;
//         } else {
//         fibSum = fibonacci(n - 1) + fibonacci(n - 2);
//         }
//     }
//     return fibSum;
// }
// console.log(fibonacci(5)); 
// f2 = f0 + f1 => 0 + 1 = 1
// f3 = f1 + f2 => 1 + 1 = 2
// f4 = f2 + f3 => 2 + 1 = 3
// f5 = f3 + f4 => 2 + 3 = 5
// using arrow function
// let fib = num => sum = num == 0 ? 0 : (num == 1 ? 1 : fib(num - 1) + fib(num - 2)); 
// console.log(fib(5));
// using iteration to implement fibonacci
// function fibItr(n) {
//     let a = 0;
//     let b = 1;
//     let next;
//     next = n == 0 ? 0 : 1;
//     for(let i = 2; i <= n; i++) {//a(1),a(2)
//         next = a + b; //1
//         a = b; // a = 1
//         b = next; // b = 1
//     }
//     return next;
// }
// console.log(fibItr(4))
// Exercise
// Our program has grown quite a bit, making it a little hard to read. It is especially visible in the switch instruction, where most of the logic is enclosed. Try to organize your program code by using functions. Define and call three functions in the appropriate places:

// showContact: the function should take two arguments; the first is the list of contacts, and the second is the index number of the contact to display; inside the function, check if the correct arguments are passed, that is, if the contacts are an array (use the instanceofArray construction for this);
// showAllContacts: the function should take one argument, the list of contacts; inside the function, check if the given argument is an array;
// addNewContact: the function should take four arguments, a contact list and the data of the new contact, that is: name, phone, and number; before adding a new contact, check if the passed argument is an array and if the new contact data have any value.
// answer

// function showContact(contactList,index) {
//     if(!(contactList instanceof Array)) {
//         alert("the contact list should be an array!");
//     }
//     if(!Number.isInteger(index)) {
//         alert("The index should be integer!");
//     }
//     for(let i = 0;i < contactList.length;i++) {
//         if(i == index) {
//             alert(`The contact that you're looking for is: ${contactList[i].name}`);
//             break;
//         }
//     }
// }
// let showAllContacts = function(contactList) {
//     if(!(contactList instanceof Array)) {
//         alert("The contact list should an array");
//     }
//     for(let i = 1;i <= contactList.length;i++) {
//         alert(`The ${i} contact is: ${contactList[i].name} | ${contactList[i].phone} | ${contactList[i].email}`)
//     }
// }

// let addNewContact = (contactList) => {
//     if(!(contactList instanceof Array)) {
//         alert("The contact list should an array");
//     }
//     let name = prompt("Name of contact:")
//     let phone = prompt("Phone of contact");
//     let email = prompt("Email of contact");
//     if(name == null || phone == null || email == null) {
//         alert("Please provide all the info!");
//     }
//     contactList.push({
//         name : name,
//         phone : phone,
//         email : email
//     })
//     alert("Added successfully");
//     alert(`The added contact name is ${contactList[contactList.length - 1].name}`)
// }
// let choice;
// do {
//     let contacts = [{
//         name: "Maxwell Wright",
//         phone: "(0191) 719 6495",
//         email: "Curabitur.egestas.nunc@nonummyac.co.uk"
//     }, {
//         name: "Raja Villarreal",
//         phone: "0866 398 2895",
//         email: "posuere.vulputate@sed.com"
//     }, {
//         name: "Helen Richards",
//         phone: "0800 1111",
//         email: "libero@convallis.edu"
//     }];
//     choice = prompt("What action You want to perform", "1-show a contact, 2- showAllContact, 3- Add new contact,4- to exit");
//     //alert if the input is not a number
//     if(!Number(choice)) {
//         alert("Please provide number only");
//     }
//     //switch to perform the specific action
//     switch(Number(choice)) {
//         case 1:
//             let ind = prompt("What is the index of the contact","0,1,2,3...");
//             showContact(contacts,Number(ind));
//             break;
//         case 2:
//             showAllContacts(contacts);
//             break;
//         case 3:
//             addNewContact(contacts)
//             break;
//         case 4:
//             break;
//         default:
//             alert("You didn't select the specific action");
//             break;
//     }
// } while(Number(choice) !== 4);
// Exercise
// Write your own div function that will take two call arguments and return the result of dividing the first argument by the second. In JavaScript, the result of dividing by zero is the value Infinity (or -Infinity, if we try to divide a negative number). Change this. If you pass 0 as the second argument, your function should throw a RangeError exception with the appropriate message. Prepare a test call of the function for both valid division and division by zero.
// function div(a,b) {
//     if(b == 0) {
//         throw new RangeError("The second value can't be zero!");
//     }
//     return a / b;
// }
// console.log(div(1,2));
// console.log(div(1,0));
// Exercise
// Write a program that, in a loop, divides the number 1000 by successive elements of the numbers array, displaying the result of each division. To divide the numbers, use the function from the previous task. Use the try...catch construction to handle an exception thrown in the case of division by zero. If such an exception is caught, the program should print an appropriate message (taken from the exception) and continue its operation (division by successive elements of the array).
// let numbers = [10, 40, 0, 20, 50];
// let result;
// for(ele of numbers) {
//     try {
//     result = div(1000,ele);
//     console.log(result);
//     } catch(error) {
//         console.log(error.message)
//     }
// }
// console.time("s");
// function outer() {
//     let name = "outer";
//     let str = inner();
//     return str;
// }
// function inner() {
//     let name = "inner";
//     return "Hello !";
// }
// console.log("before outer() call");
// console.log(outer());
// console.log("after outer() call");
// console.timeEnd("s");
// Exercise
// You have started to organize the paintings you keep at home, and have decided to make an inventory of some of the most important ones. Declare an array of objects that will correspond to the following images: Mona Lisa (Leonardo da Vinci, 1503), The Last Supper (Leonardo da Vinci, 1495), Starry Night (Vincent van Gogh, 1889), The Scream (Edvard Munch, 1893), Guernica (Pablo Picasso, 1937), The Kiss (Gustav Klimt, 1907), Girl With a Pearl Earring (Johannes Vermeer, 1665), The Birth of Venus (Sandro Botticelli, 1485), Las Meninas (Diego Velázquez, 1656), The Creation of Adam (Michelangelo, 1512).
// Display all the images in the list in the console (full information: title, artist and date of creation).
//answer
// let images = [{
//     title:"Mona Lisa",
//     artist: "Leonardo da Vinci",
//     dateOfCreation:1503
// },{
//     title: "The scream",
//     artist: "Edvard Much",
//     dateOfCreation : 1893 
// },{
//     title: "Guernica",
//     artist: "Pablo Picasso",
//     dateOfCreation : 1937
// }]
// method 1
// for(member of images) {
//     console.log(`Title: ${member.title} Artist: ${member.artist} dateOFCreation: ${member.dateOfCreation}`)
// }
// method 2
// images.forEach((member) => {console.log(`Title: ${member.title} Artist: ${member.artist} dateOFCreation: ${member.dateOfCreation}`)})
// Exercise
// Write two functions, Image and getImage, that will return a new image object based on three given arguments: title, artist, and date.

// The Image function is the constructor, and getImage is the factory. Using the images data array from the previous task, create a new array, images1, using the Image constructor (don't copy the objects, but just create new ones based on the properties read).

// Similarly, from images1 create a new array, images2, using getImage.

// Display the contents of images2.
//image constructor
// let Image = function(title,artist,dateOfCreation) {
//     this.title = title,
//     this.artist = artist,
//     this.dateOfCreation = dateOfCreation
// }
// image returning func
// let getImage = function(title,artist,dateOfCreation) {
//     return {
//         title,
//         artist,
//         dateOfCreation
//     }
// }
// let image1 = [];
// images.forEach(image => image1.push(new Image(image.title,image.artist,image.dateOfCreation)))
// console.log(image1.getImage())
// let imagePaintings = {
//     list : [],
//     contains: function(title) {
//         isContained = false;
//         for(image of this.list) {
//             if(image.title === title) {
//                 isContained = true;
//             }   
//         }
//         return isContained;
//     },
//     add: function(title,artist,dateOfCreation) {
//         if(!this.list.contain(title)) {
//             this.list.push(title,artist,dateOfCreation);
//         }
//     },
//     edit : function(title,artist,dateOfCreation) {
//         if(this.list.contains(title)) {
//             for(image of this.list) {
//                 if(image.title === title) {
//                     image.artist = artist;
//                     image.dateOfCreation = dateOfCreation;
//                     break;
//                 }
//             }
//         }
//     },
// }
// // deep copy function
// let deepCopy = function(obj) {
//     let newObj = Array.isArray(obj) ? [] : {};
//     for(keys in obj) {
//         if(typeof obj[keys] === "object") {
//             newObj[keys] = deepCopy(obj[keys]);
//         } else {
//             newObj[keys] = obj[keys];
//         }
//     }
//     return newObj;
// }

// ********************************************
// let log = prompt("Please log in: ");
// if(log == "admin") {
//     let password = prompt("Please enter your password: ");
//     if(password == "TheMaster") {
//         alert("Welcome!");
//     } else if(password == null || password == "") {
//         alert("canceled");
//     } else {
//         alert("Wrong password!");
//     }
// } else if(log == null) {
//     alert("canceled");
// } else {
//     alert("I don't know");
// }
// let phone = document.querySelector("input");
// console.log(phone)
// let check = /^(\+\d{1,2}\s?-?)?\(?\d{3}\)?[-\s.]?\d{3}[-\s.]?\d{4}$/;
// let button = document.querySelector("button");
// console.log(button)
// function checker() {
//     if(check.test(phone.value)) {
//         console.log('logged in')
//     } else {
//         console.log('incorrect password')
//     }   
// }

// button.addEventListener('click',checker)
// console.log(generator());
// function generator (min = 1,max = 10) {
//     let ans = Math.floor((Math.random() * ((max - min) + 1)) + min);
//     return ans;
// }
// let num = prompt('What is the number');
// let exp = prompt('What is the exponent');

// ***************************
// let num = parseInt(prompt("Please enter a number you would like to fizz buzz to: "));

// for(let i = 1;i <= num;i++) {

//     if(i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz");
//     } else if(i % 3 == 0) {
//         console.log("Fizz");
//     } else if(i % 5 == 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// Get number input from user
// Set the parsed number to a variable named num(num = parseInt(input))
// For number < num(number starting from 1):
//       If num is divisible by both 3 and 5:
//              print(FizzBuzz)
//       Else if num is divisible by 3:
//              print(Fizz)
//       Else if num is divisible by 5:
//              print(Buzz);
//       Else:
//              print(number)
//       Endif
// EndFor

// *******************************
// Get user input and store it in a variable named num
// Set a variable sum to zero for storing tha result
// For number less than n starting from 1:
//      add 1/number to sum variable
// EndFor
// Return sum

// Define a func named cutter that takes a parameter str
// slice the last letter recursively till length of str is 1
// build the original string starting from length 1

// *****************************************
// area of triangle
// pseudocode
// Define a function named areaOfTriangle that takes 2 parameters(base, height)

// check if the parameters are numbers
//      if they aren't numbers:
//          return "Please provide number values only"
//      else:
//          return 1/2 * base * height(area)
// function areaOfTriangle(base,height) {
//     if(typeof base != "number" || typeof height != "number") {
//         return "Please provide number values only"
//     } else {
//         return 1/2 * base * height
//     }
// }
// console.log(areaOfTriangle(1,"1"));

// calculate the point of soccer
// pseudocode
// Define a function named soccerPoints that takes three parameters(wins, draws, loses)
// Check if the arguments are number type
//      If arguments aren't number:
//          return "Please provide number values only"
//      Else if anyone of the argument is undefined:
//          return "Please provide all inputs(arguments)"
//      Else:
//          return wins * 3 + draws * 1 + loses * 0
//      End if
// End function

function soccerPoints(wins, draws, loses) {
    if(wins == undefined || draws == undefined || loses == undefined) {
        return "Please provide all inputs(arguments)";
    } else if(typeof wins != "number" ||typeof draws != "number" || typeof loses != "number") {
        return "Please provide  number values only";
    } else if(wins < 0 || draws < 0 || loses < 0) {
        return "Please provide positive number values only"
    } else {
        // calculate the total point and return
        return wins * 3 + draws * 1 + loses * 0;
    }
}
console.log(soccerPoints(-1,0,1));