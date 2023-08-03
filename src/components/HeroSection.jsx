import Trad8 from "../assets/Trad8.png"
import "./HeroSection.css"

const HeroSection = () => {
  return (
    <div className="main-div">
      <div className="description">
            <h3>Get the best Native Wear Here at an affordable price</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur a itaque ab aliquam esse temporibus vel voluptatibus dolorem! Laboriosam, quo iure laudantium minus blanditiis fuga neque dicta facere quos debitis!</p>
      </div>
      <img src={Trad8} alt="Native Wear" className="hero-image" />
    </div>
  )
}

export default HeroSection
