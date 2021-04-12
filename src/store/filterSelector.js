export const filterSelector = ({filter}) => filter

export const filteredTodoSelector = ({todos, filter}) => {
    if(filter === null){
        return todos
    }

    return todos.filter(todo => todo.completed === filter)
}