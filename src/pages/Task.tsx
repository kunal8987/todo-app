import React from "react";
import { Task } from "../utility/Task";
import { updateTask, deleteTask } from "../utility/TaskService";

type Props = {
  task: Task;
};

const TaskItem: React.FC<Props> = ({ task }) => {
  const handleToggle = async () => {
    await updateTask({ ...task, completed: !task.completed });
    window.location.reload();
  };

  const handleDelete = async () => {
    if (task.id !== undefined) {
      await deleteTask(task.id);
    } else {
      console.error("Task ID is undefined");
    }
    window.location.reload();
  };

  return (
    <div
      className={`flex justify-between items-center p-2 rounded mb-2 gap-3 ${
        task.completed ? "bg-green-200" : "bg-gray-200"
      }`}
    >
      <div>
        <p className={task.completed ? "line-through" : ""}>{task.title}</p>
      </div>
      <div>
        <button
          onClick={handleToggle}
          className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 mr-1 sm:mr-3"
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button
          className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 mt-1 sm:mt-0"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
