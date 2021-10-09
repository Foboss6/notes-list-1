export const btnDone = (id) => {
    return `<div class="done btn"><img id="${id}-done" src="icons/check.svg" alt="archive" title="Archive"></div>`;
}

export const btnEdit = (id) => {
    return `<div class="edit btn"><img id="${id}-edit" src="icons/pencil.svg" alt="edit" title="Edit"></div>`;
}

export const btnTrash = (id) => {
    return `<div class="trash btn"><img id="${id}-trash" src="icons/trash.svg" alt="delete" title="Delete"></div>`;
}

export const btnSave = (id) => {
    return `<div class="save btn"><img id="${id}-save" src="icons/save.svg" alt="save" title="Save"></div>`;
}

export const btnCancel = (id) => {
    return `<div class="cancel btn"><img id="${id}-cancel" src="icons/cancel.svg" alt="cancel" title="Cancel"></div>`;
}