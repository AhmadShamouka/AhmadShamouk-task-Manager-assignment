const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('tasks');
const displayPrompt = document.getElementById('displayPromt');
const submitButton = document.getElementById('submit-button');
const editInput = document.getElementById('task-edit');
const sortbtn = document.getElementById('sort-task');
const Sortarray = [];

sortbtn.addEventListener('click', sortTask);
addTaskButton.addEventListener('click', addTask);

function renderTask() {
    taskList.innerHTML = "";
    Sortarray.forEach((taskName, index) => {
        const li = document.createElement('li');
        li.innerHTML = createTaskElement(taskName, index);
        taskList.appendChild(li);
        addEventListeners(li, index);
    });
}

function createTaskElement(taskName, index) {
    return `
        <div class="ag-format-container">
            <div class="ag-courses_box">
                <div class="ag-courses_item">
                    <a href="#" class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>
                        <div class="ag-courses-item_title">
                            <h1 class="task-name">${taskName}</h1>
                            <button class="mark-button" index="${index}"><b>x</b></button>
                        </div>
                        <div class="ag-courses-item_date-box">
                            <span class="ag-courses-item_date">
                                <span class="task-buttons">
                                    <button class="edit-button" index="${index}">Edit</button>
                                    <button class="delete-button" index="${index}">Delete</button>
                                   
                                </span>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>`
        ;
}

function addTask() {
    const taskName = taskInput.value;
    if (taskName === '') {
        alert('Task name cannot be empty.');
        return;
    }

    Sortarray.push(taskName);
    renderTask();
    taskInput.value = '';
}
function sortTask(){
    Sortarray.sort();
    renderTask();
}

function addEventListeners(li, index) {
    const markButton = li.querySelector('.mark-button');
    markButton.addEventListener('click', () => mark(index));

    const deleteButton = li.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => deleteTask(li));

    const editButton = li.querySelector('.edit-button');
    editButton.addEventListener('click', () => editTask(li, Sortarray[index]));
}

function mark(index) {
    const markButton = document.querySelector(`.mark-button[index="${index}"]`);
    if (markButton.innerHTML === "✔") {
        markButton.innerHTML = "<b>x</b>";
        markButton.style.backgroundColor = "red";
    } else {
        markButton.innerHTML = "✔";
        markButton.style.backgroundColor = "green";
    }
}

function deleteTask(listItem) {
    listItem.remove();
}

function editTask(listItem, originalTaskName) {
    displayPrompt.style.display = 'block';
    editInput.value = originalTaskName;

    submitButton.addEventListener('click', function () {
        const editedTaskName = editInput.value;
        const taskNameSpan = listItem.querySelector('.task-name');
        taskNameSpan.textContent = editedTaskName;
        displayPrompt.style.display = 'none';
    });
}

taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Initial rendering
renderTask();
