import "./Card.css"

// eslint-disable-next-line react/prop-types
const Card = ({children}) => {
  return (
    <div className="product-card">
      {children}
    </div>
  )
}

export default Card



