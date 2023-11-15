import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="bg-black w-[100%] p-5 my-5 text-white text-extrabold">
        Redux Toolkit Todo App
      </h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
