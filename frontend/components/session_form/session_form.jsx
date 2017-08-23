import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.loggedIn) {
      this.props.history.push('/');
    }
    // if(!nextProps.errors){
    //
    // }
  }

  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => {
        this.setState({username: "", email: "", password: ""});
      });
  }

  navLink() {
    if(this.props.formType === 'login'){
      return (
        <div className='login-form-head'>
          <h1>iVidz</h1>
          <br/>
          <h4>Please log in</h4>
          <br/>
          <Link to='/signup'>Sign Up Instead!</Link>
        </div>
      );} else {
      return(
        <div className='login-form-head'>
          <h3>Sign Up</h3>
          <br/>
          <h5>to continue to iVidz</h5>
          <br/>
          <Link to='/login'>Login Instead!</Link>
        </div>
      );
    }
  }

  renderEmail() {
    if(this.props.formType === 'signup'){
      return(
        <label className='field-label'>
          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className='login-field'
            placeholder='Enter your email'
            required
            />
        </label>
      );
    }
  }

  renderErrors() {
    return (
      <ul className='error-list'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return(
      <div className='login-form-container'>
        {this.navLink()}

        <form onSubmit={this.handleSubmit} className='login-form'>
          <br/>
          {this.props.formType === 'signup' &&
            <label className='field-label'>
              Email:
            </label>}
            {this.props.formType === 'signup' &&
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className='login-field'
                placeholder='Enter your email'
                required
                />
            }
          <br/>
          <label className='field-label'>
            Username:
          </label>
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className='login-field'
              placeholder='Enter your username'
              required
              />
          <br/>
          <label className='field-label'>
            Password:
          </label>
            <input type="password"
              placeholder="Enter your password"
              value={this.state.password}
              onChange={this.update('password')}
              className='login-field'
              required
              />
          <br/>
          {this.renderErrors()}
          <br/>
          <input type='submit' value={
              this.props.formType === 'login' ? 'Log In!' : 'Sign Up!'
              }
              className='submit-button'/>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
