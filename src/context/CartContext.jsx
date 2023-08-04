import {createContext,useContext,useEffect,useState} from "react";
import { toast } from 'react-toastify';



const CartContext = createContext();

export const useCart = ()=>{
    return useContext(CartContext)
}

// eslint-disable-next-line react/prop-types
const CartProvider = ({children})=>{
    const [cartItems,setCartItems] = useState([]);
  


    const addToCart = (product)=>{
        setCartItems((prevCartItems) => {
            const existingProduct  = prevCartItems.find((item) => item.id === product.id );
            if(existingProduct){
                return prevCartItems.map((item)=>
                item.id === product.id ? {...item,quantity: item.quantity + 1} : item
                )
            }

            return [...prevCartItems,{...product,quantity: 1}]

        });
        toast.success('Product added to cart!', {
          position: toast.POSITION.TOP_CENTER
        });
    }

    const incrementQuantity = (productId) => {
        setCartItems((prevCartItems) =>
          prevCartItems.map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      };

      const decreaseQuantity = (productId) => {
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.id === productId
              ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
              : item
          )
        );
      };
    
    const removeFromCart = (productId)=>{
        setCartItems((prevCartItems)=> prevCartItems.filter((item)=> item.id !== productId));
        toast.error('Product removed from cart!', {
          position: toast.POSITION.TOP_RIGHT
        }); 

    }

    const removeFromCartAfterCheckout = (productId)=>{
      setCartItems((prevCartItems)=> prevCartItems.filter((item)=> item.id !== productId));

  }


    useEffect(()=>{
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);



    return (
        <CartContext.Provider value={{ cartItems,addToCart,decreaseQuantity,removeFromCart,incrementQuantity,removeFromCartAfterCheckout }}> 
        {children}
        </CartContext.Provider>
    )
}

export default CartProvider;