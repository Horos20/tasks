const taskInput = document.querySelector("#task");
const form = document.querySelector("form");

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

