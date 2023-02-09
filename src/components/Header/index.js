import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="container">
    <div className="order1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="img"
        alt="wave"
      />
      <h1 className="head">Wave</h1>
    </div>
    <div>
      <ul className="order">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </ul>
    </div>
  </div>
)

export default Header
