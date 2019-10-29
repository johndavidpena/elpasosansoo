import React from 'react';
import bruce from '../../assets/bruceLeeActionFigure.jpg';
import jimmy from '../../assets/jimmyWoo.jpg';
import paul from '../../assets/paul.jpg';
import { useSpring, animated } from 'react-spring';

const Landing = () => {
  const fade = useSpring({ config: { duration: 950 }, from: { opacity: 0 }, opacity: 1 });

  return (
    <animated.main style={fade} className='landing'>
      <h1>Welcome to El Paso San Soo</h1>
      <h4>Please sign in or sign up if you would like to view the student curriculum.</h4>
      <img src={bruce} alt="Bruce Lee action figure" />
      {/* <img src={jimmy} alt="Jimmy Woo kicks a guy in the chest" /> */}
      {/* <img src={paul} alt="Paul gently holds a small dog" /> */}
      <p className='note'><span>NOTE:</span> This is the landing page. It is accessible to anyone who visits the site. In order to continue, the user MUST sign up or sign in.</p>

    </animated.main>
  );
}

export default Landing;
