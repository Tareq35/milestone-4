var fruits = ['apple', 'banana', 'orange'];
//a) Find the index of Banana and replace Banana with Mango
//b) Remove 'Orange' and add Watermelon.

console.log(fruits)
console.log(fruits.indexOf("banana"));
fruits[1]= 'Mango';
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);