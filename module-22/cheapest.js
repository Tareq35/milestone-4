const phones = [
    { name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'black' },
    { name: 'Walton', camera: 15, storage: '64gb', price: 22000, color: 'white' },
    { name: 'IPhone', camera: 10, storage: '64gb', price: 82000, color: 'red' },
    { name: 'Xiaomi', camera: 10, storage: '128gb', price: 52000, color: 'blue' },
    { name: 'Oppo', camera: 5, storage: '64gb', price: 20000, color: 'purple' },
    { name: 'Nokia', camera: 20, storage: '32gb', price: 44000, color: 'black' },
    { name: 'HTC', camera: 10, storage: '32gb', price: 62000, color: 'silver' },
];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);