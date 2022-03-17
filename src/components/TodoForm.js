function TodoForm({ todoInput, setTodoInput, todos, setTodos }) {
  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };
  const handleSubmit = (e) => {
    if (todoInput !== "") {
      setTodos([
        ...todos,
        {
          text: todoInput,
          id: Math.round(Math.random() * 100),
          completed: false,
        },
      ]);
    }

    setTodoInput("");
    e.preventDefault();
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit} className=" w-sm text-center mt-10 ">
        <h1 className="text-white text-center font-bold text-4xl">My Todos</h1>
        <p className="text-center text-white font-bold text-xl py-4">
          Remember, Time is valuable
        </p>
        <div className="inputsfield lg:flex-row">
          <div className="flex ">
            <input
              className="ml-3 p-2 rounded-tl-md rounded-bl-md"
              type="text"
              value={todoInput}
              onChange={handleChange}
              placeholder="Enter a task"
            />
            <button
              type="submit"
              className="bg-[#EBB96E] text-[#262548] py-2 rounded-tr-md rounded-br-md px-4 shadow-md text-md font-semibold">
              Add Todo
            </button>
          </div>
          <div className=" mt-5 lg:mt-0">
            <input
              type="text"
              placeholder="Search task"
              className="p-2 rounded-md w-11/12"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;

{
  /* <div className="mt-12 w-full flex align-middle justify-center mx-auto h-screen ">
      <form
        onSubmit={handleSubmit}
        className=" w-sm md:w-2/5 border-white border-2 h-3/4  pt-8"></form> */
}
