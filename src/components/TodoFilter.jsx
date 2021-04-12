import { connect } from "react-redux"
import React from 'react'
import { setFilterAction } from "../store/filterActions"
import { filterSelector } from "../store/filterSelector"
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

export function TodoFilter({value,onChange}) {
    return <div>
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group" class='bgroup'>
            <Button disabled={ value === null} onClick= {() => onChange(null)}>Aucun filtre</Button>
            <Button disabled={ value === true} onClick={() => onChange(true)}>Complété</Button>
            <Button disabled={ value === false} onClick={() => onChange(false)}>A faire</Button>
        </ButtonGroup>
    </div>
}

export const TodoFilterStore = connect(
    state => ({
        value: filterSelector(state)
    }),
    dispatch => ({
        onChange: (value) => dispatch(setFilterAction(value))
    })
)(TodoFilter)