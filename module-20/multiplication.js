function multiplicationOfNumbers(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i;
    }
    return result;
}
const myNumber=7;
const getResult=multiplicationOfNumbers(myNumber);
console.log(getResult);