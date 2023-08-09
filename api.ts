import { ITask } from "./types/tasks";

const baseURl = "http://localhost:3001";

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseURl}/tasks`, { cache: 'no-store'});
    const todos = await res.json();
    return todos;
}

export const addTodo = async (todo: ITask): Promise<ITask> => {
    const res = await fetch(`${baseURl}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })

    const newTodo = res.json();
    return newTodo;
}

export const editTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseURl}/tasks/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

  const updatedTodo = res.json();
  return updatedTodo;
};

export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${baseURl}/tasks/${id}`, {
    method: "DELETE",
  });
};