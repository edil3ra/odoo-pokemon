export const actions = {
    addTask({state}, title) {
        title = title.trim()
        if (title) {
            const task = {
                id: state.nextId++,
                title: title,
                isCompleted: false,
            }
            state.tasks.push(task)
        }
    },

    toggleTask({state}, id) {
        const task = state.tasks.find(task => task.id === id)
        task.isCompleted = !task.isCompleted
    },

    deleteTask({state}, id) {
        const index = state.tasks.findIndex(task => task.id === id)
        state.tasks.splice(index, 1)
    },
}


export const initialState = {
    nextId: 3,
    tasks: [],
}

