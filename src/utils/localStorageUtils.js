export const updateLocalStorageTodos = (todos) => {
    const updatedTodos = JSON.stringify(todos);
    localStorage.setItem("todos", updatedTodos);
};
