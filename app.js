const taskInput = document.querySelector("#task");
const form = document.querySelector("form");
const taskList = document.querySelector(".collection");

form.addEventListener("submit", addTask);
taskList.addEventListener("click", deleteTask);

function deleteTask(event) {
    if(event.target.textContent == "x") {
        if(confirm("Delete?")) {
            event.target.parentElement.remove();
        }
    }
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
    // Clear input value
    taskInput.value = "";
    // Form submit event control
    event.preventDefault();
}

form.addEventListener("submit" , addTask);

