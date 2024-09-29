import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showError: false, errorMsg: ''}

  getSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 5})
    history.replace('/')
  }

  getSubmitFailure = errorMsg => this.setState({showError: true, errorMsg})

  onChangeUserName = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.getSubmitSuccess(data.jwt_token)
    } else {
      this.getSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-container">
        <form className="form" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <label className="label" htmlFor="username">
            USERNAME
          </label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            className="input-element"
            value={username}
            onChange={this.onChangeUserName}
          />
          <label className="label" htmlFor="password">
            PASSWORD
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="input-element"
            value={password}
            onChange={this.onChangePassword}
          />
          <button className="login-button" type="submit" data-testid="button">
            Login
          </button>
          {showError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}
export default LoginForm
