import React from 'react';
import homeStyles from './home.module.css';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { withAuthorization } from '../Session';

const HomePage = () => {
  const fade = useSpring({ config: { duration: 950 }, from: { opacity: 0 }, opacity: 1 });

  return (
    <animated.main style={fade}>
      <h1>Student curriculum page.</h1>
      <h4>Please choose your belt.</h4>
      <p className='note'><span className={homeStyles.bold}>NOTE:</span> This is the home page. It is only accessible to users that have signed up and logged in.</p>
      <div className={homeStyles.belts}>
        <Link to={ROUTES.WHITE}>
          <div className={homeStyles.white}>
            <span>white</span>
          </div>
        </Link>
        <Link to={ROUTES.YELLOW}>
          <div className={homeStyles.yellow}>
            <span>yellow</span>
          </div>
        </Link>
        <Link to={ROUTES.GREEN}>
          <div className={homeStyles.green}>
            <span>green</span>
          </div>
        </Link>
        <Link to={ROUTES.BROWN}>
          <div className={homeStyles.brown}>
            <span>brown</span>
          </div>
        </Link>
        <Link to={ROUTES.BLACK}>
          <div className={homeStyles.black}>
            <span>black</span>
          </div>
        </Link>
      </div>
    </animated.main>
  );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
