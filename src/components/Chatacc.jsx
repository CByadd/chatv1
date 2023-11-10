import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';

function Chatacc() {
  return (
    <div className='bg-orange-700  op flex-col  h-max flex m-3 w-full '>
<div className='flex w-full'>
<IconButton>
<AccountCircleIcon fontSize='large'/>
</IconButton>
<div className='flex flex-col '>
<h2>Srinivash</h2>
<p className='text-gray-500'>how</p>
</div>

<h3 className='ol'>9:43 PM</h3>
</div>

{/* ------------------------------------------- */}
<span className=' px-5 flex border-t-8 border-white'>

</span>

{/* ------------------------------------------- */}

<div className='flex w-full  bg-slate-500'>
<IconButton>
<AccountCircleIcon fontSize='large'/>
</IconButton>
<div className='flex flex-col '>
<h2>Srinivash</h2>
<p className='text-gray-500'>how</p>
</div>

<h3 className='ol'>9:43 PM</h3>
</div>

    </div>
  )
}

export default Chatacc