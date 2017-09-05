export async function fetchRestaurants() {
  try {
    const resp = await fetch('/api/restaruants/');
    return resp.json();
  } catch (error) {
    console.error(error);
  }
}

export async function fetchRestaurantDetail(id) {
  try {
    const resp = await fetch(`/api/restaruants/${id}`);
    return resp.json();
  } catch (error) {
    console.error(error);
  }
}

export async function fetchRestaurantReviews(id) {
  try {
    const resp = await fetch(`/api/restaruants/${id}/reviews`);
    return resp.json();
  } catch (error) {
    console.error(error);
  }
}
