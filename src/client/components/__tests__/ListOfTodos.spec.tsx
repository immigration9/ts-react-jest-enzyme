import * as React from 'react';
import { shallow } from 'enzyme';
import ListOfTodos from '../ListOfTodos'; 
import TodoComponent from '../TodoComponent';

const INITIAL_TEXT = "Nothing to do";
const FIRST_TEXT = "GO GET GROCERIES";
const SECOND_TEXT = "DO THE LAUNDARY";

const state = {
  todolist: [] as string[]
}
describe('ListOfTodos Test', () => {
  const wrapper = shallow(<ListOfTodos todoList={state.todolist} />);

  it('initial render', () => {
    const initialResult = wrapper.contains(<div>{INITIAL_TEXT}</div>);
    expect(initialResult).toBeTruthy();
  })

  it('add something to the list', () => {
    wrapper.setProps({ todoList: state.todolist.concat(FIRST_TEXT) });
    const result = wrapper.contains(
      <div>
        <TodoComponent todo={FIRST_TEXT}/>
      </div>
    );
    expect(result).toBeTruthy();
  })

  it('provide second todo to the list', () => {
    wrapper.setProps({ todoList: state.todolist.concat(FIRST_TEXT, SECOND_TEXT) });
    const result = wrapper.contains(
      <div>
        <TodoComponent todo={FIRST_TEXT}/>
        <TodoComponent todo={SECOND_TEXT}/>
      </div>
    )
    expect(result).toBeTruthy();
  })
})