// toDo list uygulaması için gerekli değişkenlerin tanımlanması

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

//Görevleri depolamak için bir dizi tanımlanması
let tasks = [];

//Ekleme düğmesi tıklanınca görev ekleyen fonksiyon

function addTask() {
    if (taskInput.value !=="") {
        const task = {
            id: Date.now(),
            text: taskInput.value,
            completed:false
        };

        tasks.push(task);
        addToLocalStorage(tasks);
        taskInput.value ="";
    }
}

//Görev Listesini güncelleyen fonksiyon

function renderTasks(tasks) {
    taskList.innerHTML = "";
tasks.forEach(task => {
    const li = document.createElement("li");
    li.innerHTML =  `<span>${task.text}</span><button class="deleteButton" data-id="${task.id}">Sil</button>`;
    taskList.append(li);
        
    });
}

//görev silme işlemini gerçekleştiren fonksiyon

function deleteTask (id) {
    tasks = tasks.filter(task => task.id !== id);
    addToLocalStorage(tasks);
}

//LocalStorage'a görevleri ekleyen fonksiyon

function addToLocalStorage (tasks);
localStorage.setItem("tasks", JSON.stringify(tasks));

