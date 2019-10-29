import React from 'react';
import { useSpring, animated } from 'react-spring';
import { withAuthorization } from '../Session';

const Brown = () => {
  const fade = useSpring({ config: { duration: 950 }, from: { opacity: 0 }, opacity: 1 });

  return (
    <animated.main style={fade}>
      <h1>Brown belt curriculum</h1>

      <div className='beltVideo'>
        <h4>Brown belt form</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='Brown belt form'></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>Brown belt #1</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='Brown belt #1'></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>Brown belt #2</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='Brown belt #2'></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>Brown belt #3</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='Brown belt #3'></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>Brown belt #4</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='Brown belt #4'></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>Brown belt #5</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='Brown belt #5'></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>Brown belt #6</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='Brown belt #6'></iframe>
        </div>
      </div>
    </animated.main>
  );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Brown);
