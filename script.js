const addButton = document.getElementById('addTask');
const inputTask = document.getElementById('inputTask');
const taskList = document.getElementById('taskList');

let tasks = [];

function createTaskElement(task){
    const taskItem = document.createElement('li');
    taskItem.textContent = task;
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '🗑️';
    deleteButton.addEventListener('click', function(){
        taskItem.remove();
        tasks = tasks.filter(t => t !== task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    });
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
}

window.onload = function(){
    const storedTasks = localStorage.getItem('tasks');
    if(storedTasks){
        tasks = JSON.parse(storedTasks);
        tasks.forEach(task => {
            /* const taskItem = document.createElement('li');
            taskItem.textContent = task;
            taskList.appendChild(taskItem); */
            createTaskElement(task); // ✅ Maintenant, on ajoute bien le bouton "🗑️"
        });

    }
};

addButton.addEventListener('click', addTask);

function addTask(){
    const task = inputTask.value.trim();
    if(task === ""){
        alert('Please enter a task');
        return;
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    createTaskElement(task); // ✅ Maintenant, on ajoute bien le bouton "🗑️"
   /*  const taskItem = document.createElement('li');
    taskItem.textContent = task;
    taskList.appendChild(taskItem); */
    inputTask.value = "";
};
