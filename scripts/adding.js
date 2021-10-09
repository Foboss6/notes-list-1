import { addNote } from "./data.js";
import { handleTableClick } from "./handlers.js";
import { addRowToTable, deleteRowFromTable } from "./tables.js";

// return note, that filling by data from inputs
// if id is define, it means that data goes from edit, if not - from new note
export const configureNote = (id) => {
    const source = id ? "edit" : "new";
    
    let date = new Date();
    let dates = [];
    try {
    dates = [...document.getElementById(source+"-content").value.matchAll(/\d{1,2}\/\d{1,2}\/\d{2,4}/g)];
    } catch (er) {
        if(!er) dates = dates.reduce((prev, cur) => prev + ", " + cur);
        else dates = '';
    }

    return {
        id : id ? id : Date.now(),
        cathegory: document.getElementById(source+"-cathegory").value,
        name: document.getElementById(source+"-name").value,
        content: document.getElementById(source+"-content").value,
        dates: dates,
        created: `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`,
    }
}

// add new note to the List and put it into table
// before adding, check the Content, it must be not empty
// turn off "click handler" on table row and turn it on to whole table
export const addNewNote = () => {
    try {
        if(!document.getElementById("new-content").value) {
            document.getElementById("new-content").placeholder = "Enter some content";
            return;
        }
    } catch (er) {return}

    const note = configureNote();

    addNote(note);

    addRowToTable(note);

    deleteRowFromTable("new");

    // document.querySelectorAll("tr").forEach(el => el.removeEventListener("click", handleTableClick));
    // document.getElementById(`new-tr`).removeEventListener("click", handleTableClick);
    document.querySelectorAll("table")[0].addEventListener("click", handleTableClick);

}