import { getToDoList, removeTask } from "./lib";

function Task({ task, setTasks }: { task: string; setTasks: Function }) {
  const handleRemove = () => {
    removeTask(task);
    setTasks(getToDoList());
  };
  return (
    <div className="task">
      <span>{task}</span>
      <i className="fa-solid fa-check" onClick={handleRemove}></i>
    </div>
  );
}

export default Task;
