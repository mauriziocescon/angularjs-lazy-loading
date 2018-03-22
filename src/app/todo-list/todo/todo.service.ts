import Todo from './todo.model';

export interface ITodoService {
  getDescription(todo: Todo): string;
}

export default class TodoService implements ITodoService {

  constructor() {
    // do nothing
  }

  public getDescription(todo: Todo): string {
    return todo.title + ' of todo';
  }
}
