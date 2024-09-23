import EachTask from "./EachTask";

const TaskList = ({taskList, handleToggleComplete, handleEditTask, handleDeleteOne}) => {
  return (
    <div className="flex flex-col gap-4">
      {taskList.length > 0 &&
        taskList.map((eachTask) => (
          <EachTask  key={eachTask.id} eachTask={eachTask} handleToggleComplete={handleToggleComplete} handleEditTask={handleEditTask} handleDeleteOne={handleDeleteOne}/>
        ))}
    </div>
  );
};

export default TaskList;
