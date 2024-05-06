import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions/actionProduct';
import axios from 'axios';

function AddProduct() {
  const [show, setShow] = useState(false);
const [title,setTitle]=useState("");
const [image,setImage]=useState([]);
const [price,setPrice]=useState(0);
const [description,setDescription]=useState("")
console.log(image.length)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const dispatch=useDispatch()

  const handelSubmit=async()=>{
    const obj=new FormData()
    obj.append("file",image)
    obj.append("upload_preset","ml_default")
    if (image.length===undefined){
      const res=await axios.post("https://api.cloudinary.com/v1_1/djpsbuswk/upload",obj)
           console.log(res)
           dispatch(addProduct({title,image:res.data.url,price,description}))
    }
else {
  dispatch(addProduct({title,image:"https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg",price,description}))

}
setTitle("")
setImage([])
setDescription("")
setPrice(0)
handleClose()
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="ajouter un titre de produit"
                autoFocus
                onChange={(e)=>setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                placeholder="ajouter une image de produit"
                autoFocus
                onChange={(e)=>setImage(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="Number"
                placeholder="ajouter un prix de produit"
                autoFocus
                onChange={(e)=>setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="ajouter une description de produit"
                autoFocus
                onChange={(e)=>setDescription(e.target.value)}
              />
            </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handelSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProduct;