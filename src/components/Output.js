import { FaTrash } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
// import TodoTemplate from "./TodoTemplate";

function Output({ todos, setTodos }) {
  const handleDelet = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  return (
    <div className="text-white pl-6 pr-6">
      {todos.map((todo) => {
        return (
          <div
            key={todo.id}
            className="flex items shadow-lg mt-2 py-2 px-3 rounded-md text-lg md:border-2 md:border-white md:border-dotted ">
            <div className="write">
              <p>{todo.text.charAt(0).toUpperCase() + todo.text.slice(1)}</p>
            </div>
            <div className="icon flex space-x-2 text-[#EBB96E] cursor-pointer pt-1">
              <BsCheckCircleFill />
              <FaTrash onClick={() => handleDelet(todo.id)} />
            </div>
          </div>
        );
      })}
      <div className=" text-center my-10 w-full pb-5">
        <button
          onClick={() => setTodos([])}
          className="bg-[#EBB96E] shadow-md w-full text-[#262548] font-bold text-lg p-2 rounded-md mb-5">
          Clear All Todos
        </button>
      </div>
    </div>
  );
}

export default Output;
