const {promisify} = require('util');
const fs = require('fs');
const path = require('path');
const uuidv1 = require('uuid/v1');
const get = require('lodash/get');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const file = path.join(__dirname, '/../db/restaurants.json');

function validateRestaurant(payload) {
  const name = get(payload, 'name', '');
  const category = get(payload, 'category[0]', '');
  const price = get(payload, 'price', '');
  const stars = get(payload, 'stars');

  if (name.trim().length === 0) {
    throw new Error('Restaurant must have a name');
  }

  if (category.trim().length === 0) {
    throw new Error('Restaurant must have at least one category');
  }

  if (!price.match(/^\${1,5}$/g)) {
    throw new Error('Restaurant price must be between $ and $$$$$');
  }

  if (typeof stars !== 'number' || stars < 0 || stars > 5) {
    throw new Error('Restaurant stars must be a number between 0 and 5');
  }

}

async function load() {
  const data = await readFileAsync(file, { encoding: 'utf8' });
  return JSON.parse(data);
}

async function loadById(id) {
  const restaurants = await load();
  return restaurants.find(restaurant => restaurant.id === id);
}

async function create(restaurant) {
  validateRestaurant(restaurant);
  Object.assign(restaurant, { id: uuidv1() });
  const data = await load();
  const result = [...data, restaurant];
  await writeFileAsync(file, JSON.stringify(result, null, 2));
  return restaurant;
}

async function update(id, updateProperties) {
  const matchingRestaurant = await loadById(id);
  const updatedRestaurant = Object.assign({}, matchingRestaurant, updateProperties);
  validateRestaurant(updatedRestaurant);
  const restaurants = await load();
  const updatedRestaurants = restaurants.map(restaurant => {
    if (restaurant.id === updatedRestaurant.id) {
      return updatedRestaurant;
    }
    return restaurant;
  });
  await writeFileAsync(file, JSON.stringify(updatedRestaurants, null, 2));
  return updatedRestaurant;
}

async function remove(id) {
  const restaurants = await load();
  const updatedRestaurants = restaurants.filter(restaurant => restaurant.id !== id);
  await writeFileAsync(file, JSON.stringify(updatedRestaurants, null, 2));
  return;
}

module.exports = {
  load,
  loadById,
  create,
  update,
  remove,
};
