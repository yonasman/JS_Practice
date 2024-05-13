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

function fibonacci(n) {
    let fibSum = 0
    if(n !== 0) {
        if ( n === 1) {
        fibSum =   1;
        } else {
        fibSum = fibonacci(n - 1) + fibonacci(n - 2);
        }
    }
    return fibSum;
}
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


function showContact(contactList,index) {
    if(!(contactList instanceof Array)) {
        alert("the contact list should be an array!");
    }
    if(!Number.isInteger(index)) {
        alert("The index should be integer!");
    }
    for(let i = 0;i < contactList.length;i++) {
        if(i == index) {
            alert(`The contact that you're looking for is: ${contactList[i].name}`);
            break;
        }
    }
}
let showAllContacts = function(contactList) {
    if(!(contactList instanceof Array)) {
        alert("The contact list should an array");
    }
    for(let i = 1;i <= contactList.length;i++) {
        alert(`The ${i} contact is: ${contactList[i].name} | ${contactList[i].phone} | ${contactList[i].email}`)
    }
}

let addNewContact = (contactList) => {
    if(!(contactList instanceof Array)) {
        alert("The contact list should an array");
    }
    let name = prompt("Name of contact:")
    let phone = prompt("Phone of contact");
    let email = prompt("Email of contact");
    if(name == null || phone == null || email == null) {
        alert("Please provide all the info!");
    }
    contactList.push({
        name : name,
        phone : phone,
        email : email
    })
    alert("Added successfully");
    alert(`The added contact name is ${contactList[contactList.length - 1].name}`)
}
let choice;
do {
    let contacts = [{
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
    }, {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    }];
    choice = prompt("What action You want to perform", "1-show a contact, 2- showAllContact, 3- Add new contact,4- to exit");
    //alert if the input is not a number
    if(!Number(choice)) {
        alert("Please provide number only");
    }
    //switch to perform the specific action
    switch(Number(choice)) {
        case 1:
            let ind = prompt("What is the index of the contact","0,1,2,3...");
            showContact(contacts,Number(ind));
            break;
        case 2:
            showAllContacts(contacts);
            break;
        case 3:
            addNewContact(contacts)
            break;
        case 4:
            break;
        default:
            alert("You didn't select the specific action");
            break;
    }
} while(Number(choice) !== 4);
