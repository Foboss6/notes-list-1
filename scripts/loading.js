import { noteList, noteArchive } from "./data.js";
import { addRowToTable, addTRToArchiveTable } from "./tables.js";

export const sortArrayOfObjects = (arr, fieldName) => {
    return arr.sort((a, b) => {
        if(a[fieldName] > b[fieldName]) return 1;
        if(a[fieldName] < b[fieldName]) return -1;
        return 0;
    });
}

// filling tables with notes
// calculate active and achived notes and show its amount in the second table
export const loadDefaultList = () => {
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

// delete all notes from tables, and fill tables with new data
export const reloadList = () => {
    document.querySelectorAll("tbody tr").forEach(el => el.remove());

    loadDefaultList();
} 