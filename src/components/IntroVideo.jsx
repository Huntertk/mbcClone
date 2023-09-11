import React from 'react'
import videoSrc from '../assets/MBA Chai Wala.mp4'


const IntroVideo = () => {
  return (
    <div className='intro'>
        <video src={videoSrc} muted autoPlay loop controlsList='nodownload'>
        </video>
            <div></div>
    </div>
  )
}

export default IntroVideo