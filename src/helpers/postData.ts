import { ITodo } from '../types/ITodos';

async function postData(data: ITodo) {
  const URL = 'https://jsonplaceholder.typicode.com/todos';
  const response: Response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return await response.json().then(json => console.log(json));
}

export { postData };
