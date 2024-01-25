import React, { useState } from "react";
import { Task } from "../utility/Task";
import { createTask } from "../utility/TaskService";

const TaskForm: React.FC = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = {
      title,
      completed: false,
    };
    await createTask(newTask);
    setTitle("");
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className=" flex flex-col gap-5 ">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task"
        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-lg placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
      />
      <button
        type="submit"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
