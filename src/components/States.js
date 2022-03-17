import TodoForm from "./TodoForm";
import React, { useState } from "react";
import Output from "./Output";

function States() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <TodoForm
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        todos={todos}
        setTodos={setTodos}
      />
      <Output todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default States;
