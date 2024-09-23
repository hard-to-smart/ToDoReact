import { FaPencilAlt } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";

const EachTask = ({eachTask, handleEditTask, handleDeleteOne, handleToggleComplete }) => {
  return (
    <div className="flex flex-row gap-4 ">
            <input
              type="checkbox"
              value={eachTask.completed}
              onClick={() => {
                handleToggleComplete(eachTask.id);
              }}
            />
            <input
              label="Task"
              value={eachTask.name}
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            />
            <button>
              <FaPencilAlt onClick={() => handleEditTask(eachTask.id)} />
            </button>
            <button>
              <IoTrashBin onClick={() => handleDeleteOne(eachTask.id)} />
            </button>
          </div>
  )
}

export default EachTask