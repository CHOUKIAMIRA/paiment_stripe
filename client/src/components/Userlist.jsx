import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { toast } from 'react-toastify';
import { getusers } from '../redux/actions/actionUsers';
function Userlist() {
    const dispatch=useDispatch()
    const msg=useSelector(state=>state.usersreducer.msg)
    useEffect(()=>{
        dispatch(getusers())
      if(msg!==""){
       toast.success(msg,{
        className:"toast-dar"
       }) 
      }
    },[msg])
    const users=useSelector(state=>state.usersreducer.users)
    console.log(users)
  return (
    
    <div>
        {users.map(e=>
        <Card style={{ width: '18rem' }}>
          <Card.Text>
         publié le : {e.createdAt}
        </Card.Text>  
      <Card.Img variant="top" src={e.image} />
      <Card.Body>
        <Card.Title>{e.firstname}{e.lastname}</Card.Title>
        <Card.Text>
          {e.mail}
        </Card.Text>
        <Card.Text>
          {e.phone}
        </Card.Text>
        <Card.Text>
          {e.age}
        </Card.Text>

        <Button variant="danger">Delete</Button>
      </Card.Body>
    </Card>
    )}
    </div>
  )
}

export default Userlist
