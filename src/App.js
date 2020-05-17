import React, { useState } from "react";
import Nav from './Components/Nav';
import Todo from './Components/Todo';
import TodoForm from './Components/TodoForm';
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
      edit: false
    },
    {
      text: "Eat Dinner",
      isCompleted: false,
      edit: false
    },
    {
      text: "Create Read Update Delete",
      isCompleted: false,
      edit: false
    }
  ]);

  const addTodo = text => {
    console.log(text)
    setTodos([...todos, { text }]);
  };

  const completeTodo = index => {
    todos[index].isCompleted = true;
    setTodos([...todos]);
  };

  const removeTodo = index => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  const editTodo = index => {
    const el = document.getElementsByClassName('todo')
    todos[index].edit = true;
    if(todos[index].edit) {
      // el.classList.add('todo hidden')
      el.classList.add("mystyle");
    }
  }


  return (
    <>

      <Nav />

      <TodoForm addTodo={addTodo} />

      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        ))}
      </div>

    </>
  );
}

export default App;