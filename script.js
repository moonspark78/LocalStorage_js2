const addButton = document.getElementById('addTask');
const inputTask = document.getElementById('inputTask');
const taskList = document.getElementById('taskList');

let tasks = [];



window.onload = function(){
    const storedTasks = localStorage.getItem('tasks');
    if(storedTasks){
        tasks = JSON.parse(storedTasks);
        tasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.textContent = task;
            taskList.appendChild(taskItem);
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

    const taskItem = document.createElement('li');
    taskItem.textContent = task;
    taskList.appendChild(taskItem);
    inputTask.value = "";
};
