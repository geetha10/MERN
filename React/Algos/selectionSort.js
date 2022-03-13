const myArr = [3,2,9,5,1,4,8]

function selectionSort(arr){ 
    console.log(arr.length)
    for(let i=0; i<arr.length -1; i++){
        let minIndex=i;
        for(let j=i+1; j< arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex =j;
            }
        }
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr;
}
console.log(selectionSort(myArr))
