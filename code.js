// const addToZero = (arr) => {
//     for (let i = 0; i <arr.length; i++){
//         for (let j = i + 1; j <arr.length; j++){
//             if(arr[i] + arr[j] === 0){
//                 return true
//             }
//         }
//     }
//     return false
//     }

// Time complexity = O(n^2)
// Space complexity = O(n)

// console.log(addToZero([]));
// // -> False

// console.log(addToZero([1]));
// // -> False

// console.log(addToZero([1, 2, 3]));
// // -> False

// console.log(addToZero([1, 2, 3, -2]));
// // -> True


// const hasUniqueChars = (str) => {
//     for ( i = 0; i < str.length; i++){
//         for (j = i + 1; j <str.length; j++){
//         if(str[j] == str[i]){
//         return false
//     }
// }
// }
// return true
// }

// console.log(hasUniqueChars("Monday"));
// // -> True

// console.log(hasUniqueChars("Moonday"));
// // -> False
// Time Complexity: O(n^2)
// Space Complexity : O(n)

// const isPangram = (str) =>{
// let strArr = str.toLowerCase()
// let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
// for(let i = 0; i < alphabet.length; i++){
//     if (strArr.indexOf(alphabet[i]) < 0){
//         return false
//     }
// }
// return true
// }
// Time Complexity = O(n)
// Space Complexity = O(n)



// console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// // -> True

// console.log(isPangram("I like cats, but not mice"));
// // -> False

// const findLongestWord = (arr) => {
//     let words = " "
//     for (i = 0; i <arr.length; i++){
//         if (words.length < arr[i].length){
//             words = arr[i]
//         }
    
//     }
//     return words.length
// }


// console.log(findLongestWord(["hi", "hello"]));
// // -> 5
// Time Complexity: O(n)
// Space Complexity: O(n)