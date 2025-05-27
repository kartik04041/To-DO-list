const inputbox= document.getElementById("input-box");
const list=document.getElementById("task-list");
function addTask() {
    if(inputbox.value === '') {
        alert("Please enter a task");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; 
        li.appendChild(span);
    }
    inputbox.value = '';
}
list.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTasks();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTasks();
    }
}, false);
function saveTasks() {
    localStorage.setItem("tasks", list.innerHTML);
}
function loadTasks() {
    list.innerHTML = localStorage.getItem("tasks");
    
    }
loadTasks();