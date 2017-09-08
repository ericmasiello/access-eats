const reviewService = require('../services/reviewService');

async function loadAllReviews(req, res) {
  try {
    const data = await reviewService.load();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
}

async function loadReviewById(req, res) {
  try {
    const data = await reviewService.loadById(req.params.id);
    if (!data) {
      return res.status(404).json({
        message: `No review was found with id ${req.params.id}`,
      });
    }
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
}

async function loadReviewsByRestaurantId(req, res) {
  try {
    const data = await reviewService.loadByRestaurantId(req.params.id);
    if (!data) {
      return res.status(404).json({
        message: `No reviews were found for restaurant with id ${req.params.id}`,
      });
    }
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
}

async function createReview(req, res) {
  try {
    const result = await reviewService.create(req.body);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
}

async function updateReview(req, res) {
  try {
    const result = await reviewService.update(req.params.id, req.body);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
}

async function removeReview(req, res) {
  try {
    await reviewService.remove(req.params.id);
    res.json({});
  } catch (error) {
    console.error(error);
    res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
}

module.exports = {
  loadAllReviews,
  loadReviewById,
  loadReviewsByRestaurantId,
  createReview,
  updateReview,
  removeReview,
}