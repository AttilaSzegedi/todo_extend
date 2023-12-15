import {calcprogress} from "./progress.js"

const todo1 = {
    name: 'Glocery shop',
    isCompleted: false
};

const todo2 = {
    name: 'Pay the bill',
    isCompleted: false
};

const todo3 = {
    name: 'Clean the room',
    isCompleted: false
};

const todos = [
    todo1,
    todo2,
    todo3
];

export const Todos = () => {
    showTodos();
    progress();
};

const progress = () => {
    document.querySelector('#progess').textContent = `${Math.round(calcprogress(todos) * 100)}%`;
};



const showTodos = () => {
    const todoList = document.querySelector('#todos');
    todoList.innerHTML = '';
    todos.forEach(todo => {
        todoList.innerHTML = todoList.innerHTML + `
            <div class="${todo.isCompleted ? 'complete' : 'incomplete'}">
                <input ${todo.isCompleted ? 'checked' : ''} type="checkbox">
                ${todo.name}
            </div>
        `;
    });
    checked();
};

const checked = () => {
    document.querySelectorAll('input[type=checkbox]').forEach((checbox, index) => {
        checbox.addEventListener('change', () => {
            todos[index].isCompleted = checbox.checked;
           
            showTodos();
            progress();
        });
    });
};