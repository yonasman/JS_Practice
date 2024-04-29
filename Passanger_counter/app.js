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
function detectWord(word) {
    let ans = "";
    for(i = 0;i < word.length;i++) {
        if(word[i].toLowerCase() === word[i]) {
            ans += word[i];
        }
    }
    return ans;
}
console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));