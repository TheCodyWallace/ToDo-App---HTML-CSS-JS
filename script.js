document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('task-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addTask();
    });
});

function createTaskElement(text) {
    const listItem = document.createElement('listItem');
    listItem.classList.add('task-item');

    const taskText = document.createElement('span');
    taskText.classList.add('task-text');
    taskText.textContent = text;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        listItem.remove();
    };

    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);

    return listItem;
}


function addTask() {
    const input = document.getElementById('task-input');
    const taskText = input.value.trim();

    if (taskText) {
        const taskList = document.getElementById('task-list');
        const newTask = createTaskElement(taskText);

        newTask.querySelector('.delete-button').addEventListener('click', () => {
            deleteTask(newTask);
        });

        taskList.appendChild(newTask);
        input.value = '';
    }
}

function deleteTask(task) {
    const taskList = document.getElementById('task-list');
    taskList.removeChild(task);
}

document.getElementById('task-list').addEventListener('click', function(event) {
    if (event.target.classList.contains('task-text')) {
        event.target.classList.toggle('completed');
    }
});

// This is a test comment