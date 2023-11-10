import React from 'react'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicNoneIcon from '@mui/icons-material/MicNone';
import { IconButton } from '@mui/material';

function Chatr1() {
  return (
    <div className='bg-violet-600 w-full h-full flex'>
        <div className='bg-black h-max'>
        </div>
        
        <div className='ab '>
            <div className='flex m '>
                <div className=''>

<IconButton>
<SentimentSatisfiedAltIcon/>

</IconButton>
<IconButton>

<AttachFileIcon/>
</IconButton>
                </div>
                
<div className='mt-2  bg-white h-max srd'>
<input type='text' placeholder='Type a Message' className=' hlo w-full outline-none'></input>

</div>

               
<div className='pr- mt-0'>
<IconButton>
<MicNoneIcon/>
</IconButton>
</div>
            </div>
        </div>

        </div>
  )
}

export default Chatr1