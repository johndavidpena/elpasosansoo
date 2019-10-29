import React, { Component } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const PasswordForgetPage = () => {
  const fade = useSpring({ config: { duration: 950 }, from: { opacity: 0 }, opacity: 1 });

  return (
    <animated.main style={fade}>
      <h1>Password Forget</h1>
      <PasswordForgetForm />
    </animated.main>
  );
}

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase.doPasswordReset(email).then(() => {
      this.setState({ ...INITIAL_STATE });
    })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, error } = this.state;
    const isInvalid = email === '';

    return (
      <React.Fragment>
        <p>Enter your email below if you forgot your password. A password reset email will be sent.</p>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            name="email" value={this.state.email} onChange={this.onChange} type="text" placeholder="Email Address" />
          <button disabled={isInvalid} type="submit">
            Reset My Password
        </button>
          {error && <p>{error.message}</p>}
        </form>
      </React.Fragment>
    );
  }
}

const PasswordForgetLink = () => (
  <p className='forgetLink'>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
