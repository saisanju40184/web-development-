function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = taskInput.value + '<button class="delete-button" onclick="deleteTask(this)">Delete</button>';
    taskList.appendChild(li);

    taskInput.value = "";
}

function deleteTask(element) {
    var li = element.parentElement;
    li.remove();
}
