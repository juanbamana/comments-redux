import React from 'react'
import { Container, Navbar, Button } from 'react-bootstrap'
import  Logo  from '../img/redux.png'
import { useDispatch } from 'react-redux'
import {openCloseCommentModalAction} from '../actions/modalsActions'




export const Menu = () => {

    const dispatch = useDispatch()

    const actionModal = state => dispatch(openCloseCommentModalAction(state))

    const openModal= () =>{

      actionModal(true)
    }


  return (

    <Navbar bg="dark" variant='dark'>
      <Container>

        <Navbar.Brand>

          <img
            alt='Comments'
            src={Logo}
            width='30px'
            height="30px"
            className='d-inline-block align-top mr-4' />


          Comments Simulator Redux
        </Navbar.Brand>

        <Button onClick={openModal} variant='outline-success'>New Comment</Button>

      </Container>

    </Navbar>
  )
}
