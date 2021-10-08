import { addTRInput, deleteRowFromTable } from "./tables.js";
import { addNewNote } from "./adding.js";
import { deleteNote } from "./data.js";
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