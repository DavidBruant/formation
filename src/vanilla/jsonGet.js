
function jsonGet(url) {
  return fetch(url)
  .then(resp => resp.json())
  .catch(err => console.error('Error', err));
}