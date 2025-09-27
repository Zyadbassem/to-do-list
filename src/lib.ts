const LIST_NAME = "toDoList";
const FINISHED_NAME = "finishedList";

export function getToDoList(): string[] {
  const list = localStorage.getItem(LIST_NAME);
  return list ? JSON.parse(list) : [];
}

export function saveList(list: string[]) {
  localStorage.setItem(LIST_NAME, JSON.stringify(list));
}

export function addTask(task: string) {
  const list = getToDoList();
  list.push(task);
  saveList(list);
}

export function removeTask(task: string) {
  const list = getToDoList();
  const updatedList = list.filter(
    (v, _) => v.toLowerCase() !== task.toLowerCase()
  );
  saveList(updatedList);
  addToFinishedList(task);
}

export function getFinishedList(): string[] {
  const list = localStorage.getItem(FINISHED_NAME);
  return list ? JSON.parse(list) : [];
}

export function saveFinishedList(list: string[]) {
  localStorage.setItem(FINISHED_NAME, JSON.stringify(list));
}

export function addToFinishedList(task: string) {
  const list = getFinishedList();
  list.push(task);
  saveFinishedList(list);
}

export function deleteFromFinishedList(task: string) {
  const list = getFinishedList();
  const updated = list.filter((v, _) => v.toLowerCase() !== task.toLowerCase());
  saveFinishedList(updated);
}
