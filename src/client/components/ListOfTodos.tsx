import React, { FunctionComponent } from 'react';
import TodoComponent from './TodoComponent';

interface Props {
  todoList: string[]
}

const ListOfTodos: FunctionComponent<Props> = ({ todoList }) => {
  return (
    <div>
      { todoList && todoList.map((todo) => {
        return <TodoComponent todo={todo} />
      })}
    </div>
  )
}

export default ListOfTodos