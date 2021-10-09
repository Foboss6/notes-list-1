import { addTRInput, deleteRowFromTable } from "./tables.js";
import { addNewNote } from "./adding.js";
import { deleteNote, noteArchive } from "./data.js";
import { reloadList } from "./loading.js";
import { archiveNote, archiveAllNote } from "./archiving.js";
import { startEdittingNote, cancelEdittingNote, saveEdittingNote } from "./editting.js";
import { noteList } from "./data.js";

// new - create a new note
// save - save new note
// trash - delete selected Note
// deleteall - delete all notes
// done - archive selected note
// doneall - archive all notes
// edit - edit selected note
// cancel - cancel creating a new note or editting selected note
// editsave - save changes of selected note
// 
// when editting or creating a new note is start, turn off "table click handler" to prevent
//      editting (or creating) sevarl notes at once
export const handleTableClick = (event) => {

    const id = event.target.id.split("-")[0];
    switch(event.target.id.split("-")[1]) {
        case "new": 
            document.querySelectorAll("table")[0].removeEventListener("click", handleTableClick);
            addTRInput(); 
            break;
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
        case "edit": 
            document.querySelectorAll("table")[0].removeEventListener("click", handleTableClick);
            startEdittingNote(id); 
            break;
        case "cancel": cancelEdittingNote(); break;
        case "editsave": saveEdittingNote(id); break;
    }
}

export const handleButtonClick = (event) => {
    const tableArchive = document.getElementById("table-archive");
    
    if(tableArchive.style.display === "none") {
        tableArchive.style.display = "table";
        Object.values(noteArchive).forEach(data => {
            let tr = document.createElement("tr");
            
            tr.id = `${data.id}-tr`;
            tr.innerHTML = 
            `<td>${data.cathegory}</td>
            <td>${data.name}</td>
            <td>${data.content}</td>
            <td>${data.created}</td>
            <td>${data.dates}</td>`;
            
            document.querySelector("#table-archive tbody").appendChild(tr);
        });

        document.getElementById("btn-show-archive").innerText = "Hide Archive";
    } else {
        tableArchive.style.display = "none";
        document.querySelectorAll("#table-archive tbody tr").forEach(el => el.remove());

        document.getElementById("btn-show-archive").innerText = "Show Archive";
    }
}