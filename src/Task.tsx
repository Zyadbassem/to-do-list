import { useEffect, useRef } from "react";
import {
  getToDoList,
  removeTask,
  getFinishedList,
  deleteFromFinishedList,
} from "./lib";

function Task({
  task,
  setTasks,
  setFinished,
  isFinished,
}: {
  task: string;
  setTasks: Function;
  setFinished: Function;
  isFinished: boolean;
}) {
  const handleRemove = () => {
    if (isFinished) {
      deleteFromFinishedList(task);
      setFinished(getFinishedList());
    } else {
      removeTask(task);
      setTasks(getToDoList());
      setFinished(getFinishedList());
    }
  };
  const button = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (button.current) {
      if (isFinished) {
        button.current.style.color = "#00ff40";
      }
    }
  }, [button]);
  return (
    <div className="task">
      <span>{task}</span>
      <i className="fa-solid fa-check" onClick={handleRemove} ref={button}></i>
    </div>
  );
}

export default Task;
