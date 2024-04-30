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
let cont = false;
while(!cont) {
    let opr = prompt("What operation you want: display the first contact (first)display the last contact (last) display all contacts (all) add a new contact (new) exit the program (quit)");
    // break if opr is null
    if(opr == null) {
        break;
    }
    // switch for specific operation
    switch(opr) {
        case "first":
            alert(`${contacts[0].name}`);
            break;
        case "last":
            alert(`${contacts[contacts.length - 1].name}`);
            break;
        case "new":
            let newName = prompt("What is the name? ");
            let newPhone = prompt("What is the phone? ");
            let newEmail = print("What is the email");
            contacts.push ({
                name : newName,
                phone : newPhone,
                email : newEmail
            })
            alert(`The added name ${contacts[contacts.length - 1].name}`);
            break;
        case "all":
            for(let ele of contacts) {
                alert(ele.name)
            }
            break;
        case "quit":
            cont = true;
            break;
        default:
            alert("No much found")
    }
    let halt = prompt("Do you want to continue? ");
    if(halt == null) {
        cont = true;
    }
}