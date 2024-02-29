import Header from '../Header'
import './index.css'

const About = () => (
  <div>
    <Header />
    <div className="about-img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="about-img-styles"
      />
    </div>
  </div>
)

export default About
