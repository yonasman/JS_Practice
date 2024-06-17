// get input element
let input = document.getElementById("filter");
// attach event listener
input.addEventListener("keyup", filterItem)
// event handler function

function filterItem(e) {
    let inputText = e.target.value.toLowerCase();
    let items = document.querySelectorAll("li");
    Array.from(items).forEach((item) => {
        if((item.textContent.toLowerCase()).indexOf(inputText) != -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    })
    
}

console.log(document.getElementById("item-wrapper").className)