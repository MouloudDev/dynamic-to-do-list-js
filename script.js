document.addEventListener("DOMContentLoaded", () => {
    // Select elements from the dom.
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // If the user didn't provide a task, let them know
        // and stop the execution of the function
        if (!taskText.length) {
            alert("Please enter a task!");
            return;
        }

        // Create a li element where the task item
        // will be displayed
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create "Remove task" button and remove li element
        // when clicked
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn");
        removeBtn.addEventListener("click", () => {
            li.parentElement.removeChild(li);
        })

        // Add "Remove task" button as a child of the li element
        li.appendChild(removeBtn);

        // Add task item (li element) to the task list
        taskList.appendChild(li);

        // Clear task input field
        taskInput.value = "";
    }

    // Attach a "click" event to "addButton" and pass
    // "addTask" function as a callback
    addButton.addEventListener("click", addTask);

    // Attach a "keypress" event to "taskInput" and call
    // "addTask" function if the pressed key is "Enter"
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    })
})
