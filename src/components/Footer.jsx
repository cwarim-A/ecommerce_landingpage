import { BsWhatsapp,BsInstagram } from "react-icons/bs"
import "./Footer.css"
import {LiaFacebookMessenger} from "react-icons/lia"

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <h1>KARAKATA</h1>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Karakata, Inc.</p>
      </div>
      <div className="social-network">
         <LiaFacebookMessenger size={29} className="messenger"/>
         <BsWhatsapp size={25} className="whatsapp"/>
         <BsInstagram size={25} className="instagram"/>
      </div>
    </div>
  )
}

export default Footer
