//1
// function findMinMaxWords(sentence) {
//     const words = sentence.split(' ');
//     return {
//       min: words.reduce((a, b) => a.length <= b.length ? a : b),
//       max: words.reduce((a, b) => a.length >= b.length ? a : b)
//     };
//   }
  
//   const result = findMinMaxWords("Hello World!");
//   console.log("Eng qisqa so'z:", result.min); 
//   console.log("Eng uzun so'z:", result.max);  
  




//2
// let fruits = ["Hello World"];
// let joinedFruits = fruits.join(" "); 
// let reversed = joinedFruits.split('').reverse().join('');
// console.log(reversed); 




//3
// function reverseWords(sentence) {
//     return sentence.split(' ').reverse().join(' ');
//   }
  
//   console.log(reverseWords("Hello World Mars")); 
  



//4
// const lastLen = str => str.trim().split(" ").pop().length;

// console.log(lastLen("Hello world")); 





//5
// function kochirish(arr) {
//     let res = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] === arr[j] && !res.includes(arr[i])) {
//           res.push(arr[i]);
//         }
//       }
//     }
  
//     return res;
//   }
  
//   let sonlar = [1, 2, 3, 2, 4, 5, 1, 6, 3];
//   console.log(kochirish(sonlar)); 
  
  




//6
// function removeArr(str) {
//     return str.trim();
// }

// console.log(removeArr("        Hello World!         "));



//7
// function removeArr(str) {
//     return str+;
// }

// console.log(removeArr("        Hell5o Wo7rld!         "));




//7
// function sumOfDigits(str) {
//     let sum = 0;
  
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] >= "0" && str[i] <= "9") {
//         sum += +str[i];
//       }
//     }
  
//     return sum;
//   }
  
//   console.log(sumOfDigits("abc123def45")); 
  