// Define UI Variables 
const taskInput = document.querySelector('#task'); //the task input text field
const form = document.querySelector('#task-form'); //The form at the top
const filter = document.querySelector('#filter'); //the task filter text field
const taskList = document.querySelector('.collection'); //The UL
const clearBtn = document.querySelector('.clear-tasks'); //the all task clear button
const reloadIcon = document.querySelector('.fa'); //the reload button at the top navigation 

const ascending = document.querySelector('.ascending');
const descending = document.querySelector('.descending');

// Add Event Listener  [Form , clearBtn and filter search input ]

form.addEventListener('submit', addNewTask);
clearBtn.addEventListener('click', clearAllTasks);
filter.addEventListener('keyup', filterTasks);
taskList.addEventListener('click', removeTask);
reloadIcon.addEventListener('click', reloadPage);

ascending.addEventListener('click', sortTasksAsc);
descending.addEventListener('click', sortTasksDesc);

// Add New  Task Function definition 
function addNewTask(e) {
    e.preventDefault(); 
    if (taskInput.value === '') {
        taskInput.style.borderColor = "red";
        return;
    }
    const li = document.createElement('li');
    const span = document.createElement('span');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    span.className = 'date-item';
    span.style.display = 'none';
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    span.innerHTML = new Date();
    li.appendChild(link);
    li.appendChild(span);
    taskList.appendChild(li);

    taskInput.value = '';

}

// Clear Task Function definition 
function clearAllTasks() {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure about that ?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

function sortTasksAsc(e){
    var container = taskList;
    const content = Array.from(container.querySelectorAll("LI"));
    content.sort(function(a,b){
        let aa = a.children[1].textContent;
        let bb = b.children[1].textContent;
        return aa < bb ? -1 : (aa > bb ? 1 : 0);
    }).forEach(li => container.appendChild(li));       
}

function sortTasksDesc(e){
    var container = taskList;
    const content = Array.from(container.querySelectorAll("LI"));
    content.sort(function(a,b){
        let aa = a.children[1].textContent;
        let bb = b.children[1].textContent;
        return aa > bb ? -1 : (aa < bb ? 1 : 0);
    }).forEach(li => container.appendChild(li));    
}

function filterTasks(e) {
    const inputText = e.target.value.toLowerCase();
    const tasks = Array.from(taskList.children);
    tasks.forEach(function(task){
        let title = task.innerText;
        if(title.toLowerCase().indexOf(inputText) != -1){
            task.style.display = "block";
        }else{
            task.style.display = "none";
        }
    });
    console.log(Array.from(taskList.children).map((val) => val.innerHTML));
};

function reloadPage() {
    location.reload();
}

