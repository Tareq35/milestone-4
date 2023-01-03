// const myInches= 12;
// const myFeet= myInches/12;
// console.log(myFeet);

// const dadaInches= 144;
// const dadaFeet= dadaInches/12;
// console.log('dadar height',dadaFeet, 'feet');

// const dadiInches= 60;
// const dadiFeet= dadiInches/12;
// console.log('dadir height',dadiFeet, 'feet');

function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);

const nanaInches = 144;
const nanaFeet = inchToFeet(nanaInches);
console.log('nanar height',nanaFeet, 'feet');