import React from 'react'
import { Container, Navbar, Button } from 'react-bootstrap'
import  Logo  from '../img/redux.png'



export const Menu = () => {
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

        <Button variant='outline-success'>New Comment</Button>

      </Container>

    </Navbar>
  )
}
