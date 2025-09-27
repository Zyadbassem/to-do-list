import { addTask, getFinishedList, getToDoList } from "./lib";
import React, { useState } from "react";
import Task from "./Task";

function FormElement() {
  const [tasks, setTasks] = useState<string[]>(getToDoList());
  const [finished, setFinished] = useState<string[]>(getFinishedList());
  const [task, setTask] = useState<string | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };
  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task && task.trim() !== "") {
      addTask(task);
      setTask("");
    }
    setTasks(getToDoList());
  };
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <h1>TO-DO LIST</h1>
        <input
          placeholder="Add a task"
          onChange={handleChange}
          value={task ?? ""}
        />
        <button type="submit">Add</button>
      </form>
      <section className="tasks-sec">
        <div className="tasks-label">
          <span>Tasks</span>
        </div>
        {tasks.map((v, i) => (
          <Task
            task={v}
            key={i}
            setTasks={setTasks}
            setFinished={setFinished}
            isFinished={false}
          />
        ))}
      </section>
      {finished[0] && (
        <section className="tasks-sec">
          <div className="tasks-label">
            <span>Finished</span>
          </div>
          {finished.map((v, i) => (
            <Task
              task={v}
              key={i}
              setTasks={setTasks}
              setFinished={setFinished}
              isFinished={true}
            />
          ))}
        </section>
      )}
    </>
  );
}

export default FormElement;
