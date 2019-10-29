import React from 'react';
import signOutStyles from './signOut.module.css';
import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <span className={signOutStyles.signOut} onClick={firebase.doSignOut}>
    Sign Out
  </span>
);

export default withFirebase(SignOutButton);
