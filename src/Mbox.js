import React from 'react'
import Cbar from './components/Cbar'
import Chatr1 from './components/Chatr1'


function Mbox() {
  return (
    <div className='bg-green-600 bg w-[65%] m-3  ml-0'>
        <Cbar/>

      <div class="speech-wrapper">
  <div class="bubble">
    <div class="txt">
      <p class="name">Yash</p>
      <p class="message">Hey, check out this Pure CSS speech bubble...</p>
      <span class="timestamp">10:20 pm</span>
    </div>
    <div class="bubble-arrow"></div>
  </div>
  
  <div class="bubble alt ">
    <div class="txt">
      <p class="name alt">Srini</p>
      <p class="message">Nice... this will work great for my new project.</p>
      <span class="timestamp">10:22 pm</span>
    </div>
    <div class="bubble-arrow alt"></div>
  </div>
</div>
      <div class="speech-wrapper">
  <div class="bubble">
    <div class="txt">
      <p class="name">Yash</p>
      <p class="message">What are you Doing?</p>
      <span class="timestamp">10:20 pm</span>
    </div>
    <div class="bubble-arrow"></div>
  </div>
  
  <div class="bubble alt ">
    <div class="txt">
      <p class="name alt">Srini</p>
      <p class="message">Just coding.</p>
      <span class="timestamp">10:22 pm</span>
    </div>
    <div class="bubble-arrow alt"></div>
  </div>
</div>
        {/* <div className='w-[80px] h-[50px] bg-amber-700 flex ml-[3%] mt-2'>
          Whats up bro
        </div>
        <div className='w-[80px] h-[50px] bg-amber-700 flex ml-[87%] mt-2'>
          Whats up bro
        </div>
        <div className='w-[80px] h-[50px] bg-amber-700 flex ml-[3%] mt-2'>
          Whats up bro
        </div>
        <div className='w-[80px] h-[50px] bg-amber-700 flex ml-[87%] mt-2'>
          Whats up bro
        </div> */}
       <Chatr1/>
    
    </div>
  )
}

export default Mbox