import React, { FunctionComponent } from 'react';
import TodoComponent from './TodoComponent';

interface Props {
  todoList: string[]
}

const ListOfTodos: FunctionComponent<Props> = ({ todoList }) => {
  return (
    <div>
      { todoList && todoList.length > 0
      ? todoList.map((todo) => {
          return <TodoComponent todo={todo} />
        })
      : "Nothing to do"}
    </div>
  )
}

export default ListOfTodos