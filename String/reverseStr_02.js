let str = "Hello"
// o/p -> olleH

//?reverse a single word
let newStr = str.split("").reverse().join("")
console.log(newStr)



//? reverse a sentence
let s = "i am an Indian i love India"
let news = s.split(" ").reverse().join(" ")
console.log(news)



//? reverse each word in the sentense
// "hello good morning" -> "olleh doog gninrom"
let s1 = "hello good morning";
let s2 = ""

s1.split(" ").forEach(function(word){
    word = word.split("").reverse().join("");
    s2 = s2 + " "+ word ;
})
console.log(s2)
