import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addtocart } from '../redux/actions/actionProduct';
import { useDispatch } from 'react-redux';
function ProductCart({e}) {
    const [quantity,setQuantity]=useState(0)
    const dispatch=useDispatch()
  return (
    <div>
<Card style={{ width: '18rem' }}>
          <Card.Text>
         publié le : {e.createdAt.slice(0,10)}
        </Card.Text>  
      <Card.Img variant="top" src={e.image} />
      <Card.Body>
        <Card.Title>{e.title}</Card.Title>
        <Card.Text>
          {e.description}
        </Card.Text>
        <Card.Text>
          {e.price}
        </Card.Text>
        <button onClick={()=>setQuantity(quantity+1)}>+</button>
        <span>{quantity}</span> 
        <button onClick={()=>quantity>1?setQuantity(quantity-1):quantity}>-</button>
        <Button variant="primary" onClick={()=>dispatch(addtocart(e,quantity))}>add to cart</Button>
        <Button variant="danger" onClick={()=>dispatch(deleteproduct(e._id))}>Delete</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ProductCart