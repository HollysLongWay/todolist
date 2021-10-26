import React, { useState } from 'react';

export default function TodoInput() {
  const [value, setValue] = useState('');
  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    setValue('');
  };

  return (
    <form onSubmit={onsubmit}>
      <input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" onChange={onChange} value={value} />
    </form>
  );
}
