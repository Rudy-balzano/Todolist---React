import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodoAction } from '../store/todoActions'
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button";
import { StepLabel } from '@material-ui/core';

export function AddTodoForm () {

    const dispatch = useDispatch()
    const [label, setLabel] = useState()

    const handleLabelChange = (e) => {
        setLabel(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(addTodoAction(label))
        setLabel("")
        
    }
    return <form onSubmit={handleSubmit}>

        <div class="add">
        

        <TextField  onChange={handleLabelChange} type="text" value={label} label={'Tache'} variant="outlined"/>
        <div class="bAdd">
            <Button  color="primary" onClick={handleSubmit} > Ajouter </Button>
        </div>
        </div>
    </form>
}