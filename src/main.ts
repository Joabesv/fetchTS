import './css/style.css';

import { fetchUrl } from './helpers/data';
import { postData } from './helpers/postData';
import { ITodo } from './types/ITodos';
import { filterData } from './utils/filterData';
import { renderData } from './renderData';

const input = <HTMLInputElement>document.getElementById('todo')!;
const form = <HTMLFormElement>document.getElementById('form')!;

const data: Array<ITodo> = await fetchUrl();

const filteredData = filterData(data);

renderData(filteredData);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  console.log(input.value);
  const data: ITodo = {
    title: input.value,
    completed: false,
    userId: 1,
  };

  input.value = '';
  postData(data);
});
