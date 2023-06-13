import './index.css'
import {BiHomeAlt, BiLogIn} from 'react-icons/bi'
import {BsBag} from 'react-icons/bs'
import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="top">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          className="top-logo-pic"
          alt="website logo"
        />
      </Link>

      <ul className="t-second">
        <Link to="/">
          {' '}
          <p>Home</p>
        </Link>
        <Link to="/jobs">
          <p>Jobs</p>
        </Link>
      </ul>
      <div className="t-third">
        <button onClick={onClickLogout}>Logout</button>
      </div>
      <ul className="t-fourth">
        <li>
          <BiHomeAlt />
        </li>
        <li>
          <BsBag />
        </li>
        <li>
          <BiLogIn />
        </li>
      </ul>
    </div>
  )
}

export default withRouter(Header)
