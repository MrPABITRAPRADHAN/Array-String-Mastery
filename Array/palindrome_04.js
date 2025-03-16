let arr = [1,2,4,3,2,1]
let l = 0
let h = arr.length-1;
let temp =false

for(let i=0;i<arr.length;i++){

   while(l<h){
     if(arr[l]==arr[h]){
        l++;
        h--;
        temp =true;
        break;
     }else{
        temp =false;
        break;
     }
   }
}

console.log(temp==true?"palindrome":"not a palindrome")
console.log(temp)