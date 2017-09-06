function fetcher(url, options = {}) {
  const defaultOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  };

  return fetch(url, Object.assign({}, defaultOptions, options))
    .then((res) => {
      const json = res.json();

      if (res.status >= 400) {
        return json.then((error) => {
          throw new Error(JSON.stringify(error));
        });
      }

      return json;
    });
}

export async function fetchRestaurants() {
  try {
    return await fetcher('/api/restaurants');
  } catch (error) {
    console.error(error);
  }
}

export async function fetchRestaurantDetail(id) {
  try {
    return await fetcher(`/api/restaurants/${id}`);
  } catch (error) {
    console.error(error);
  }
}

export async function fetchRestaurantReviews(id) {
  try {
    return await fetcher(`/api/restaurants/${id}/reviews`);
  } catch (error) {
    console.error(error);
  }
}

export async function createNewRestaurant(payload) {
  try {
    return await fetcher('/api/restaurants', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error(error);
  }
}
