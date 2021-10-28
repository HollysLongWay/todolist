import React from 'react';

export default function TodoItem({ value, complete }) {
  return (
    <li>
      <input type="checkbox" checked={complete} />
      {value}
    </li>
  );
}
