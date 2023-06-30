import React from 'react'
import "./timeline.css"
import { useEffect, useState } from 'react';


const Timeline = () => {

    useEffect(() => {
        const timeline = document.querySelector('.timeline');
        const topChildDivs = document.querySelectorAll('.topTimeline .child');
        const bottomChildDivs = document.querySelectorAll('.bottomTimeline .child');
    
        const totalChildDivs = Math.max(topChildDivs.length, bottomChildDivs.length);
    
        const handleTimelineHover = () => {
          for (let i = 0; i < totalChildDivs; i++) {
            setTimeout(() => {
              if (i < topChildDivs.length) {
                topChildDivs[i].style.opacity = 1;
              }
              if (i < bottomChildDivs.length) {
                bottomChildDivs[i].style.opacity = 1;
              }
            }, i * 2200);
          }
        };
    
        timeline.addEventListener('mouseenter', handleTimelineHover);
    
        return () => {
          timeline.removeEventListener('mouseenter', handleTimelineHover);
        };
      }, []);
    
      return (
<section className=' timeline'>
    <div className='topTimeline'>
<div class="parent">
  <div class="child">    
    <div className='yearTimeline'>
    <h4>2012</h4>  
    </div> 
<div className='pLine'>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam amet fugiat fugit? </p>
  </div>
    <div class="line"></div>
  </div>

</div>
<div class="parent">
  <div class="child">    
    <div className='yearTimeline'>
    <h4>2012</h4>  
    </div> 
<div className='pLine'>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam amet fugiat fugit? </p>
  </div>
    <div class="line"></div>
  </div>

</div>
<div class="parent">
  <div class="child">    
    <div className='yearTimeline'>
    <h4>2012</h4>  
    </div> 
<div className='pLine'>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam amet fugiat fugit? </p>
  </div>
    <div class="line"></div>
  </div>

</div>
<div class="parent">
  <div class="child">    
    <div className='yearTimeline'>
    <h4>2012</h4>  
    </div> 
<div className='pLine'>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam amet fugiat fugit? </p>
  </div>
    <div class="line"></div>
  </div>

</div>
<div class="parent">
  <div class="child">    
    <div className='yearTimeline'>
    <h4>2012</h4>  
    </div> 
<div className='pLine'>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam amet fugiat fugit? </p>
  </div>
    <div class="line"></div>
  </div>

</div>
<div class="parent">
  <div class="child">    
    <div className='yearTimeline'>
    <h4>2012</h4>  
    </div> 
<div className='pLine'>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam amet fugiat fugit? </p>
  </div>
    <div class="line"></div>
  </div>

</div>
    </div>
    <div className='lineTimeline'>

    </div>
    <div className='bottomTimeline'>
    <div class="parent">
  <div class="child">    
    <div className='yearTimeline'>
    <h4>2012</h4>  
    </div> 
<div className='pLine2'>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam amet fugiat fugit? </p>
  </div>

  </div>

</div>
<div class="parent">
  <div class="child">    
    <div className='yearTimeline'>
    <h4>2012</h4>  
    </div> 
<div className='pLine2'>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam amet fugiat fugit? </p>
  </div>
 
  </div>

</div>
<div class="parent">
  <div class="child">    
    <div className='yearTimeline'>
    <h4>2012</h4>  
    </div> 
<div className='pLine2'>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam amet fugiat fugit? </p>
  </div>

  </div>

</div>
<div class="parent">
  <div class="child">    
    <div className='yearTimeline'>
    <h4>2012</h4>  
    </div> 
<div className='pLine2'>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam amet fugiat fugit? </p>
  </div>

  </div>

</div>
<div class="parent">
  <div class="child">    
    <div className='yearTimeline'>
    <h4>2012</h4>  
    </div> 
<div className='pLine2'>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam amet fugiat fugit? </p>
  </div>
 
  </div>

</div>
    </div>
</section>
  )
}

export default Timeline