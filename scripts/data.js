export let noteList = {
    111: {
        id: 111,
        cathegory: "Task",
        name: "shopping",
        content: "buy: pasta, oil, bread",
        created: "07/10/2021",
        dates: "11/10/2021",
    },
    222: {
        id: 222,
        cathegory: "Random Thought",
        name: "For me",
        content: "Don't warry, be happy!",
        created: "08/10/2021",
        dates: "",
    },
    333: {
        id: 333,
        cathegory: "Idea",
        name: "Project",
        content: "use CSS Grid in my case",
        created: "06/10/2021",
        dates: "08/10/2021",
    },
    444: {
        id: 444,
        cathegory: "Random Thought",
        name: "",
        content: "If you get 'scared half to death' twice, do you die?",
        created: "07/10/2021",
        dates: "",
    },
    555: {
        id: 555,
        cathegory: "Random Thought",
        name: "",
        content: "Who decided to put \"s\" into lisp?!",
        created: "11/10/2021",
        dates: "",
    },
    666: {
        id: 666,
        cathegory: "Random Thought",
        name: "",
        content: "In order to sleep we first pretend to sleep",
        created: "03/10/2021",
        dates: "",
    },
    777: {
        id: 777,
        cathegory: "Task",
        name: "Cleaning",
        content: "Clean whole the flat",
        created: "09/10/2021",
        dates: "10/10/2021",
    },
}

export const addNote = (note) => {
    noteList = {
        ...noteList,
        [note.id]: note,
    }
}

export const deleteNote = (id) => {
    delete noteList[id];
}

export let noteArchive = {
    123: {
        id: 123,
        cathegory: "Task",
        name: "Project",
        content: "fix 2 bugs",
        created: "07/10/2021",
        dates: "09/10/2021",
    }
}

export const addArchivedNote = (note) => {
    noteArchive = {
        ...noteArchive,
        [note.id]: note,
    }
}

export const btnDone = (id) => {
    return `<div class="done btn"><img id="${id}-done" src="/icons/check.svg" alt="archive" title="Archive"></div>`;
}

export const btnEdit = (id) => {
    return `<div class="edit btn"><img id="${id}-edit" src="/icons/pencil.svg" alt="edit" title="Edit"></div>`;
}

export const btnTrash = (id) => {
    return `<div class="trash btn"><img id="${id}-trash" src="/icons/trash.svg" alt="delete" title="Delete"></div>`;
}

export const btnSave = (id) => {
    return `<div class="save btn"><img id="${id}-save" src="/icons/save.svg" alt="save" title="Save"></div>`;
}

export const btnCancel = (id) => {
    return `<div class="cancel btn"><img id="${id}-cancel" src="/icons/cancel.svg" alt="cancel" title="Cancel"></div>`;
}
