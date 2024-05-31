const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'English Willow',
  },
  {
    tag_name: 'Kashmir Willow',
  },
  {
    tag_name: 'Red',
  },
  {
    tag_name: 'White',
  },
  {
    tag_name: 'Flully',
  },
  {
    tag_name: 'Hard',
  },
  {
    tag_name: 'Spikes',
  },
  {
    tag_name: 'Flats',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
