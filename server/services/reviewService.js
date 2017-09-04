const {promisify} = require('util');
const fs = require('fs');
const path = require('path');
const uuidv1 = require('uuid/v1');
const get = require('lodash/get');
const restaurantService = require('./restaurantService');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const file = path.join(__dirname, '/../db/reviews.json');

async function validateReview(payload) {
  const restaurants = await restaurantService.load();
  const matchingRestaurant = restaurants.find(({ id }) => id === payload.restaurantId);

  if(!matchingRestaurant) {
    throw new Error('Reviews must have a restaurantId that match an existing restaurant');
  }

  const reviewer = get(payload, 'reviewer', '');
  const message = get(payload, 'message', '');
  const stars = get(payload, 'stars');

  if (reviewer.trim().length === 0) {
    throw new Error('Reviews must contain a reviewer');
  }

  if (message.trim().length === 0) {
    throw new Error('Reviews must contain a message');
  }

  if (typeof stars !== 'number' || stars < 0 || stars > 5) {
    throw new Error('Review stars must be a number between 0 and 5');
  }
}

async function load() {
  const data = await readFileAsync(file, { encoding: 'utf8' });
  return JSON.parse(data);
}

async function loadByRestaurantId(id) {
  const reviews = await load();
  return reviews.filter(({ restaurantId }) => restaurantId === id);
}

async function create(review) {
  await validateReview(review);
  Object.assign(review, { id: uuidv1() });
  const data = await load();
  const result = [...data, review];
  await writeFileAsync(file, JSON.stringify(result, null, 2));
  return review;
}

module.exports = {
  load,
  loadByRestaurantId,
  create,
};
