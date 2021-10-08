import { noteList, addNote, deleteNote } from './scripts/data.js';
import { noteArchive, addArchivedNote } from './scripts/data.js';
import { btnTrash, btnEdit, btnDone, btnSave, btnCancel } from './scripts/data.js';



import { loadDefaultList } from "./scripts/loading.js";
import { handleTableClick } from "./scripts/handlers.js";

loadDefaultList();

document.querySelector("table").addEventListener("click", handleTableClick);