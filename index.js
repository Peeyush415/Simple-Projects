let tasks = [
    {
        title:"task 1",
        status:"Pending",
    },
    {
        title:"task 2",
        status:"Pending",
    },
    {
        title:"task 3",
        status:"Pending",
    }

];

const createTaskBtn = document.getElementById('create-task');
const newTask = document.getElementById("task");

function addTask(task) {
    tasks.push(task);
    updateTaskTable();
}

function clearTable() {
    var table = document.getElementById('taskTable');
    while(table.rows.length > 1) {
        table.deleteRow(1);
    }
}

function updateTaskTable(){
    clearTable();

    var table = document.getElementById('taskTable');

    tasks.forEach((task, index) =>{
        const row = table.insertRow();
        const srNoCell = row.insertCell();
        const titleCell = row.insertCell();
        const statusCell = row.insertCell();

        srNoCell.textContent = index + 1;
        titleCell.textContent = task.title;
        statusCell.textContent = task.status;
    });

    resetInputField();
}

function resetInputField() {
    newTask.value = '';
}

createTaskBtn.addEventListener("click", () => {
    // console.log(newTask.value);
    let task = {
        title:newTask.value.trim(),
        status:"Pending"
    };
    addTask(task);
});

window.addEventListener('load', updateTaskTable);
// console.log(tasks);