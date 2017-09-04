export function fetchRestaurants() {
  return fetch('/api/restaruants/').then(resp => {
    return resp.json();
  });
}

export function fetchRestaurantDetail(id) {
  return Promise.all([
    fetch(`/api/restaruants/${id}`),
    fetch(`/api/restaruants/${id}/reviews`),
  ]).then((result) => {
    const [restaurantResult, reviewResult] = result;
    return Promise.all([restaurantResult.json(), reviewResult.json()]);
  }).then((result) => {
    const [restaurant, reviews] = result;
    const restaurantDetail = Object.assign({}, restaurant, {
      reviews,
    });
    return restaurantDetail;
  });
}