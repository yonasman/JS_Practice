// shuffle an array
// Pseudocode
// **********************
// Define a function named shuffleArray that takes an array as a parameter
// generate the index randomly
// assign the element for that randomly generated index
// function shuffleArray(arr) {
//     for(let i = arr.length - 1;i > 0;i++) {
//         let j = Math.floor(Math.random() * (i + 1));
//         [arr[i],arr[j]] = [arr[j],arr[i]];
//     }
// }
// console.log(shuffleArray([1, 2, 3]))

// get average age
// pseudocode
// ********************
// Define a function named getAverageAge that takes array as a parameter
// use reduce method
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let users = [ john, pete, mary ];
// function getAverageAge(arr) {
//     let sumOfAge = arr.reduce((sum,user) => {
//         return sum += user.age;
//     },0)
//     let avgAge = sumOfAge / arr.length;
//     return  avgAge;
// }
// console.log(getAverageAge(users));
// unique strings
// ***********************************
// Pseudocode
// Define a function named unique that takes array as a parameter
// Iterate and find unique strings

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];
// function unique(arr) {
//     let uniques = [];
//     arr.forEach(ele => {
//         if(!uniques.includes(ele)) {
//             uniques.push(ele);
//         }
//     });
//     return uniques;
// }
// console.log(unique(strings));
// create keyed object from Array
// ********************************
// pseudocode
// Define a function named groupById that takes array as a parameter
// use map to create an object



let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(users);
  
  /*
  // after the call we should have:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */

//   solution
function groupById(arr) {
    let newObj = arr.reduce((obj,user) => {
       obj[user.id] = user;
       return obj;
    },{})
    return newObj;
}
console.log(groupById(users))