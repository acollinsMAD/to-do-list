//declaring form variables
const inputBox = document.getElementById("taskInput");
const listContainer = document.getElementById("taskList");

//function to add tasks to the list container
function addTask(){
    if (inputBox.value === ''){
        alert("Cannot be empty");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

//Adds formatting to tasks with functional buttons
listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//stores tasks between sessions

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//displays data when site is reopened
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();