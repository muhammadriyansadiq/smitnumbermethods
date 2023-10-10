// var abcd = (name = 'abc') => name
// let b = document.getElementById("b");
// b.innerText = abcd(prompt("abc"))



//=========number method=============//
// let x = 1.23456;
// let newX = x.toFixed(2); 
// console.log(newX);


// let highest = Math.max(2, 56, 12, 1, 233, 4);// this is a method
// console.log(highest);
// let highestOfWords = Math.max("hi", 3, "bye");
// console.log(highestOfWords);

// let result2 = Math.pow(5, 3);
// console.log(result2);

// let a = -6.8
// let b = -7.59

// console.log(Math.floor(a))
// console.log(Math.floor(b))

// console.log(Math.ceil(a))
// console.log(Math.ceil(b))

// console.log(Math.trunc(a))
// console.log(Math.trunc(b))

// let a= Math.PI
// console.log(a)
// let b = 5.7
// console.log(Math.ceil(b),Math.floor(b),Math.round(b))
// let random = Math.floor(Math.random()*11)
// console.log(random)
// let random1 = Math.floor(Math.random()*10 +1)
// console.log(random1)
// let random2 = Math.floor(Math.random()*100 +1)
// console.log(random2)



// exercise ===========================================================
// function nam(min,max) {
// console.log(`Min ${Math.min(min)} Max${Math.max(max)}`)
// }

// for(let i=0;i<100;i++){
//     nam(Math.floor(Math.random()*100+1),Math.floor(Math.random()*100+1));
// }


// let arr = ["grapefruit", 4, "hello", 5.6, true];
// function printStuff(element, index) {
//  console.log("Printing stuff:", element, "on array position:",index)
// }
// arr.forEach(printStuff)//for each apnai ander value and index laita hai


let arr = ["squirrel", 5, "Tjed", new Date(), true];
function checkString(element, index) {
    if(typeof element === "boolean" || typeof element === "number")
 return element;
}
let filterArr = arr.filter(checkString);
console.log(filterArr);