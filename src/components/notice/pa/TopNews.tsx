import React from 'react'
import Marquee from "react-fast-marquee";
import Notices from '../Notices';
import Events from '../events/Events';


const TopNews = () => {
  return (
    <div>
      <Marquee className='text-center text-xl text-red-600 font-bold hover:underline'>
  I can be a React component, multiple React components, or just some text.
      </Marquee>
      
      <br />

      <Marquee>
        <Notices />
        <Events />
      </Marquee>
    </div>
  )
}

export default TopNews