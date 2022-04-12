import { renderData } from '../renderData';
import { ITodo } from '../types/ITodos';

const filterData = (val: Array<ITodo>): Array<ITodo> => {
  renderData(val.slice(1, 11));
  return val.slice(1, 11);
};

export { filterData };
