import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';

function Chatacc() {
  return (
    <div className='bg-none  op flex-col h-full flex m-5 w-full  '>
<IconButton>
<div className='flex w-full bg-slate-500 pb-6 z-10 fg'>
<IconButton>
<img src="yash.png" width='40px'class="rounded-full h-32 w-32 object-cover"></img>
</IconButton>
<div className='flex flex-col jk '>
<h2>Yash</h2>
<p className='text-gray-500'>how</p>
</div>

<h3 className='ol jk pl-8'>9:43 PM</h3>
</div>
</IconButton>

{/* ------------------------------------------- */}
<IconButton>
<div className='flex w-full bg-slate-500 pb-6'>
<IconButton>
<img src="b.jpg" width='40px' ></img>
</IconButton>
<div className='flex flex-col jk '>
<h2>Tharun</h2>
<p className='text-gray-500'>call me</p>
</div>

<h3 className='ol jk'>9:43 PM</h3>
</div>
</IconButton>

{/* ------------------------------------------- */}
<IconButton>
<div className='flex w-full bg-slate-500 pb-6'>
<IconButton>
<img src="c.jpg" width='40px' ></img>
</IconButton>
<div className='flex flex-col jk '>
<h2>Thiru</h2>
<p className='text-gray-500'>Send the notes</p>
</div>

<h3 className='ol jk'>9:43 PM</h3>
</div>
</IconButton>

{/* ------------------------------------------- */}
<IconButton>
<div className='flex w-full bg-slate-500 pb-6'>
<IconButton>
<img src="z.jpg" width='40px' ></img>
</IconButton>
<div className='flex flex-col jk '>
<h2>CB</h2>
<p className='text-gray-500'>process one completed</p>
</div>

<h3 className='ol jk'>9:43 PM</h3>
</div>
</IconButton>

{/* ------------------------------------------- */}
<IconButton>
<div className='flex w-full bg-slate-500 pb-6'>
<IconButton>
<img src="e.jpg" width='40px' ></img>
</IconButton>
<div className='flex flex-col jk '>
<h2>Mr.Nobody</h2>
<p className='text-gray-500'>new mission</p>
</div>

<h3 className='ol jk'>9:43 PM</h3>
</div>
</IconButton>

{/* ------------------------------------------- */}


    </div>
  )
}

export default Chatacc