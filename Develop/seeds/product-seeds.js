const { Product } = require('../models');

const productData = [
  {
    product_name: 'SKY Bat',
    price: 699.99,
    stock: 20,
    category_id: 1,
  },
  {
    product_name: 'SG Balls',
    price: 90.0,
    stock: 3,
    category_id: 2,
  },
  {
    product_name: 'DSC APds',
    price: 102.99,
    stock: 12,
    category_id: 3,
  },
  {
    product_name: 'Masuri',
    price: 150.99,
    stock: 20,
    category_id: 4,
  },
  {
    product_name: 'New Balance',
    price: 299.99,
    stock: 22,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
