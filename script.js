import { noteList, addNote, deleteNote } from '/data.js';
import { noteArchive, addArchivedNote } from './data.js';
import { btnTrash, btnEdit, btnDone, btnSave, btnCancel } from '/data.js';


const sortArrayOfObjects = (arr, fieldName) => {
    return arr.sort((a, b) => {
        if(a[fieldName] > b[fieldName]) return 1;
        if(a[fieldName] < b[fieldName]) return -1;
        return 0;
    });
}

const loadDefaultList = () => {
    let archiveData = {
        'Task': {
            cathegory: 'Task',
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

    sortArrayOfObjects(Object.values(noteList), 'created').forEach((el) => {
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
    
    document.querySelector("table tbody").appendChild(tr);
}

const configureNote = (id) => {
    const source = id ? "edit" : "new";
    
    let date = new Date();
    const dates = 
        document.getElementById(source+"-dates").value 
            ? document.getElementById(source+"-dates").value.split("-")
            : '';

    return {
        id : id ? id : Date.now(),
        cathegory: document.getElementById(source+"-cathegory").value,
        name: document.getElementById(source+"-name").value,
        content: document.getElementById(source+"-content").value,
        dates: dates ? `${dates[2]}/${dates[1]}/${dates[0]}` : '',
        created: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`,
    }
}

const addNewNote = () => {
    if(!document.getElementById("new-content").value) {
        document.getElementById("new-content").placeholder = "Enter some content";
        return;
    }

    const note = configureNote();

    addNote(note);

    addRowToTable(note);

    deleteRowFromTable("new");
}

const archiveNote = (id) => {
    addArchivedNote(noteList[id]);
    deleteNote(id);
    reloadList();
}

const archiveAllNote = () => {
    Object.values(noteList).forEach((el) => {
        archiveNote(el.id);
    });
    reloadList();
}

const startEdittingNote = (id) => {
    let tr = document.getElementById(`${id}-tr`);
    const badDate = noteList[id].dates.split("/");
    const goodDate  = `${badDate[2]}-${badDate[1]}-${badDate[0]}`;
    console.log(goodDate);
    console.log(tr);
    tr.innerHTML = 
    `<td>
        <select id="edit-cathegory" value="${noteList[id].cathegory}">
            <option>Task</option>
            <option>Random Thought</option>
            <option>Idea</option>
        </select>
    </td>
    <td><input id="edit-name" placeholder="Name" value="${noteList[id].name}"></td>
    <td><input id="edit-content" placeholder="Content" value="${noteList[id].content}"></td>
    <td></td>
    <td><input id="edit-dates" type="date" value="${goodDate}"></td>
    <td class="flex-box">${btnSave(id+"-editsave")+btnCancel(id)}</td>`;
}

const cancelEdittingNote = () => {
    reloadList();
}

const saveEdittingNote = (id) => {
    if(!document.getElementById("edit-content").value) {
        document.getElementById("edit-content").placeholder = "Enter some content";
        return;
    }

    noteList[id] = configureNote(id);

    reloadList();
}

const handleTableClick = (event) => {
    const id = event.target.id.split("-")[0];
    switch(event.target.id.split("-")[1]) {
        case "new": addTRInput(); break;
        case "save": addNewNote(); break;
        case "trash": 
            deleteNote(id); 
            deleteRowFromTable(id);
            reloadList();
            break;
        case "deleteall":
            Object.values(noteList).forEach((el) => {
                deleteNote(el.id); 
                deleteRowFromTable(el.id);
            });
            reloadList();
            break;
        case "done": archiveNote(id); break;
        case "doneall": archiveAllNote(); break;
        case "edit": startEdittingNote(id); break;
        case "cancel": cancelEdittingNote(); break;
        case "editsave": saveEdittingNote(id); break;
    }
}

loadDefaultList();

document.querySelector("table").addEventListener("click", handleTableClick);