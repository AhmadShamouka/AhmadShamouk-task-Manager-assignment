const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('tasks');

addTaskButton.addEventListener('click', addTask);
let Sortarray=["ahmad","zein","ali","hadi","hilal"]
let unsortarray=[]
function addTask() {
    const taskName = taskInput.value;
    if (taskName === '') {
        alert('Task name cannot be empty.');
        return;
    }
    const li = document.createElement('li');
    li.innerHTML = `
        <div class="ag-format-container">
            <div class="ag-courses_box">
                <div class="ag-courses_item">
                    <a href="#" class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>
                        <div class="ag-courses-item_title">
                        <h1 class="task-name">${taskName}</h1>
                        <button id="mark-button" class="mark-button"><b>x</b></button>
                        </div>
                        <div class="ag-courses-item_date-box">
                            <span class="ag-courses-item_date">
                                <span class="task-buttons">
                                    <button class="edit-button">Edit</button>
                                    <button class="delete-button">Delete</button>
                                    <button class="sort-button">Sort</button>
                                </span>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    `;
    taskList.appendChild(li);


    const deleteButton = li.querySelector('.delete-button');
    
    deleteButton.addEventListener('click', function() {
        li.remove();
    });
    const editButton=li.querySelector('.edit-button');
    const displayPromt=document.getElementById('displayPromt')
    editButton.addEventListener('click', function() {
        displayPromt.style.display = 'block';
        const submitButton = document.getElementById('submit-button');
        const editInput = document.getElementById('task-edit');    

        editInput.value = taskName;
    
        submitButton.addEventListener('click', function() {
            const editedTaskName = editInput.value;
            const taskNameSpan = li.querySelector('.task-name');
            taskNameSpan.textContent = editedTaskName;
            displayPromt.style.display = 'none';
        });
    });
    
    taskInput.value = '';




}
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
