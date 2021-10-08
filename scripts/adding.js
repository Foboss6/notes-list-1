import { addNote } from "./data.js";
import { addRowToTable, deleteRowFromTable } from "./tables.js";

export const configureNote = (id) => {
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

export const addNewNote = () => {
    if(!document.getElementById("new-content").value) {
        document.getElementById("new-content").placeholder = "Enter some content";
        return;
    }

    const note = configureNote();

    addNote(note);

    addRowToTable(note);

    deleteRowFromTable("new");
}