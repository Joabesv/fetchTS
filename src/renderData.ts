import { checkTodos } from './helpers/checkTodos';
import { ITodo } from './types/ITodos';

const todosList = document.getElementById('todo__container');

function renderData(dataSlice: Array<any>) {
  const list = dataSlice
    .map((todo: ITodo, i: number) => /*html*/ {
      /*html*/ `
      <li class="todo">
        <p> ${i + i}. ${todo.title} - ${checkTodos(todo.completed)}</p>
      </li>
    `;
    })
    .join('');

  todosList!.innerHTML = list;
}

export { renderData };
