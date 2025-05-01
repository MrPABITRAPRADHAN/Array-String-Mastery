// let arr = [2, 3, 4, 5, 6]
// let arr = [7, 6, 5, 4, 3, 2]
let arr = [4,3,5,2,6,1]

//? check array is sorted or not.  (sorted in either ascending or descending order)
function isAscending(arr){
    for(let i = 0; i<arr.length-1; i++){
      if(arr[i] > arr[i + 1]){
        return false;
      }
    }
    return true;
}

function isDescending(arr){
    for(let i = 0; i<arr.length-1; i++){
      if(arr[i] < arr[i+1]){
        return false;
      }
    }
    return true;
}

if(isAscending(arr)){
    console.log("array is sorted in ascending order")
}else if(isDescending(arr)){
    console.log("array is sorted in descending order")
} else{
    console.log("array is not sorted")
}

