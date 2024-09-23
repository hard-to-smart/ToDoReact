import { useState, useEffect } from "react";
import Input from "./components/Input";
import TaskList from "./components/TaskList";

let idCount = 1;
const App = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [editTask, setEditTask] = useState(true);
  
  useEffect(() => {
    console.log(taskList);
  }, [taskList, editTask]);

  const handleDisplayTask = (input) => {
    const singleTask = {
      id: idCount++,
      name: input,
      completed: false,
    };
    setTaskList((previousTaskList) => [...previousTaskList, singleTask]);
    setTask("");
  };

  const handleEditTask = (selectedTaskId) => {
    setEditTask(true);
    console.log(editTask);
  };

  const handleToggleComplete = (selectedTaskId) => {
    const updated = taskList.map((eachTask) => {
      return eachTask.id === selectedTaskId
        ? { ...eachTask, completed: !eachTask.completed }
        : eachTask;
    });
    setTaskList(updated);
  };

  const handleDeleteOne = (selectedTaskId) => {
    setTaskList(taskList.filter((eachTask) => eachTask.id !== selectedTaskId));
    console.log(taskList);
  };

  const handleDeleteAll = () => {
    setTaskList("");
    console.log(taskList);
  };

  return (
    <div className="w-screen h-screen flex justify-center place-content-center p-8">
      <div className="flex flex-col rounded-lg bg-white shadow-sm p-8 border border-slate-200 h-fit gap-y-4">
        <h2>Todo List</h2>

        <Input task={task} setTask={setTask} handleDisplayTask={handleDisplayTask} />

        <TaskList taskList={taskList} handleToggleComplete={handleToggleComplete} handleEditTask={handleEditTask} handleDeleteOne={handleDeleteOne} />

        <div className="flex justify-center">
          <button
            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            onClick={handleDeleteAll}
          >
            Delete All
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
