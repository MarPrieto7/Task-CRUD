import { useTasks } from "../context/TaskProvider";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div className="bg-teal-500 text-white rounded-md p-4 my-2">
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{task.title}</h2>
        <span>{task.done == 1 ? "️✅️" : "❌"}</span>
      </header>
      <p className="text-xs font-semibold">{task.description}</p>
      <span className="font-semibold">{task.createAt}</span>
      <div className="flex gap-x-1 mt-2">
        <button
          className="bg-slate-300 px-2 py-1 text-black"
          onClick={() => deleteTask(task.id)}
        >
          Eliminar
        </button>
        <button
          className="bg-slate-300 px-2 py-1 text-black"
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          Editar
        </button>
        <button
          className="bg-slate-300 px-2 py-1 text-black"
          onClick={() => handleDone(task.done)}
        >
          Cambiar estado
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
