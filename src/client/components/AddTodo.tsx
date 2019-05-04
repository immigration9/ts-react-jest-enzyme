import React, { FunctionComponent, Fragment } from 'react';

interface Props {
  onInputChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onAddTodo(): void;
  inputValue: string;
}

const AddTodo: FunctionComponent<Props> = ({ onInputChange, onAddTodo, inputValue }) => {
  return (
    <div>
      <input onChange={onInputChange} value={inputValue}/>
      <button onClick={onAddTodo}>ADD TODO</button>
    </div>
  )
}

export default AddTodo;