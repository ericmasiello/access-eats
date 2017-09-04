export function fetchRestaurants() {
  return fetch('/api/restaruants/').then(resp => {
    return resp.json();
  });
}