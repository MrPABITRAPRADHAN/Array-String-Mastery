//! interview qn..

//? check it is array or not
// console.log(Array.isArray())
// function checkarray(elm){
//     return Array.isArray(elm)
// }
// console.log(checkarray({}))


//? how to empty an array (without through loop, without reset, and without pop)
// let array = [1,2,3,4,5]
// array.splice(0)
// // array.length = 0;
// console.log(array)

//? how to check no is integer or not
// let n = 7.5;
// console.log(n %1 ==0? "integer":"not an integer")

//? string in alphabetical order
// let ss = "pabitra"
// console.log(ss.split("").sort().join(""))

//?
// console.log(5<8>2)   //false
// console.log(1>9<2)   //true


//? add a field that is active:true in each object
// let users = [
//     {name:"abc", age: 20},
//     {name:"xyz", age: 25},
//     {name:"pqr", age: 30},
// ]

//? add field
// let a = users.forEach((user) => {
//   // user.active
//    user = {...user, active:true}
//    console.log(user)
// })
// console.log(a)

//? remove duplicate from array
// let arr = [1,1,2,3,3,4,4]
// let unique = [...new Set(arr)]
// console.log(arr)
// delete arr[0]
// console.log(arr)


//? check palindrome or not
// function isPalindrome(arr) {
//   return arr.join('') == arr.reverse().join('');
// }
// console.log(isPalindrome(arr))


//? count the frequency of element
// const arr = ['a', 'b', 'a'];
// const frequency = arr.reduce((ac, val))

// const arr = ['a', 'b', 'a'];

// const freq = arr.reduce((acc, val) => {
//   acc[val] = (acc[val] || 0) + 1;
//   return acc;
// }, {});
// console.log(freq)
// let obj = freq;

// let maxKey = "";
// let max = 0;
// for(let i in obj){
//   // console.log(obj[i])
//   if(obj[i]>max){
//     max = obj[i]
//     maxKey = i;
//   }
// }
// console.log(maxKey)



// let str = ")(}{}][";


// function outer(){
//   let a = 10;
//   let b = 20;
//   function inner(){
//     return a+b
//   }
//   function inner1(){
//     return a+b
//   }

//   return {inner, inner1}
// }
// console.log(outer())



//! 13   //
                            //? interview qn (Vinnovative lab)
// let obj = [
//     {id: 1, name: "a"},
//     {id: 2, name: "b"}, 
//     {id: 1, name: "c"},
//     {id: 3, name: "d"},
//     {id: 2, name: "e"},
//     {id: 4, name: "f"},
//     {id: 5,},
// ]

//? expected output :
// {
//   '1': [ 'a', 'c' ],
//   '2': [ 'b', 'e' ],
//   '3': [ 'd' ],
//   '4': [ 'f' ],
//   '5': [ undefined ]
// }

// let newObj = obj.reduce((acc, curr)=>{
//   acc[curr.id] = acc[curr.id] || [];
//   acc[curr.id].push(curr.name)
//   return acc;
// },{})
// console.log(newObj)



//! 14
// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// const fruitCount = fruits.reduce((acc, fruit)=>{
//     acc[fruit] = acc[fruit];
//     acc[fruit] = (acc[fruit] || 0) + 1;
//     return acc;
// },{})
// console.log(fruitCount)  // { apple: 3, banana: 2, orange: 1 }























// for(let i=0; i<arr.length; i++){
//   let count = 1;
//   for(let j = i+1; j<arr.length ; j++){
//     if(arr[i] == arr[j]){
//      count++;
//     }
//   }
//   console.log(arr[i] + " - " + count + " times")
// }