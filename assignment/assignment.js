/* ========================================
Problem-1 
========================================== */

function radianToDegree(radian) {
    if (typeof radian !== 'number') {
        return 'Error: Please input a Number';
    }
    else {
        const pi = 3.1416;
        const degree = radian * 180 / pi;
        return degree.toFixed(2)
    }
}
const result = radianToDegree(-2);
// console.log(result);

/* ============================================
Problem-2
=============================================== */

function isJavaScriptFile(file) {
    if (typeof file !== 'string') {
        return 'Error: Please input a String';
    }
    else {
        if (file.endsWith('.js')) {
            return true;
        }
        else {
            return false;
        }
    }
}

const fileName = isJavaScriptFile(45);
// console.log(fileName);

/* ============================================
Problem-3
=============================================== */

function oilPrice(diesel, petrol, octane) {
    if (typeof diesel !== 'number' || typeof petrol !== 'number' || typeof octane !== 'number') {
        return 'Error Please input numbers';
    }
    else if (diesel < 0 || petrol < 0 || octane < 0) {
        return 'Error Please input (positive) numbers'
    }
    else {

        const dieselPricePerLtr = 114;
        const petrolPricePerLtr = 130;
        const octanePricePerLtr = 135;

        const totalDieselPrice = dieselPricePerLtr * diesel;
        const totalPetrolPrice = petrolPricePerLtr * petrol;
        const totalOctanePrice = octanePricePerLtr * octane;

        const totalOilPrice = totalDieselPrice + totalPetrolPrice + totalOctanePrice;

        return totalOilPrice;
    }
}

const totalCost = oilPrice(30, 20, -10);
// console.log(totalCost);

/* ============================================
Problem-4
=============================================== */

function publicBusFare(people) {
    if (typeof people !== 'number') {
        return 'Error: Please input a valid number';
    }
    else if (people < 0) {
        return 'Error: Please input a positive number';
    }
    else {
        const busCapacity = 50;
        const microBusCapacity = 11;

        const publicBusTicketPrice = 250;

        const passengerRemainingForMicroBus = people % busCapacity;
        const passengerRemainingForPublicBus = passengerRemainingForMicroBus % microBusCapacity;

        const totalPublicBusFare = passengerRemainingForPublicBus * publicBusTicketPrice;

        return totalPublicBusFare;
    }
}

const totalBusFare = publicBusFare('365');
// console.log(totalBusFare);

/* ============================================
Problem-5
=============================================== */

function isBestFriend(object1, object2) {
    if (typeof (object1 || object2) !== 'object') {
        return 'Error: Please input an Object';
    }
    else {
        if (object1.name === object2.friend && object1.friend === object2.name) {
            return true;
        }
        else {
            return false;
        }
    }
}

const obj1 = { name: 'Razib', friend: 'Khairul' }
const obj2 = { name: 'Khairul', friend: 'Tareq' }

const bestFriend = isBestFriend(obj1, obj2)
// console.log(bestFriend);