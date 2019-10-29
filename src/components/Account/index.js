import React from 'react';
import { useSpring, animated } from 'react-spring';
import { AuthUserContext, withAuthorization } from '../Session';
import PasswordChangeForm from '../PasswordChange';

const AccountPage = () => {
  const fade = useSpring({ config: { duration: 950 }, from: { opacity: 0 }, opacity: 1 });

  return (
    <AuthUserContext.Consumer>
      {authUser => (
        <animated.main style={fade}>
          <h2>Account: {authUser.email}</h2>
          <PasswordChangeForm />
        </animated.main>
      )}
    </AuthUserContext.Consumer>
  );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
