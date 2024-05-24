let  array1 = [1, 2, 3, 4], array2 = [5, 6, 7];

//concateneting the array2 in to array1.
let concatenatedArray=array1.concat(array2)

//printing the concanated Array.
console.log("concatenated Array:",concatenatedArray)

//extracting a portion of array from concanatedArray.
let extractedArray=concatenatedArray.slice(2,5)

//printing the extracted Array.
console.log("extracted portion:", extractedArray)

//Find and printing the index of number 7 if number is exists.
let index=extractedArray.indexOf(7,0)
if(index===-1){
    console.log("Number 7 not found")
}
else{
    console.log("index of 7:", extractedArray.indexOf(7))
}

//checking if the number 10 is present in the array1 or not.
let checkNum=array1.includes(10)
if(checkNum===true){
    console.log("Number 10 is present in the array1")
}
else{
    console.log("Number 10 is not present in the array1")
}

//joining the extracted Array using 'join' method.
let joinedString=extractedArray.join("-")
console.log("joined string:", joinedString)

//reversing the extracted Array.
extractedArray.reverse()
console.log("Reversed Array:", extractedArray)

//iterating over array to calculate sum of aaray2.
let sum=0;
for(let i=0;i<array2.length;i++){
    sum+=array2[i]
}

//printing the sum of array2.
console.log("Sum of array2:", sum)

//sorting the the array1 using inbuilt 'sort()' method.
array1.sort()

//printing the sorting array.
console.log("Sorted array:", array1)