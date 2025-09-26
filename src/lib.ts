const LIST_NAME = "toDoList";

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
}
