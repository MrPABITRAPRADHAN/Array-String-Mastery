let str = "hiih"
const freq = {};

for (let i = 0; i < str.length; i++) {
  const char = str[i];
  if (freq[char]) {
    freq[char]++;
  } else {
    freq[char] = 1;
  }
}
console.log(freq);