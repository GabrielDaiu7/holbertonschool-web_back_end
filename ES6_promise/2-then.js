export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch((Err) => new Err())
    .finally(() => console.log('Got a response from the API'));
}
