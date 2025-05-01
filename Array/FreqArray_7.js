let arr = [10, 20, 30, 20, 40, 10]
// for(let i=0; i<arr.length; i++){
//   let count = 1;
//   for(let j = i+1; j<arr.length ; j++){
//     if(arr[i] == arr[j]){
//      count++;
//     }
//   }
//   console.log(arr[i] + " - " + count + " times")
// }

const freq = {};
arr.forEach(e => {
  freq[e] = freq[e];
  if(freq[e]){
    freq[e]++;
  }else{
    freq[e] = 1;
  }
});
console.log(" ")
console.log("Frequency of the elements in the array is :")
console.log(freq);
console.log(" ")
console.log("Unique and duplicate elements in the array are :")
for(const key in freq){
  freq[key] == 1? console.log(key + " is unique elememt") : console.log(key + " is duplicate element")
}
