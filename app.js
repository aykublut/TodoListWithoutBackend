const todoInput = document.querySelector("#todoInput");
const todoConfirm = document.querySelector("#todoConfirm");
const listWrapper = document.querySelector(".list-wrapper");
const clearButton = document.querySelector("#clear");

runEvents();

function runEvents() {
    todoConfirm.addEventListener("click", exe);
    listWrapper.addEventListener("click", DeleteOrDoneMark);
    clearButton.addEventListener("click", clearLists);
}

function exe() {
    const todoValue = todoInput.value.trim();
    if (todoValue === "" || todoValue === null) {
        alert("Lütfen boş bırakmayınız!")
    } else {
        todoToUI(todoValue.slice(0, 30));
    }

}

function todoToUI(todoValue) {
    /* <li class="list">
             <div class="li-icon-wrapper"><i class='bx bxs-x-circle'></i><i
                class='bx bx-list-check done'></i></div>
        </li> */
    const li = document.createElement("li");
    li.className = "list";
    li.textContent = todoValue;

    const div = document.createElement("div");
    div.className = "li-icon-wrapper";

    const i = document.createElement("i");
    i.className = "bx bxs-x-circle delete";

    const i2 = document.createElement("i");
    i2.className = "bx bx-list-check done";

    div.appendChild(i);
    div.appendChild(i2);
    li.appendChild(div);
    listWrapper.appendChild(li);
}

function DeleteOrDoneMark(e) {
    const targetclass = e.target.className;
    const targetList = e.target.parentElement.parentElement;
    const targetListColor = window.getComputedStyle(targetList).backgroundColor;
    console.log(targetListColor);

    if (targetclass === "bx bxs-x-circle delete") {
        targetList.remove();
    }

    else if (targetclass === "bx bx-list-check done" && targetListColor === "rgb(255, 255, 255)") {
        console.log(targetListColor);
        e.target.parentElement.parentElement.style.backgroundColor = "green";

    }
    else if (targetListColor === "rgb(0, 128, 0)") {
        e.target.parentElement.parentElement.style.backgroundColor = "white";
    }
    else {
        console.log("?");
    }
}

function clearLists() {
    const lists = Array.from(listWrapper.children);
    lists.forEach((list) => {
        list.remove();
    })
}





















