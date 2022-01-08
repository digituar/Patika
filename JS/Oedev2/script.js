//localstorage
const storageName = "toDoList";


// task list
let task = document.querySelector("#task");
let taskList = document.querySelector("#list");
taskList.addEventListener("click", elemenSelected);

// add task
let addButton = document.querySelector("#liveToastBtn");
addButton.addEventListener("click", newElement);

//delete all button
const deleteAllBtn = document.querySelector(".footer button");

function main() {    
    loadTasks();
    task.select();
}

function elemenSelected(e) {
    e.target.classList.toggle("checked");
}

task.onkeydown = function(e) {
    if (e.keyCode == 13)
        newElement();
};

// Sayfayı yenilediğimizde localStorage verileri listeye ekledik ve  başlangıçta bu fonksiyonu çağırdık
function loadTasks() {
    let toDoList = loadStorageData()
    if (toDoList != null) {
        toDoList.forEach(todo => {
            console.log(todo);
            let li = document.createElement("li");
            li.innerHTML = todo;
            taskList.appendChild(li);

            let close = document.createElement("span");
            close.innerHTML = '<button class="delete-todo js-delete-todo"><svg><use href="#delete-icon"></use></svg></button>';
            close.classList.add("close");
            close.addEventListener("click", deleteElement);
            li.appendChild(close);
        });
    }
    setCountofTasks(toDoList);    
}

function setCountofTasks(toDoList) {
    const toDoNum = document.querySelector(".pendingTasks");
    toDoNum.textContent = toDoList.length;
    if(toDoList.length > 0) { 
        deleteAllBtn.classList.add("active");
    }
    else {
        deleteAllBtn.classList.remove("active"); 
    }
}

function newElement() {  
    task.value = task.value.trim();
    let taskVal = task.value;
    if(taskVal === "" ) 
        $(".error").toast("show"); 
    else {
        if (isExist(taskVal)) {
            alert(`"${taskVal}" listede mevcut`);
            task.select();
        }
        else {
            let li = document.createElement("li");
            li.innerHTML = task.value;
            taskList.appendChild(li);

            let close = document.createElement("span");
            close.innerHTML = '<button class="delete-todo js-delete-todo"><svg><use href="#delete-icon"></use></svg></button>';
            close.classList.add("close");
            close.addEventListener("click", deleteElement);
            li.appendChild(close);
            saveInStorage(task.value);
            task.value = '';
            setCountofTasks(taskList.children); 
        }
    }
    task.focus();
}

function deleteElement(e) {
    if(e.target.className === "delete-todo js-delete-todo")
    {
        var selectedElement = e.target.parentElement.parentElement.firstChild.data;
        if(confirm(`"${selectedElement}" silmek istediğinize emin misiniz??`)) {
            e.target.parentElement.parentElement.remove();
            let value = e.target.parentElement.parentElement.firstChild.nextElementSibling.textContent.trim();
            deleteStorage(value);
        }
        setCountofTasks(taskList.children); 
    }
}

function isExist(val) {
    const li = document.querySelectorAll('ul li');
    for (let i = 0; i < li.length; i++) {  
        if (li[i].firstChild.data.toUpperCase() === val.toUpperCase()) {
            console.log(li[i].firstChild.data.toUpperCase());
            return true;
        }
    }
    return false;
}

// function getStorage() {
//     return JSON.parse(localStorage.getItem(storageName));
// }

function saveInStorage(val) {
    let myToDos = loadStorageData();

    myToDos.push(val);
    localStorage.setItem(storageName, JSON.stringify(myToDos));
}

function loadStorageData() {
    let myToDos;
    let storageData = JSON.parse(localStorage.getItem(storageName));
    if (storageData == null)
        myToDos = [];
    else
        myToDos = JSON.parse(localStorage.getItem(storageName));
    
    return myToDos;
}

function deleteStorage(index) {
    let myToDoList = loadStorageData();   
    myToDoList.splice(index, 1);
    localStorage.setItem(storageName, JSON.stringify(myToDoList));
}

deleteAllBtn.onclick = () => {
    listArray = [];
    localStorage.setItem(storageName, JSON.stringify(listArray));
    taskList.innerHTML = "";
    main();
}

main();