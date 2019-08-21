import { ActionTypes, Todo, Action } from '../actions';

export const todosReducer = (state: Todo[] = [], action: Action): Todo[] => {
  switch (action.type) {
    case ActionTypes.FetchTodos:
      return action.payload;
    case ActionTypes.RemoveTodo:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};
