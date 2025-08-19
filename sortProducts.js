// You are given an array of product objects, 
// each containing a name (string) and a price 
// (number). Your task is to implement a function 
// called sortProducts that sorts the products based on their
//  prices in ascending order. 

const sortProducts = (arr) => {
    return arr.sort((a, b) => a.price - b.price)
};

const products = [
  { name: "Apple", price: 30 },
  { name: "Banana", price: 10 },
  { name: "Orange", price: 20 }
];

console.log(sortProducts(products))


