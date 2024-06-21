// 1- working with checkbox values
// *********************************************
// get the checkbox
// get checkbox elements
// let c1 = document.getElementById("c1");
// let c2 = document.getElementById("c2");
// let c3 = document.getElementById("c3");
// get the button
// let btn = document.getElementById("btn");
// btn.onclick = () => {
//     let colors = [];
//     let checkboxes = document.querySelectorAll("input[name = 'Color']:checked");
//     // loop and get value of checkboxes
//     checkboxes.forEach((item) => {
//         colors.push(item.value);
//     })
//     console.log(colors)
// }
// *********************************************
// 2- checking and unchecking using button

// let checkboxes = document.querySelectorAll("input[name = 'Color']");
// let btn = document.getElementById("btn");
// btn.onclick = () => {
//     checkboxes.forEach((item) => {
//         if(item.hasAttribute("checked")) {
//             item.removeAttribute("checked");
//         } else {
//             item.setAttribute("checked","");
//         }
//     })
// }
// function check(checked = true) {
//     checkboxes.forEach((item) => {
//         item.checked = checked;
//     })
// }

// btn.onclick = checkAll;
// // check function
// function checkAll() {
//     check();
//     this.onclick = unCheckAll;

// }
// // uncheck function
// function unCheckAll() {
//     check(false);
//     this.onclick = checkAll;
// }

// WORKING RADIO BUTTON
// ********************
// let colors = document.querySelectorAll("input[type='radio']");
// // console.log(colors)
// let btn2 = document.getElementById('btn2');
// let div = document.getElementById("root");
// btn2.onclick = () => {
//     let selectedColor;
//     colors.forEach((color) => {
    
//     // console.log(color.checked)
//     if(color.checked) {
//         selectedColor = color.value;
//         div.textContent = selectedColor;
//         return;
//     }
// })
//     div.textContent = selectedColor ? `${selectedColor}`:"You didn't select anything!"
// }
// btn2.onchange = () => {
//     for(let color of colors) {
//         if(this.checked) {
//             console.log(this.value)
//         }
//     }
// }
// **************************************
// const people = [
//     { name: 'Alice', age: 21 },
//     { name: 'Bob', age: 21 },
//     { name: 'Charlie', age: 25 }
// ];

// let result = people.reduce((acc,ele) => {
//     let key = ele.age;
//     if(!acc[key]) {
//         acc[key] = [];
//     }
//     acc[key].push(ele.name);
//     return acc;
// },{})
// console.log(result);

/* Output:
{
    21: ['Alice', 'Bob'],
    25: ['Charlie']
}
*/
// ******************************
// mapping
// var officers = [
//     { id: 20, name: 'Captain Piett' },
//     { id: 24, name: 'General Veers' },
//     { id: 56, name: 'Admiral Ozzel' },
//     { id: 88, name: 'Commander Jerjerrod' }
//   ];

// let ids = officers.map((obj) => {
//         return obj.id;
// })
// console.log(ids)

// ***********************
// reduce
var pilots = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
    },
    {
      id: 2,
      name: "Temmin 'Snap' Wexley",
      years: 30,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 16,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
    }
  ];
// total years of employees
// let result = pilots.reduce((acc,ele) => {
//     return acc += ele.years;
// },0)
// console.log(result)
// most experienced employee
// let expPilot = pilots.reduce((acc, ele) => {
//     if(acc < ele.years) {
//         acc = ele.years;
//     }
//     return acc;
// },0) 
// console.log(expPilot)

// let mostExpPilot = pilots.reduce((oldest,pilot) => {
//     return (oldest.years || 0) > pilot.years ? oldest : pilot;
// },{})
// console.log(mostExpPilot)
// *****************************************
var personnel = [
    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
    },
  ];
// let totalForceUser = personnel.filter((user) => user.isForceUser === true).reduce((total, user) => {
//     total += user.pilotingScore + user.shootingScore;
//     return total;
// },0)
// console.log(totalForceUser);
// **********************
let totalForceUser = personnel.reduce((total, user) => {
    if(user.isForceUser == true) {
        total += user.pilotingScore + user.shootingScore;
    }
    return total;
},0)
console.log(totalForceUser)