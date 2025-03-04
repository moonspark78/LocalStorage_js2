const addButton = document.getElementById('addTask');
const inputTask = document.getElementById('inputTask');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', addTask);

function addTask(){
    const task = inputTask.value.trim();
    if(task === ""){
        alert('Please enter a task');
        return;
    }
    const taskItem = document.createElement('li');
    taskItem.textContent = task;
    taskList.appendChild(taskItem);
    inputTask.value = "";
};
