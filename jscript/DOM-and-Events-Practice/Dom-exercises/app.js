// const MOUNTAINS = [
//     {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
//     {name: "Everest", height: 8848, place: "Nepal"},
//     {name: "Mount Fuji", height: 3776, place: "Japan"},
//     {name: "Vaalserberg", height: 323, place: "Netherlands"},
//     {name: "Denali", height: 6168, place: "United States"},
//     {name: "Popocatepetl", height: 5465, place: "Mexico"},
//     {name: "Mont Blanc", height: 4808, place: "Italy/France"}
//   ];

// // *************************************

// let docFragment = new DocumentFragment();
// // table
// let table = document.createElement("table");
// // table rows
// let tr1 = document.createElement("tr");

// // table heads
// let th1 = document.createElement("th");
// th1.textContent = "Name";
// tr1.appendChild(th1);
// let th2 = document.createElement("th");
// tr1.appendChild(th2);
// th2.textContent = "Height";
// let th3 = document.createElement("th");
// th3.textContent = "Place";
// tr1.appendChild(th3)

// // looping and adding table data
 
// table.appendChild(tr1);   
// for(let i = 0;i < MOUNTAINS.length;i++) {
//     let tr2 = document.createElement("tr");
//     let td1 = document.createElement("td");
//     let td2 = document.createElement("td");
//     let td3 = document.createElement("td");
//     td1.textContent = `${MOUNTAINS[i].name}`;
//     tr2.appendChild(td1);
//     td2.textContent = `${MOUNTAINS[i].height}`;
//     tr2.appendChild(td2);
//     td3.textContent = `${MOUNTAINS[i].place}`;
//     tr2.appendChild(td3);
//     table.appendChild(tr2);
    
// }
// docFragment.appendChild(table);
// let container = document.getElementById("mountains");
// container.appendChild(docFragment)
// table.style.textAlign = "right"

// // **********************************
// function byTagName(node, tagName) {
//     let descendants = node.querySelectorAll(tagName);
//     return Array.from(descendants);
// }
// console.log(byTagName(document.body, "h1").length);
//   // → 1
// console.log(byTagName(document.body, "span").length);
//   // → 3
// let para = document.querySelector("p");
// console.log(byTagName(para, "span").length);


// // Create some content
// document.body.appendChild(document.createTextNode(
//     "supercalifragilisticexpialidocious ".repeat(1000)));

//   let bar = document.querySelector("#progress");
//   window.addEventListener("scroll", () => {
//     let max = document.body.scrollHeight - innerHeight;
//     bar.style.width = `${(pageYOffset / max) * 100}%`;
//   });

// *****************************************************
document.write(Date())