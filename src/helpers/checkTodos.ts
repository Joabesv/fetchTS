function checkTodos(val: boolean): string {
  let bool: string = 'false';
  val === true ? (bool = 'COMPLETED') : (bool = 'UNCOMPLETED');
  return bool;
}

export { checkTodos };
