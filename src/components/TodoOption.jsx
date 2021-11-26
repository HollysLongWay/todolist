import React, { useRef } from 'react';

export default function TodoOption({ todos, showAllTodos, showActiveTodos, showComTodos }) {
  const showAll = useRef();
  const showActive = useRef();
  const showCom = useRef();

  return (
    todos.length && (
      <section>
        <span>{todos.length} item left</span>
        <div>
          <button ref={showAll} onClick={showAllTodos}>
            All
          </button>
          <button ref={showActive} onClick={showActiveTodos}>
            Active
          </button>
          <button ref={showCom} onClick={showComTodos}>
            Completed
          </button>
        </div>
      </section>
    )
  );
}
