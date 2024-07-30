function findProductPrice(products, name) {
  // Your code here
  let ceilIndex = products.length - 1;
  let floorIndex = 0;
  let currentIndex;
  const getCurrentIndex = () => {
    currentIndex = Math.floor((ceilIndex + floorIndex) / 2);
  };
  getCurrentIndex();
  while (currentIndex > 0) {
    const product = products[currentIndex];
    const previousIndex = currentIndex;
    if (product.name === name) {
      return product.price;
    }
    if (product.name > name) {
      floorIndex = currentIndex + 1;
      getCurrentIndex();
      if (previousIndex === currentIndex) {
        return -1;
      }
    }
    if (product.name < name) {
      ceilIndex = currentIndex - 1;
      getCurrentIndex();
      if (previousIndex === currentIndex) {
        return -1;
      }
    }
  }
  return -1;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
];

console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Durian")); // Output: -1
