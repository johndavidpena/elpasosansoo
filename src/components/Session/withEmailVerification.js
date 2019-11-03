import React from 'react';
import emailStyles from './emailVer.module.css';
import AuthUserContext from './context';
import { withFirebase } from '../Firebase';

const needsEmailVerification = authUser =>
  authUser &&
  !authUser.emailVerified &&
  authUser.providerData
    .map(provider => provider.providerId)
    .includes('password');

const withEmailVerification = Component => {
  class WithEmailVerification extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isSent: false };
    }

    onSendEmailVerification = () => {
      this.props.firebase
        .doSendEmailVerification()
        .then(() => this.setState({ isSent: true }));
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser =>
            needsEmailVerification(authUser) ? (
              <main>
                {this.state.isSent ? (
                  <p>
                    E-Mail confirmation sent: Check your email (Spam
                    folder included) for a confirmation email.
                    Refresh this page once you've confirmed your email.</p>
                ) : (
                    <p>Verify your email: Check you email (Spam folder
                    included) for a confirmation email or send
                    another confirmation email.</p>
                  )
                }
                <button
                  type="button" onClick={this.onSendEmailVerification} disabled={this.state.isSent} className={emailStyles.button}
                >
                  Send confirmation email
                </button>
              </main>
            ) : (
                <Component {...this.props} />
              )
          }
        </AuthUserContext.Consumer>
      );
    }
  }
  return withFirebase(WithEmailVerification);
};

export default withEmailVerification;
