/* eslint-disable react/prop-types */
import  { BsCartCheck } from "react-icons/bs"


import "./Header.css"
import { useCart } from "../context/CartContext"




const Header = ({showCart,setShowCart}) => {

  const {cartItems} = useCart();

  const handleIconClick = ()=>{
    setShowCart(true)
  }

  return (
    <div className="header">
      <div className="Logo">
       
        <h1 onClick={()=>setShowCart(false)}>KARA<span>KATA</span></h1>
        </div>
      
            <div className="cart" onClick={handleIconClick}>
                <BsCartCheck size={35}  className="cart-icon"/>
                <span>{cartItems.length}</span>
            </div>
    </div>
  )
}

export default Header
