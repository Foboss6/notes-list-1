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
        created: "07/10/2021",
        dates: "",
    },
    333: {
        id: 333,
        cathegory: "Idea",
        name: "Project",
        content: "use CSS Grid in my case",
        created: "07/10/2021",
        dates: "08/10/2021",
    }
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
    return `<div class="done btn"><img id="${id}-done" src="/icons/check.svg" alt="done"></div>`;
}

export const btnEdit = (id) => {
    return `<div class="edit btn"><img id="${id}-edit" src="/icons/pencil.svg" alt="edit"></div>`;
}

export const btnTrash = (id) => {
    return `<div class="trash btn"><img id="${id}-trash" src="/icons/trash.svg" alt="delete"></div>`;
}
