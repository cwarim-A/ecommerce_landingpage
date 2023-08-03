// import Card from "../UI/Card";
import { useCart } from "../context/CartContext"
// import {MdOutlineDeleteOutline} from "react-icons/md"
import "./Cart.css"
import {FaTimes} from "react-icons/fa"



const Cart = () => {
    const {cartItems,decreaseQuantity,removeFromCart,incrementQuantity} = useCart();

    const getTotalAmount = () => {
      let total = 0;
      cartItems.forEach((item) => {
        total += item.price * item.quantity;
      });
      return total;
    };
  

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
        <button>Checkout</button>
      </div>
    </div>
  )
}

export default Cart
