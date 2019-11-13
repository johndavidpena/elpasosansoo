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
        <h4>Welcome</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Ickr0zdh_r4" title="White belt welcome" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>

      <div className='beltVideo'>
        <h4>White belt form</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/cDikYcuRwsw" title="White belt form" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>Falls</h4>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/MSMo4i3Uvyw" title="White belt falls" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className='beltVideo'>
        <h4>Forward Hammer Strike</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/b_9LzGva8XY" title="White belt forward hammer strike" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>Jab Cross</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/wvh1NEnZe8g" title="White belt jab cross" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>Hook Punch</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/j_C1160GP-I" title="White belt hook punch" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>Backhand Strike</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/sDAer8kPb3o" title="White belt backhand strike" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>White belt Lesson #1</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/kKMV5YzYAxA" title="White belt lesson #1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>White belt Lesson #2</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/B3KjvEIqABE" title="White belt lesson #2" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>White belt Lesson #3</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/C6ntCthUzY4" title="White belt lesson #3" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>White belt Lesson #4</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/QCY5b1uI_8w" title="White belt lesson #4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>White belt Lesson #5</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/sY1T0jKWudI" title="White belt lesson #5" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
      <div className='beltVideo'>
        <h4>White belt Lesson #6</h4>
        <div className='videoResponsive'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Zsgt-uoVIVk" title="White belt lesson #6" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
