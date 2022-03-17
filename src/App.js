import States from "./components/States";

function App() {
  return (
    <div className="w-sm md:w-full p-0 m-0 mt-12 flex align-middle justify-center mx-auto h-screen">
      <div className="w-sm md:w-2/5 h-full border-2 border-gray-200 rounded-lg  shadow-2xl pt-2">
        <States />
      </div>
    </div>
  );
}

export default App;
