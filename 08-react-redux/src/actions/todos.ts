import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.FetchTodos;
  payload: Todo[];
}

export interface RemoveTodoAction {
  type: ActionTypes.RemoveTodo;
  payload: number;
}

const baseUrl = 'https://jsonplaceholder.typicode.com';

export const fetchTodos = () => {
  return async (dispatch: Dispatch<FetchTodosAction>) => {
    const res = await axios.get<Todo[]>(`${baseUrl}/todos`);

    dispatch({
      type: ActionTypes.FetchTodos,
      payload: res.data,
    });
  };
};

export const removeTodo = (id: number): RemoveTodoAction => {
  return {
    type: ActionTypes.RemoveTodo,
    payload: id,
  };
};
