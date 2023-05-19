//Write a function that takes in an array of numbers and outputs the average of all the numbers. 
function calculateAverage(numbers) {
    if(numbers.length === 0){ //conditional checks if 'numbers' array is empty(has length of 0) if empty, meaning there are no numbers in the array, function will immediatly turn to 0 as the average cannot be calculated
        return 0;
    }


const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);//reduce method iterates over each element in the array and applies the provided callback function 
const average = sum / numbers.length;//The reduce method returns the final accumulated value, which is stored in the sum variable.
return average;

}

//test the function
const numbers = [3,7,14,22,24];
const result = calculateAverage(numbers);
console.log(result);