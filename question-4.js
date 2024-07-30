function sortProductsByPrice(products) {
  // Your code here
  let newProduct = [...products];
  for (let i = 0; i < products.length - 1; i += 1) {
    for (let j = 0; j < products.length - i - 1; j += 1) {
      const currentProduct = newProduct[j];
      const nextProduct = newProduct[j + 1];
      if (currentProduct.price > nextProduct.price) {
        newProduct[j] = nextProduct;
        newProduct[j + 1] = currentProduct;
      }
    }
  }
  return newProduct;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
  { name: "Date", price: 1.5 },
];
console.log(sortProductsByPrice(products));

// Output: [
//   { name: 'Banana', price: 0.8 },
//   { name: 'Apple', price: 1.2 },
//   { name: 'Date', price: 1.5 },
//   { name: 'Cherry', price: 2.5 }
// ]
