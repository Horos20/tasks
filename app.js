const taskInput = document.querySelector("#task");
const form = document.querySelector("form");
const taskList = document.querySelector(".collection");
const delTasksBtn = document.querySelector('#del-tasks');

form.addEventListener("submit", addTask);
taskList.addEventListener("click", deleteTask);
delTasksBtn.addEventListener("click", deleteAll);

function deleteAll() {
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

}

function deleteTask(event) {
    if(event.target.textContent === "x") {
        if(confirm("Delete?")) {
            event.target.parentElement.remove();
            task = event.target.parentElement.firstChild.textContent;
            deleteTaskFromLocalStorage(task);
        }
    }
}

function deleteTaskFromLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (tasksElement, index){
        if(tasksElement === task){
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask(event) {
    // Input value
    const task = taskInput.value;
    // Create li element
    const li = document.createElement("li");
    // Define <li> CSS class
    li.className = "collection-item";
    // Create value for <li>
    const text = document.createTextNode(task);
    // Add text value for <li>
    li.appendChild(text);
    // Create link element
    const alink = document.createElement('a');
    // Create text node
    const linkText = document.createTextNode("x");
    // Add text to link
    alink.appendChild(linkText);
    // Create link reference
    alink.href = "#";
    // Push x to right of the list item
    alink.className = 'secondary-content';
    // Add link to list
    li.appendChild(alink);
    // Find <ul> DOM component
    const ul = document.querySelector(".collection");
    // Add <li> to <ul>
    ul.appendChild(li);
    // Save task
    addTaskToLocalStorage(task);
    // Clear input value
    taskInput.value = "";
    // Form submit event control
    event.preventDefault();
}

function addTaskToLocalStorage(task) {
    let tasks;
    if(localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push(task)
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

form.addEventListener("submit" , addTask);

