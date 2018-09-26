let nextTodoId = 0
export const addTodo = text => ({
    type: addTodo,
    id: nextTodoId++,
    text
})

export const setVisibilityFilter = filter => ({
    type: setVisibilityFilter,
    filter,
})

export const toggleTodo = id => ({
    type: toggleTodo,
    id
}) 

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
}