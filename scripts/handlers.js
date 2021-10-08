import { addTRInput, deleteRowFromTable } from "./tables.js";
import { addNewNote } from "./adding.js";
import { deleteNote } from "./data.js";
import { reloadList } from "./loading.js";
import { archiveNote, archiveAllNote } from "./archiving.js";
import { startEdittingNote, cancelEdittingNote, saveEdittingNote } from "./editting.js";
import { noteList } from "./data.js";

export const handleTableClick = (event) => {
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