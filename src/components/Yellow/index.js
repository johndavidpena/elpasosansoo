import React from 'react';
import { useSpring, animated } from 'react-spring';
import { withAuthorization, withEmailVerification } from '../Session';
import { compose } from 'recompose';

const Yellow = () => {
  const fade = useSpring({ config: { duration: 950 }, from: { opacity: 0 }, opacity: 1 });

  return (
    <animated.main style={fade}>
      <h1>Yellow belt curriculum</h1>

      <div className='beltVideo'>
        <h4>Yellow belt form</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='Yellow belt form'></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>Yellow belt #1</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='Yellow belt #1'></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>Yellow belt #2</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='Yellow belt #2'></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>Yellow belt #3</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='Yellow belt #3'></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>Yellow belt #4</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='Yellow belt #4'></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>Yellow belt #5</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='Yellow belt #5'></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>Yellow belt #6</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='Yellow belt #6'></iframe>
        </div>
      </div>
    </animated.main>
  );
}

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(Yellow);
