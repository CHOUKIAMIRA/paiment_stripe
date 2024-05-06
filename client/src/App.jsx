
import './App.css'
import Productlist from './components/Productlist'
import AddProduct from './components/AddProduct'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Userlist from './components/Userlist'
import { Link, Route, Routes } from 'react-router-dom';
import Header from './components/Navbar';
import Panier from './components/Panier';
import Success from './components/Success';
import Cancel from './components/Cancel';
function App() {

  return (
    <>
    <Header/>
    
    <Routes>
      <Route path="/users" element={<Userlist/>}/>
      <Route path="/products" element={<Productlist/> }/>
    <Route path="/panier" element={<Panier/>}/>
    <Route path="/success" element={<Success/>}/>
    <Route path="/cancel" element={<Cancel/>}/>
    </Routes>
    
      <ToastContainer position='bottom-left'/>
    </>
  )
}

export default App
