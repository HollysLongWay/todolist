import React, { useRef } from 'react';

export default function TodoItem({ id, value, complete, onChange, onClick }) {
  const todoRef = useRef();

  return (
    <li ref={todoRef}>
      <input
        type="checkbox"
        id={id}
        checked={complete}
        onChange={() => {
          onChange(id);
          todoRef.current.classList.toggle('checked');
        }}
      />
      <label htmlFor={id}>{value}</label>
      <button onClick={() => onClick(id)} aria-label="완료된 할 일 목록 삭제">
        삭제
      </button>
    </li>
  );
}
