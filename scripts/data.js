export let noteList = {
    111: {
        id: 111,
        cathegory: "Task",
        name: "shopping",
        content: "buy: pasta, oil, bread. 11/10/2021",
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
        dates: "",
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
        content: "Clean whole the flat. Start on 10/10/2021",
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
