import { noteList, deleteNote, addArchivedNote } from "./data.js";
import { reloadList } from "./loading.js";

export const archiveNote = (id) => {
    addArchivedNote(noteList[id]);
    deleteNote(id);
    reloadList();
}

export const archiveAllNote = () => {
    Object.values(noteList).forEach((el) => {
        archiveNote(el.id);
    });
    reloadList();
}