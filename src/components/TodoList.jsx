import {connect, useDispatch, useSelector} from 'react-redux'
import React, { useCallback } from 'react'
import { UPDATE_TODO_ACTION } from '../store/todoReducer';
import {todoSelectors} from '../store/todoSelectors'
import { deleteTodoAction, toggleTodoAction } from '../store/todoActions';
import { filteredTodoSelector } from '../store/filterSelector';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'

function TodoItem ({todo, onToggle, onDelete}){
    return <ListItem class="list">
            <div>
            <Checkbox checked={todo.completed} onChange={() => onToggle(todo)} color="primary"/>
            {todo.title}
            </div>
            <Button onClick={() => onDelete(todo)} variant="contained" color="secondary"> Supprimer </Button>
            </ListItem>
}

export function TodoList({todos, onToggle, onDelete}) {

    return <List >
        {todos.map(todo => <TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} key={todo.id} />)}     
    </List>
}


export function TodoListStore (){
    const todos = useSelector(filteredTodoSelector)
    const dispatch = useDispatch()
    const onToggle = useCallback(todo => {
        dispatch(toggleTodoAction(todo))
    }, [])
    const onDelete = useCallback(todo => {
        dispatch(deleteTodoAction(todo))
    }, [])

    return <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete}/>
}
