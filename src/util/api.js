export function loadRestaurants() {
  return fetch('/api/restaruants/').then(resp => {
    return resp.json();
  });
}