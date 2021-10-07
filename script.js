import { noteList, addNote, deleteNote } from '/data.js';
import { btnTrash, btnEdit, btnDone } from '/data.js';

const loadDefaultList = () => {
    Object.values(noteList).forEach((el) => {
        addRowToTable(el);
    });
}

const addRowToTable = (data) => {
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

const deleteRowFromTable = (id) => {
    document.getElementById(`${id}-tr`).remove();
}

const addTRInput = () => {
    let tr = document.createElement("tr");
    tr.id = `new-tr`;
    tr.innerHTML = 
    `<td>
        <select id="new-cathegory">
            <option>Tasck</option>
            <option>Random Thought</option>
            <option>Idea</option>
        </select>
    </td>
    <td><input id="new-name" placeholder="Name"></td>
    <td><input id="new-content" placeholder="Content"></td>
    <td></td>
    <td><input id="new-dates" placeholder="Dates"></td>
    <td class="flex-box">
        <div class="flex-box">
            <img id="save-save" src="/icons/checklist.svg" alt="save" title="Save">
        </div>
    </td>`;
    
    document.querySelector("table tbody").appendChild(tr);
}

const addNewNote = () => {
    let date = new Date();
    let note = {
        id : Date.now(),
        cathegory: document.getElementById("new-cathegory").value,
        name: document.getElementById("new-name").value,
        content: document.getElementById("new-content").value,
        dates: document.getElementById("new-dates").value,
        creates: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`,
    }

    addNote(note);

    addRowToTable(note);

    deleteRowFromTable("new");
}

const handleTableClick = (event) => {
    const id = event.target.id.split("-")[0];
    switch(event.target.id.split("-")[1]) {
        case "new": addTRInput(); break;
        case "save": addNewNote(); break;
        case "trash": 
            deleteNote(id); 
            deleteRowFromTable(id);
            break;
        case "deleteall":
            Object.values(noteList).forEach((el) => {
                deleteNote(el.id); 
                deleteRowFromTable(el.id);
            });
            break;
    }
}

loadDefaultList();

document.querySelector("table").addEventListener("click", handleTableClick);