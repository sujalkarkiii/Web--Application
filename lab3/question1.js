document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.querySelector(".add");
    const removeBtn = document.querySelector(".remove-btn");
    const list = document.querySelector(".list");
    const input = document.querySelector(".input");


    function addItem() {
        const value = input.value.trim();
        if (!value) return;

        const li = document.createElement("li");
        li.textContent = value;
        list.appendChild(li);

        input.value = "";
    }

    function removeItem() {
        if (list.lastElementChild) {
            list.removeChild(list.lastElementChild);
        }
    }

    addBtn.addEventListener("click", addItem);
    removeBtn.addEventListener("click", removeItem);




.0});