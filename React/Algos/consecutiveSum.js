// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// inputs
// k = 16
// arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are included in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

// create new arrays
// if no matches, return empty array

function findConsecutiveSums(arr, k) {
    let resultArray=[]
    
    for( let i=0;i<arr.length;i++){
        let sum=0;
        let tempArr=[];
        sum += arr[i]
        tempArr.push(arr[i])
        let j=i+1
        while(sum<k){
            
        }
        // for(let j=i+1;j<arr.length;j++){
        //     sum +=arr[j]
        //     if(sum <= k){
        //         tempArr.push(arr[j])
        //     }
        //     if(sum===k){
        //         resultArray.push([...tempArr])
        //     }
        // }

    }
    return resultArray;
}

console.log("16",findConsecutiveSums([2,5,3,6,7,0,0,23,11], 16));
console.log("8",findConsecutiveSums([2,5,3,6,7,0,0,23,11], 8));
console.log("34",findConsecutiveSums([2,5,3,6,7,0,0,23,11], 34));
console.log("23",findConsecutiveSums([2,5,3,6,7,0,0,23,11], 23));


