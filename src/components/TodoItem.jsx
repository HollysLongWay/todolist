import React from 'react';

export default function TodoItem({ id, value, complete, onChange, onClick }) {
  return (
    <li>
      <input type="checkbox" checked={complete} onChange={() => onChange(id)} />
      {value}
      <button onClick={() => onClick(id)}>삭제</button>
    </li>
  );
}
