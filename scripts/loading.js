import { noteList, noteArchive } from "./data.js";
import { addRowToTable, addTRToArchiveTable } from "./tables.js";

export const sortArrayOfObjects = (arr, fieldName) => {
    return arr.sort((a, b) => {
        if(a[fieldName] > b[fieldName]) return 1;
        if(a[fieldName] < b[fieldName]) return -1;
        return 0;
    });
}

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

export const reloadList = () => {
    document.querySelectorAll("tbody tr").forEach(el => el.remove());

    loadDefaultList();
} 