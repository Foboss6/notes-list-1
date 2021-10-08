import { noteList, addNote, deleteNote } from '/data.js';
import { noteArchive, addArchivedNote } from './data.js';
import { btnTrash, btnEdit, btnDone } from '/data.js';

const loadDefaultList = () => {
    let archiveData = {
        'Task': {
            cathegory: 'Tasck',
            active: 0,
            archived: 0,
        },
        'Random Thought': {
            cathegory: 'Random Thought',
            active: 0,
            archived: 0,
        },
        'Idea': {
            cathegory: 'Idea',
            active: 0,
            archived: 0,
        },
    };

    Object.values(noteList).forEach((el) => {
        addRowToTable(el);
        archiveData[el.cathegory].active++;
    });

    Object.values(noteArchive).forEach((el) => {
        archiveData[el.cathegory].archived++;
    });

    Object.values(archiveData).forEach((el) => {
        addTRToArchiveTable(el);
    });
}

const reloadList = () => {
    document.querySelectorAll("tbody tr").forEach(el => el.remove());

    loadDefaultList();
} 

const addTRToArchiveTable = (data) => {
    let tr = document.createElement("tr");
    tr.id = `${data.cathegory}`;
    tr.innerHTML = 
    `<td>${data.cathegory}</td>
    <td>${data.active}</td>
    <td>${data.archived}</td>`;
    
    document.querySelectorAll("table tbody")[1].appendChild(tr);
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
    <td><input id="new-dates" type="date"></td>
    <td class="flex-box">
        <div class="flex-box save btn">
            <img id="save-save" src="/icons/checklist.svg" alt="save" title="Save">
        </div>
    </td>`;
    
    document.querySelector("table tbody").appendChild(tr);
}

const addNewNote = () => {
    if(!document.getElementById("new-content").value) {
        document.getElementById("new-content").placeholder = "Enter some content";
        return;
    }
    
    let date = new Date();
    const dates = 
        document.getElementById("new-dates").value 
            ? document.getElementById("new-dates").value.split("-")
            : '';
    const note = {
        id : Date.now(),
        cathegory: document.getElementById("new-cathegory").value,
        name: document.getElementById("new-name").value,
        content: document.getElementById("new-content").value,
        dates: dates ? `${dates[2]}/${dates[1]}/${dates[0]}` : '',
        created: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`,
    }

    addNote(note);

    addRowToTable(note);

    deleteRowFromTable("new");
}

const archiveNote = (id) => {
    addArchivedNote(noteList[id]);
    deleteNote(id);
    reloadList();
}

const handleTableClick = (event) => {
    const id = event.target.id.split("-")[0];
    console.log(id);
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
        case "done": archiveNote(id);
    }
}

loadDefaultList();

document.querySelector("table").addEventListener("click", handleTableClick);