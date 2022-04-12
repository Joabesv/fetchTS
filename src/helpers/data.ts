async function fetchUrl() {
  const URL = 'https://jsonplaceholder.typicode.com/todos';
  const response: Response = await fetch(URL);
  return await response.json();
}

export { fetchUrl };
