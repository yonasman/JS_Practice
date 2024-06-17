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

let checkboxes = document.querySelectorAll("input[name = 'Color']");
let btn = document.getElementById("btn");
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

