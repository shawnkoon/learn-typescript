import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, removeTodo } from '../actions';
import { StoreState } from '../reducers';
import { ThunkDispatch } from 'redux-thunk';

interface AppProps {
  todos: Todo[];
  fetchTodos: typeof fetchTodos;
  removeTodo: typeof removeTodo;
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  handleButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };

  handleRemoveTodo = (id: number): void => {
    this.props.removeTodo(id);
  };

  renderList = (): JSX.Element[] => {
    return this.props.todos.map(todo => {
      return (
        <div key={todo.id} onClick={() => this.handleRemoveTodo(todo.id)}>
          {todo.title}
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>Fetch</button>
        {this.state.fetching ? 'Loading todo list' : null}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
  return {
    fetchTodos: () => dispatch(fetchTodos()),
    removeTodo: (id: number) => dispatch(removeTodo(id)),
  };
};

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(_App);
