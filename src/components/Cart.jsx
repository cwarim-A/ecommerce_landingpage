
import { useState } from "react";
import { useCart } from "../context/CartContext"

import "./Cart.css"
import Checkout from "./Checkout";
import { toast } from 'react-toastify';




const Cart = () => {
    const {cartItems,decreaseQuantity,removeFromCart,incrementQuantity,removeFromCartAfterCheckout} = useCart();
    const [showCheckoutForm, setShowCheckoutForm] = useState(false);

    const getTotalAmount = () => {
      let total = 0;
      cartItems.forEach((item) => {
        total += item.price * item.quantity;
      });
      return total;
    };

    const handleCheckout = ()=>{
      setShowCheckoutForm(false)
      cartItems.forEach((item) => removeFromCartAfterCheckout(item.id));
      toast.success('Check out Complete!', {
        position: toast.POSITION.TOP_CENTER
      });
    }

    const handleCheckoutClick = ()=>{
          setShowCheckoutForm(true);
    }
  

  return (
    <div className="cart-container">
      <h1>Cart({cartItems.length})</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-card">
          <img src={item.image} alt={item.name} />
          <div className="cart-card-content">
            <h3>{item.name}</h3>
            <p>Price:₦{item.price * item.quantity}</p>
          </div>
          <div className="cart-quantity">
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => incrementQuantity(item.id)}>+</button>
            <button className="delete-button" onClick={() => removeFromCart(item.id)}>Delete</button>
          </div>
        </div>
      ))}

      <div className="checkout-card">
        <h3>Total Price:</h3>
        <p>₦{getTotalAmount()}</p>
        <button  onClick={handleCheckoutClick}>Checkout</button>
      </div>

      {showCheckoutForm && <Checkout showCheckoutForm={showCheckoutForm} setShowCheckoutForm={setShowCheckoutForm} totalAmount={getTotalAmount()} onCheckout={handleCheckout}/>}
    </div>
  )
}

export default Cart
