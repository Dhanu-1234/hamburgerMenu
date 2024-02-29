import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <div className="website-logo-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo-styles"
        />
      </Link>
    </div>
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button
            className="trigger-button"
            aria-label="menu"
            type="button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="icon-styles" />
          </button>
        }
      >
        {close => (
          <div className="popup-content">
            <button
              type="button"
              aria-label="popup close"
              className="popup-close-btn"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose className="icon-styles" />
            </button>
            <ul className="popup-links-container">
              <li>
                <Link to="/" className="link-styles">
                  <AiFillHome className="link-icon-styles" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="link-styles">
                  <BsInfoCircleFill className="link-icon-styles" />
                  About
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </nav>
)

export default Header
