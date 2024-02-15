// DESCRIPTION:
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// function betterThanAverage(classPoints, yourPoints) {
//     function getAvg(points) {
//       let a = 0 //accumulator
//       for(let i of points) {
//          a = a + i
//       }
//       return a / points
//     }
//     let avg = getAvg(classPoints)
   
//    return yourPoints > avg ? true : false
//   }
  
//  console.log(
//      betterThanAverage([90,60,20,80,50], 80),
//      betterThanAverage([90,60,20,80,50], 20)
//      );

////////////////////
// Reverse Array
// Create a function reverseArray that takes an array and returns the array reversed.

// function reverseArray(arr) {
//    return arr.reverse()
// }

// console.log(
    
//     // test	expected
//     reverseArray([1,2,3,4]),	
//     // [4,3,2,1]
    
//     reverseArray(['a','b','c'])	
//     // ['c','b','a']
    
//     );

/////////////////////
// Remove Empty Spots
// Create a function removeEmptySpots that takes an array as a parameter.
// The array may have a falsy value at the beginning or at the end (or both).
// The function should remove these falsy values and return the clean array.

// function removeEmptySpots(arr) {
//     let start = arr[0]
//     let arrLength = arr.length -1
//     let end = arr[arrLength]
//     if (!start && !end) {
//         arr.shift()
//         arr.pop()
//     } else if(!end) {
//         arr.pop()
//     } else if(!start){
//        arr.shift()
//     }
//     return arr
// }

// console.log(
//     removeEmptySpots([0,2,3,4,0]),	
//     // false
//     // [2,3,4]
//     removeEmptySpots([null,'a','b','c']),	
//     // ['a','b','c']
//     removeEmptySpots([10,11,0,50,false]),	
//     // [10,11,0,50]
//     removeEmptySpots([0,100,'a','b',50,null])
//     // [100,'a','b',50]
//     );

