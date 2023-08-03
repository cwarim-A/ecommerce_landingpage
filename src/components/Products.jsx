
import Trad1 from "../assets/Trad1.jpg"
import Trad2 from "../assets/Trad2.jpg"
import Trad3 from "../assets/Trad3.jpg"
import Trad4 from "../assets/trad4.jpg"
import Trad5 from "../assets/Trad5.jpg"
import Trad6 from "../assets/Trad6.jpg"
import Trad7 from "../assets/Trad7.jpg"
import Trad8 from "../assets/Trad8.png"
import { useCart } from "../context/CartContext"
import Card from "../UI/Card"

import "./Product.css"





const productData = [
  {
   id:1,
   name:"A4 Fashion Men Native Wear California White With 3 Colors Designs B,R,B",
   image:Trad1,
   price: 6500,
  },
  {
   id:2,
   name:"Kulturedman White Danshiki",
   image:Trad2,
   price: 12000,
  },
  {
    id:3,
    name:"Mens Native Wear Three Quarter Sleeved Senator",
    image:Trad3,
    price:15000,
  },
  {
    id:4,
    name:"Senator Wear For Men",
    image:Trad4,
    price:18000,
  },
  {
    id:5,
    name:"Men Senator Native Wear Classy Blue Trad",
    image:Trad5,
    price: 17000
  },
  {
    id:6,
    name:"White Senator Attire",
    image:Trad6,
    price:17000
  },
  {
    id:7,
    name:"DesubClassic Men Native Wear - Wine",
    image:Trad7,
    price: 21500,
  },
  {
    id:8,
    name:"Senator With Class",
    image:Trad8,
    price:17000,
  }
];


// eslint-disable-next-line react/prop-types
const Products = () => {
  
  const { addToCart } = useCart();

  return (
    <div className="products">
        {
          productData.map((product)=>(
            <Card key={product.id}>
              <img src={product.image} className="image"/>
              <h4>{product.name}</h4>
              <h4>₦{product.price}</h4>
              <button className="order-button" onClick={ ()=>addToCart(product)} >Order Now</button>
            </Card>
          ))
        }
    </div>
  )
}

export default Products
