
let total = 0;

let cart = [
    { name: 'Casaco', price: 120 },
    { name: 'Camiseta', price: 50 },
    { name: 'Sapato', price: 250 },
];

for (let cartItem of cart) {
    total = total + cartItem.price;
}

console.log(total);