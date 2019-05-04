import React, { FunctionComponent } from 'react';

interface Props {
  todo: string
}

const TodoComponent: FunctionComponent<Props> = ({ todo }) => {
  return (
    <div>{todo}</div>
  )
}

export default TodoComponent;