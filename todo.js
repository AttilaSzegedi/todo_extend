import {calcprogress} from "./progress.js"

const todo1 = {
    name: 'Glocery shop',
    isCompleted: false,
    difficulty:3
};

const todo2 = {
    name: 'Pay the bill',
    isCompleted: false,
    difficulty:4
};

const todo3 = {
    name: 'Clean the room',
    isCompleted: false,
    difficulty:1
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
                ${todo.name}  -  ${todo.difficulty}
                
                <button class="remove">X</button>
        
            </div>
          
        `;
    });
    checked();
    deleteTodo();
    newTodo();
    sortAsc();
    sortDesc();
    whatIsMaxDifficulty();
    
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

const deleteTodo = () => {
    document.querySelectorAll('.remove').forEach((button, index) => {
        button.addEventListener('click', () => {
            todos.splice(index,1)
           
            showTodos();
            progress();
           
        });
    });
};

const newTodo=()=>{
    document.querySelector(`#newitem-button`).addEventListener(`click`,()=>{
     const name=document.querySelector(`#newiterm-name`).value;
     const difficulty=Number(document.querySelector(`#newiterm-difficult`).value);
     const isCompleted=false;
     document.querySelector(`#newiterm-name`).value=``;
     document.querySelector(`#newiterm-difficult`).value=``;
     todos.push({name,isCompleted,difficulty});
     showTodos();
     progress();
    });



};

const sortAsc=()=>{
   document.querySelector(`#sort-asc`).addEventListener(`click`,()=>{
    todos.sort((t1, t2) => t1.difficulty - t2.difficulty);
    showTodos();   
   });
   

};

const sortDesc=()=>{
    document.querySelector(`#sort-desc`).addEventListener(`click`,()=>{
     todos.sort((t1, t2) => t1.difficulty < t2.difficulty ? 1 : (t1.difficulty === t2.difficulty ? 0 : -1));;
     showTodos();   
    });
    
 
 };

 const whatIsMaxDifficulty = () => {
    
        const mostDifficultItemElement = document.querySelector('#diff-max-v');
        const maxDifficulty = Math.max(...todos.map(t => t.difficulty));
        const mostDifficultItem = todos.find(t => t.difficulty === maxDifficulty);
    
        mostDifficultItemElement.innerHTML = `${mostDifficultItem.name} : ${mostDifficultItem.difficulty}`;
    
    
};