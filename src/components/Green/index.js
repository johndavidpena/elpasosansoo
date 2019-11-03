import React from 'react';
import { useSpring, animated } from 'react-spring';
import { withAuthorization, withEmailVerification } from '../Session';
import { compose } from 'recompose';

const Green = () => {
  const fade = useSpring({ config: { duration: 950 }, from: { opacity: 0 }, opacity: 1 });

  return (
    <animated.main style={fade}>
      <h1>Green belt curriculum</h1>

      <div className='beltVideo'>
        <h4>Green belt form</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='Green belt form'></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>Green belt #1</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='Green belt #1'></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>Green belt #2</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='Green belt #2'></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>Green belt #3</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='Green belt #3'></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>Green belt #4</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='Green belt #4'></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>Green belt #5</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='Green belt #5'></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>Green belt #6</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='Green belt #6'></iframe>
        </div>
      </div>
    </animated.main>
  );
}

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(Green);
