function fetcher(url, options = {}, fallbackReturn = {}) {
  const defaultOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  };

  return fetch(url, Object.assign({}, defaultOptions, options))
    .then((res) => {
      return res.json()
        .then((json) => {
          if (res.status >= 400) {
            throw new Error(JSON.stringify(json));
          }
          return json;
        })
        .catch((error) => {
          return fallbackReturn;
        })
    });
}

export async function fetchRestaurants() {
  try {
    return await fetcher('/api/restaurants', {}, []);
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
    return await fetcher(`/api/restaurants/${id}/reviews`, {}, []);
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

export async function updateRestaurant(id, payload) {
  try {
    return await fetcher(`/api/restaurants/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error(error);
  }
}

export async function removeRestaurant(id) {
  try {
    return await fetcher(`/api/restaurants/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.error(error);
  }
}

export async function createNewReview(payload) {
  try {
    return await fetcher('/api/reviews', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error(error);
  }
}

export async function updateReview(id, payload) {
  try {
    return await fetcher(`/api/reviews/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error(error);
  }
}

export async function removeReview(id) {
  try {
    return await fetcher(`/api/reviews/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.error(error);
  }
}