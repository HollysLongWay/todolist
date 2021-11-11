import React from 'react';

export default function TodoItem({ id, value, complete, onChange, onClick }) {
  return (
    <li>
      <input type="checkbox" id={id} checked={complete} onChange={() => onChange(id)} />
      <label for={id}>{value}</label>
      <button onClick={() => onClick(id)}>삭제</button>
    </li>
  );
}
