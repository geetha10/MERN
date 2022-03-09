// bubbleSort()
/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    Stable sort
    Time Complexity
        - Best: O(n) linear when array is already sorted.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
    -> Assume there are no duplicates
*/

const nums1 = [5,3,4,2,1];
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function bubbleSort(nums){ 
    /* 
    1. create a func which takes a array and return a sorted array back
    2. Loop through the array and compare first element with second element
    3. if the second element is greater, create a temp variable and store the value of first elem
    4. assign first element the value of second element
    5. assign second element the value of temp
    6. make a recursive call with the updated array 
    7. return the array
    */
    for(let i=0;i<nums.length-2;i++){
        if(nums[i] > nums[i+1]){
            let temp=nums[i]
            nums[i] = nums[i+1]
            nums[i+1] = temp
        }
        bubbleSort(nums)
    }
    return nums;
}

console.log(bubbleSort(nums1));
// call the function and pass nums1, nums2, nums3