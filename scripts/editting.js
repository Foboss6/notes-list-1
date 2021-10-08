import { noteList } from "./data.js";
import { btnSave, btnCancel } from "./data.js";
import { reloadList } from "./loading.js";
import { configureNote } from "./adding.js";
import { handleTableClick } from "./handlers.js";

export const startEdittingNote = (id) => {
    let tr = document.getElementById(`${id}-tr`);
    const badDate = noteList[id].dates.split("/");
    const goodDate  = `${badDate[2]}-${badDate[1]}-${badDate[0]}`;

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

    tr.addEventListener("click", handleTableClick);
}

export const cancelEdittingNote = () => {
    document.querySelectorAll("tr").forEach(el => el.removeEventListener("click", handleTableClick));
    document.querySelectorAll("table")[0].addEventListener("click", handleTableClick);

    reloadList();
}

export const saveEdittingNote = (id) => {
    if(!document.getElementById("edit-content").value) {
        document.getElementById("edit-content").placeholder = "Enter some content";
        return;
    }

    noteList[id] = configureNote(id);

    document.querySelectorAll("tr").forEach(el => el.removeEventListener("click", handleTableClick));
    document.querySelectorAll("table")[0].addEventListener("click", handleTableClick);


    reloadList();
}