let arr = [15, 10, 5, 12, 4, 9]
for(let i=0; i<arr.length; i++){
  for(let j=i+1; j<arr.length; j++){
    if(arr[i] > arr[j]){
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  }   
}
console.log(arr)
// [4, 5, 9, 10, 12, 15]
// Time Complexity: O(n^2) - 

//Descending
let arr2 = [1, 2, 3, 4, 5, 6]
for(let i=0; i<arr2.length; i++){
  for(let j=i+1; j<arr2.length; j++){
    if(arr2[i] < arr2[j]){
      let temp = arr2[i]
      arr2[i] = arr2[j]
      arr2[j] = temp
    }
  }   
}
console.log(arr2) // [6, 5, 4, 3, 2, 1]