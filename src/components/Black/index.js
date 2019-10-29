import React from 'react';
import { useSpring, animated } from 'react-spring';
import { withAuthorization } from '../Session';

const Black = () => {
  const fade = useSpring({ config: { duration: 950 }, from: { opacity: 0 }, opacity: 1 });

  return (
    <animated.main style={fade}>
      <h1>Black belt curriculum</h1>

      <div className='beltVideo'>
        <h4>Black belt form</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='Black belt form'></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>Black belt #1</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='Black belt #1'></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>Black belt #2</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='Black belt #2'></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>Black belt #3</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='Black belt #3'></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>Black belt #4</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='Black belt #4'></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>Black belt #5</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='Black belt #5'></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>Black belt #6</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='Black belt #6'></iframe>
        </div>
      </div>
    </animated.main>
  );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Black);
