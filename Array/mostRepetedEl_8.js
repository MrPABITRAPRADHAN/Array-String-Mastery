let arr = [10, 20, 30, 20, 10, 40, 10]
let freq = {};
arr.forEach(e=>{
    freq[e] = freq[e];
    if(freq[e]){
        freq[e]++;
    }else freq[e] = 1;
})
console.log(freq)
let maxCount = 0;
let mostRepeatedElement = null;
for(const key in freq){
    if(freq[key] > maxCount){
        maxCount = freq[key];
        mostRepeatedElement = key;
    }
}
console.log(mostRepeatedElement)