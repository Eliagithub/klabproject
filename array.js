const item = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
];

let prices = [];

item.forEach((Element) => {
  prices.push(Element.price);
});
prices.sort((a, b) => a - b);

//   cheapest product

const minProduct = item.filter((e) => {
  return e.price === prices[0];
});

console.log(minProduct);
//   expensive product

const maxProduct = item.filter((e) => {
  return e.price === prices[prices.length - 1];
});
console.log(maxProduct);
const Remove10 = item.filter((e) => {
  return e.price !== 10;
});

function total(params) {
  let sum = 0;
  params.forEach((e) => {
    sum += e.price;
  });
  return sum;
}

//   Return the total of all prices of product

let total= total(item);

console.log(total);
//   Return the total of all prices of product except price ten

let totalPrice= total(Remove10);

console.log(totalPrice);