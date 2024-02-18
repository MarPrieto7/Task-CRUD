import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskProvider";

function TasksPage() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) {
      return (
        <div className="flex justify-center items-center h-screen">
          <div className="grid grid-cols-1">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-red-900">
              Aún no hay tareas!
            </h1>
          </div>
        </div>
      );
    }
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <div>
      <h1 className="text-6xl italic underline text-blue-900 text-center font-bold">
        Tareas
      </h1>
      <div className="grid grid-cols-3 gap-2">{renderMain()}</div>
    </div>
  );
}

export default TasksPage;
