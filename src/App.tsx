import TaskForm from "./pages/AddTask";
import TaskList from "./pages/TaskList";

function App() {
  return (
    <>
      <div className=" w-full p-3 sm:w-[80%] m-auto">
        <div>
          <p className=" text-4xl font-bold text-center p-5 ">Todo App </p>
          <TaskForm />
        </div>
        <div className=" pt-5">
          <p className=" text-4xl font-bold text-center p-5 ">Task-List</p>
          <TaskList />
        </div>
      </div>
    </>
  );
}

export default App;
