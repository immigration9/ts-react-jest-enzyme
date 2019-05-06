import * as React from "react";
import { shallow } from "enzyme";
import AddTodo from "../AddTodo";

const QUERY_TEXT = 'New Add Todo';

const state = {
  query: '',
  todolist: [] as string[]
}

function changeInput({ target }: React.ChangeEvent<HTMLInputElement>) {
  state.query = target.value;
}

function addTodo() {
  state.todolist.push(state.query);
  state.query = '';
}

describe('AddTodo Test', () => {
  const wrapper = shallow(
    <AddTodo 
      onInputChange={changeInput} 
      onAddTodo={addTodo} 
      inputValue={state.query} 
    />
  )
  /** 
   * `it` is an alias of `test` 
   * */
  it('is rendered', () => {
    const inputResult = wrapper.contains(<input onChange={changeInput} value={state.query} />);
    const buttonResult = wrapper.contains(<button onClick={addTodo}>ADD TODO</button>);
    expect(inputResult).toBeTruthy();
    expect(buttonResult).toBeTruthy();
  })

  /**
   * Setting text value of input
   * https://github.com/airbnb/enzyme/issues/76#issuecomment-189606849
   */
  it('query is correctly changed', () => {
    wrapper.find('input').simulate('change', { target: { value: QUERY_TEXT }});
    expect(state.query).toEqual(QUERY_TEXT);
  })

  /**
   * Button Click Test
   * 1. adds todo to the list
   * 2. removes existing query from the state
   */
  it('button correctly changes the state', () => {
    wrapper.find('button').simulate('click');
    expect(state.todolist).toEqual([QUERY_TEXT]);
    expect(state.query).toEqual('');
  })
});