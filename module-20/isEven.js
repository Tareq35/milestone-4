function isEven(number){
    const reminder = number % 2;
    if(reminder === 0){
        return true;
    }
    else{
        return false;
    }
}
const thisNumber= isEven(55);
console.log(thisNumber);