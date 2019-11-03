import React from 'react';
import { useSpring, animated } from 'react-spring';
import { withAuthorization, withEmailVerification } from '../Session';
import { compose } from 'recompose';

const White = () => {
  const fade = useSpring({ config: { duration: 950 }, from: { opacity: 0 }, opacity: 1 });

  return (
    <animated.main style={fade}>
      <h1>White belt curriculum</h1>

      <p className='note'><span>NOTE:</span> The cheapest, easiest and most private way to share videos is to upload all of your videos to Youtube.</p>
      <p className='note'>This way, you don't have to pay to store the videos anywhere. Then, you create a playlist on your Youtube channel.</p>
      <p className='note'>Finally, you make that playlist PRIVATE so that nobody can actually watch the videos.</p>
      <p className='note'>The videos get embedded into this site and are only accessible to signed in users on this site.</p>

      <div className='beltVideo'>
        <h4>White belt form</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='White belt form'></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>White belt #1</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='White belt #1'></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>White belt #2</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='White belt #2'></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>White belt #3</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='White belt #3'></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>White belt #4</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='White belt #4'></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>White belt #5</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='White belt #5'></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>White belt #6</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G4gDCFn7Qys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='White belt #6'></iframe>
        </div>
      </div>
    </animated.main>
  );
}

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(White);
