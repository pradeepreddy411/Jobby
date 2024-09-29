import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <div className="header-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>
      <ul className="list-container">
        <Link to="/" className="list-link">
          <li>Home</li>
        </Link>
        <Link to="/jobs" className="list-link">
          <li>Jobs</li>
        </Link>
      </ul>
      <button className="logout-button" type="button" onClick={onClickLogout}>
        Logout
      </button>
    </div>
  )
}
export default withRouter(Header)
