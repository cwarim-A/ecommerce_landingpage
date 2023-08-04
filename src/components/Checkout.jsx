import {useState} from 'react'
import "./Checkout.css"


// eslint-disable-next-line react/prop-types
const Checkout = ({totalAmount,onCheckout}) => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [address,setAddress] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setName('');
        setEmail('');
        setAddress('');
    
        // Call the onCheckout function to handle successful checkout
        onCheckout();
      };

      
    



  return (
    <div className="checkout-form">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <p>Total Amount: ₦{totalAmount}</p>
        </div>
        <button onClick={onCheckout} type="submit">Place Order</button>
      </form>
    </div>

  )
}

export default Checkout
