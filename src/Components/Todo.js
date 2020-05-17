import React from 'react';

export default function Todo({ editTodo, todo, index, completeTodo, removeTodo }) {

  return (
    <>
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        <p className={}>{todo.text}</p>

        <div>
          <button onClick={() => completeTodo(index)}> Complete </button>
          <button onClick={() => removeTodo(index)}> X </button>
        </div>

      </div>
      <input onClick={() => editTodo(index)} type="text" />
    </>
  );
}