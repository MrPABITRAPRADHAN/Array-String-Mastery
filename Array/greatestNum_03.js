//! greatest number in an array
let arr = [10, 20, 30, 40, 25, 15]

//? reduce method =>(vvi)
// let greatest = arr.reduce((acc, num)=>{
//     if(num>acc){
//         return num
//     }
//     return acc
// },arr[0])

// console.log(greatest)


//? FOR loop =>
// let max = arr[0];
// for(let i=0; i<arr.length; i++){
//    if(arr[i]>max){
//     max = arr[i];
//    }
// }
// console.log("The maximum value is : "+ max)

//? filter =>
// let max = arr[0]
// let maxi = arr.filter((e)=>{
//     if(e>max){
//         max = e
//     }
// })
// console.log("Greatest is : "+max)
// console.log(maxi)