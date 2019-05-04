import React, { Component } from 'react';
import ListOfTodos from '../components/ListOfTodos';
import AddTodo from '../components/AddTodo';

interface Props {}
interface State {
  todoList: string[];
  query: string;
}

class TodoList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      todoList: [],
      query: ""
    }
  }
  render() {
    const { todoList, query } = this.state;
    return (
      <div>
        <AddTodo 
          onInputChange={({ target }) => this.setState({ query: target.value })} 
          onAddTodo={() => this.setState({ todoList: todoList.concat(query), query: "" })} 
          inputValue={query}
        />
        <ListOfTodos todoList={todoList}/>
      </div>
    )
  }
}

export default TodoList;