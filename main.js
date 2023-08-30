/*
const para = document.querySelector("p");
    para.addEventListener("click", updateName);

    function updateName(){
      let name = prompt("Enter a new name: ")
      para.textContent = "Player 1: " + name;
    }
*/

let myName;

myName = "Cheikh";
console.log(myName);
console.log(typeof(myName));
console.log(myName == 'Abdoulaye');
console.log(10 > 9);

//document.getElementById("para").innerHTML = 'Hello! my name is ' + myName;
document.getElementById("para").innerHTML = `Hello! my name is   ${myName}`;
document.getElementById("para2").innerHTML = 'my name length is ' + myName.length;

//check if something is a number
console.log(Number(myName))
console.log(Number(10))

// MATH
const myNum = 98.923; // to make constant
let myNum2 = 293.13;
console.log(Math.round(myNum))
console.log(Math.floor(myNum))

console.log(Math.round(myNum2))
myNum2 = 10;
console.log(Math.round(myNum2))
