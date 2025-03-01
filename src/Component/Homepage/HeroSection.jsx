import React from 'react'
import SplitText from "./SplitText";

function HeroSection() {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    }
  return (
    <div className=''>
        <SplitText
            text="Dhammadharassa"
            className="text-[8.5vw] font-jakarta font-semibold text-center"
            delay={150}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
        />
        
    </div>
  )
}

export default HeroSection