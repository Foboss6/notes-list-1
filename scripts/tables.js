import { btnDone, btnEdit, btnTrash, btnSave, btnCancel } from "./data.js";
import { handleTableClick } from "./handlers.js";

// create new row for second table
export const addTRToArchiveTable = (data) => {
    let tr = document.createElement("tr");
    tr.id = `${data.cathegory}`;
    tr.innerHTML = 
    `<td>${data.cathegory}</td>
    <td>${data.active}</td>
    <td>${data.archived}</td>`;
    
    document.querySelectorAll("table tbody")[1].appendChild(tr);
}

// create new row for the first table
export const addRowToTable = (data) => {
    let tr = document.createElement("tr");
        
    tr.id = `${data.id}-tr`;
    tr.innerHTML = 
    `<td>${data.cathegory}</td>
    <td>${data.name}</td>
    <td>${data.content}</td>
    <td>${data.created}</td>
    <td>${data.dates}</td>
    <td class="flex-box">${btnDone(data.id)+btnEdit(data.id)+btnTrash(data.id)}</td>`;
    
    document.querySelector("table tbody").appendChild(tr);
}

export const deleteRowFromTable = (id) => {
    document.getElementById(`${id}-tr`).remove();
}

// create a row with inputs for adding new note
export const addTRInput = () => {
    let tr = document.createElement("tr");
    tr.id = `new-tr`;
    tr.innerHTML = 
    `<td>
        <select id="new-cathegory">
            <option>Task</option>
            <option>Random Thought</option>
            <option>Idea</option>
        </select>
    </td>
    <td><input id="new-name" placeholder="Name"></td>
    <td><input id="new-content" placeholder="Content"></td>
    <td></td>
    <td><input id="new-dates" type="date"></td>
    <td class="flex-box">${btnSave("new")+btnCancel("cancel")}</td>`;
    tr.addEventListener("click", handleTableClick);
    
    document.querySelector("table tbody").appendChild(tr);
}
