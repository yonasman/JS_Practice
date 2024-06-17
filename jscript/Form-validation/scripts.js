// question one
let par1 = document.getElementById("sample1");
function logger() {
    console.log(par1);
    console.log(par1.textContent)
}
// window.onload = logger;
// question two
let techCompanies = document.getElementById("techCompanies");
let newLi = document.createElement("li");
newLi.textContent = "FaceBook";
newLi.classList.add("blue")
techCompanies.append(newLi)
let blueCom = document.getElementById("blueCompanies");
let blues = document.querySelectorAll(".blue");
blueCom.append(`The number of blue companies is ${blues.length}`)

// Question three
// *********************************************
let body = document.body;
function changeBg(e) {
    body.style.backgroundColor = "#99ecff";
    // console.log(e.target)
}
function removeBg() {
    body.style.backgroundColor = "";
}
let yes = document.getElementById("yesBackground");
yes.addEventListener("click",changeBg);
let no = document.getElementById("noBackground");
no.onclick = removeBg;

// question four
// *************************************

// Pseudocode
// Define a function named adder that takes an event as a parameter
// prevent default behaviour
// If inputs value is null:
//      make the background of input pink and append error message "Please provide input values"
// Else if their value is invalid:
//      make the background invalid and append error message "Please provide number values "
// ENDIF
// Add the result and append
let inputs = document.querySelectorAll("input");
let submit = document.getElementById("submitButton");
function adder(e) {
    e.preventDefault();
    
    let result = document.getElementById("sum");
    // reset to default color
    result.style.backgroundColor = "";
    inputs.forEach((input) => {
        input.style.backgroundColor = "";
        
    })
    
    if(inputs[0].value == "" || inputs[1].value == "") {
        inputs.forEach((input) => {
            input.style.backgroundColor = "pink";
            
        })
        result.textContent = "Please provide values";
        result.style.backgroundColor = "pink";
    } else if(!(Number(inputs[0].value)) || !(Number(inputs[1].value))) {
        inputs.forEach((input) => {
            input.style.backgroundColor = "pink";
            
        })
        result.textContent = "Please provide Number values";
        result.style.backgroundColor = "pink";
    } else {
        let ans = Number(inputs[0].value) + Number(inputs[1].value)
        result.textContent = ans;
    }
}
submit.addEventListener("click", adder)
// **********************************************
