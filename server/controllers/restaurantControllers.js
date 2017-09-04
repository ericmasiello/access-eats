const restaurantService = require('../services/restaurantService');

async function loadAllRestaurants(req, res) {
  try {
    const data = await restaurantService.load();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
}

async function loadRestaurantById(req, res) {
  try {
    const data = await restaurantService.loadById(req.params.id);
    if (!data) {
      return res.status(404).json({
        message: `No restaurant was found with id ${req.params.id}`,
      });
    }
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
}

async function createRestaurant(req, res) {
  try {
    const result = await restaurantService.create(req.body);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
}

async function updateRestaurnt(req, res) {
  try {
    const result = await restaurantService.update(req.params.id, req.body);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
}

async function removeRestaurnt(req, res) {
  try {
    const result = await restaurantService.remove(req.params.id);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
}

module.exports = {
  loadAllRestaurants,
  loadRestaurantById,
  createRestaurant,
  updateRestaurnt,
  removeRestaurnt,
}