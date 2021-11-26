import React, { useCallback, useState } from 'react';
import { addTodo } from './../modules/reducer';
import { useDispatch } from 'react-redux';

export default function TodoInput() {
  const [value, setValue] = useState('');
  const onChange = (e) => setValue(e.target.value);

  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setValue('');
      dispatch(addTodo(value));
    },
    [dispatch, value]
  );

  return (
    <form onSubmit={onSubmit}>
      <input
        autoFocus
        placeholder="할 일을 입력 후, Enter 를 누르세요"
        onChange={onChange}
        value={value}
        aria-label="할 일 추가하기"
      />
    </form>
  );
}
