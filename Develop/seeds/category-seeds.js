const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Bats',
  },
  {
    category_name: 'Balls',
  },
  {
    category_name: 'Pads',
  },
  {
    category_name: 'Helmets',
  },
  {
    category_name: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
