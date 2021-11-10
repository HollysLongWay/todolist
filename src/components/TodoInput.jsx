import React, { useState } from 'react';
import { addTodo } from './../modules/reducer';
import { useDispatch } from 'react-redux';

export default function TodoInput() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const onChange = (e) => setValue(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    setValue('');
    dispatch(addTodo(value));
  };

  return (
    <form onSubmit={onSubmit}>
      <input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" onChange={onChange} value={value} />
    </form>
  );
}
