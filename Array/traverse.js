//! Traverse array

let arr = [10, 20, 30, 30, 50];

//? map loop =>
// let arr1 = []
// arr.map((e)=>{

//     console.log(`value : ${e}, index: ${arr.indexOf(e)}`)
//     arr1.push(arr.indexOf(e))

// })
// console.log(arr1)

//? filter =>
// arr.filter((e)=>{
//     console.log(e)
//     return true;  // true , for not filtering any value
// })


//? for loop =>
// for(let i=0; i<arr.length; i++){
//     console.log(`value : ${arr[i]}, index: ${i}`)
// }


//? ES6 forEach loop =>
// arr.forEach((e)=>{
//     console.log(`value : ${e}, index: ${arr.indexOf(e)}`);  
// })


//? ES6 for of loop =>
// for(let e of arr){   
//     console.log(e)
// }

//? for in loop =>
// for(let e in arr){
//     console.log(e);   // for in loop return only index number
//     console.log(arr[e]);  // then it will return value
// }


// //? some and every method =>
    //? (some is like OR) - if one condition is true then it will return true
    //? (every is like AND) - if all condition is true th/en it will return true
// arr.some((num) => {
//     console.log(num);
//     return false; // To continue iteration 
// });


// arr.every((num) => {
//     console.log(num);
    //return true; // To continue iteration 
// });