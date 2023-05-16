import React from 'react'
import { Modal as ModalComponent } from 'react-bootstrap'
import {openCloseCommentModalAction} from '../actions/modalsActions'
import { useDispatch, useSelector } from 'react-redux'

export const Modal = ({children}) => {

// dispatch para ejecutar nuestras acciones
    const dispatch = useDispatch()

    const closeModal = state => dispatch(openCloseCommentModalAction(state))

    // useSelector para acceder a un valor en el store
    const isOpenModal = useSelector(state=>state.modals.stateModalAddComment)

    return (
        <ModalComponent

            show={isOpenModal}
            onHide={()=>closeModal(false)}
            size='lg'
            centered
        >{children}</ModalComponent>
    )
}
