import React from 'react'
import { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { validationsAction } from '../actions/validationActions'
import { addCommentAction } from '../actions/addCommentAction'
import { openCloseCommentModalAction } from '../actions/modalsActions'

import moment from 'moment'
import { v4 as uuidv4 } from 'uuid';

export const FormAddComment = () => {



    const dispatch = useDispatch()
    const errorValidations = state => dispatch(validationsAction(state))
    const addComment = state => dispatch(addCommentAction(state))
    const closeModal = state => dispatch(openCloseCommentModalAction(state))
    //obtener estado
    const errorFormValue = useSelector(state => state.validations.stateValidations)


    
    const [formValue, setFormValue] = useState({
        name: "",
        comment: ""
    })



    const onChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {

        e.preventDefault()
        const { comment, name } = formValue

        if (!name || !comment) {

            errorValidations(true)
        } else {

            errorValidations(false)
            addComment({
                name,
                comment,
                date: moment(),
                id:uuidv4()
            })
            closeModal(false)

        }
    }




    return (
        <Form onChange={onChange} onSubmit={onSubmit} className='m-3'>
            <Form.Group className='text-center'>
                <h1>Nuevo Comentario</h1>
            </Form.Group>
            <Form.Group>
                <Form.Control type='text' name='name' placeholder='Escribe tu nombre' />
            </Form.Group>
            <Form.Group>
                <Form.Control as='textarea' name='comment' row='3' placeholder='Escribe tu comentario' />
            </Form.Group>

            <Button variant='primary' type='submit'>Enviar Comentario</Button>
            {errorFormValue && (
                <Alert variant='danger' className='mt-4'>Todos los campos son obligatorios</Alert> 
            )}
        </Form>
    )
}
