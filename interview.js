//! interview qn..

//? check it is array or not
console.log(Array.isArray())
function checkarray(elm){
    return Array.isArray(elm)
}
console.log(checkarray({}))


//? how to empty an array (without through loop, without reset, and without pop)
let array = [1,2,3,4,5]
array.splice(0)
// array.length = 0;
console.log(array)

//? how to check no is integer or not
let n = 7.5;
console.log(n %1 ==0? "integer":"not an integer")

//? string in alphabetical order
let ss = "pabitra"
console.log(ss.split("").sort().join(""))
console.log(ss)