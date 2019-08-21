import { FetchTodosAction, RemoveTodoAction } from './todos';

export enum ActionTypes {
  FetchTodos,
  RemoveTodo,
}

export type Action = FetchTodosAction | RemoveTodoAction;
