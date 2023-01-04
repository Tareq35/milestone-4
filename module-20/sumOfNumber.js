let sum = 0;
function sumOfNumbers(number) {
    for (let i = 1; i <= number; i++) {
        sum = sum + i;
        console.log( sum);
    }
    return sum;
}
const myNumbers = 7;
const getSumOfMyNumbers= sumOfNumbers(myNumbers)
console.log(getSumOfMyNumbers);