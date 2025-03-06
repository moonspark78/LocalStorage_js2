const addButton = document.getElementById('add');
const inputTask = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

let tasks = [];

function createTaskElement(task) {
    const taskItem = document.createElement('li');
    taskItem.innerText = task;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = '🗑️';
};
