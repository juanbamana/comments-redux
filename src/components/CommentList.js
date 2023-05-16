import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {deleteCommentAction} from '../actions/deleteComment'
export const CommentList = () => {


  const comments = useSelector(state => state.comments.comments)
  return comments.map(comment => <Comment key={comment.id} comment={comment} />
  )
}

function Comment({ comment }) {


  const dispatch = useDispatch()
  const deleteComment = id => dispatch(deleteCommentAction(id))


  return (
    <Card className='mb-3 mt-3'>
      <Card.Body>
        <Card.Title>{comment.name}</Card.Title>
        <Card.Text>{comment.comment}</Card.Text>
        <Button onClick={()=>deleteComment(comment.id)} variant='danger'>Eliminar Comentario</Button>
      </Card.Body>
    </Card>


  )
}