import './css/style.css';

import { fetchUrl } from './helpers/data';
import { ITodo } from './types/ITodos';

const data: Array<ITodo> = await fetchUrl();

const filterData = (val: Array<ITodo>): Array<ITodo> => {
  return val.slice(1, 11);
};

console.log(filterData(data));
