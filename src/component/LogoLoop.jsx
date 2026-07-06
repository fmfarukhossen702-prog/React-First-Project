import React from 'react'
import ScrollVelocity from './ScrollVelocity/ScrollVelocity';

const LogoLoop = () => {
  return (
    <div className='bg-primary text-white'>
      <ScrollVelocity
        texts={[
          "*  Latest Updates  *  New Announcements  *  Workshop Alerts  *  Live Notices  *  Event Countdown  *  Workshop Alerts  "
        ]}
        velocity={100}
        className="custom-scroll-text"
        numCopies={6}
        damping={50}
        stiffness={400}
      />
    </div>
  );
}

export default LogoLoop
