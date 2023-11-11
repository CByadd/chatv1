import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import VideocamIcon from '@mui/icons-material/Videocam';
import SearchIcon from '@mui/icons-material/Search';

function Cbar() {
  return (
    <div className='bg-white w-[100%] h-44 pt-14 cbar '>
       <div className='flex p m-2'>
       <div className='flex'>
       <IconButton>
       <img src="yash.png" width='35px' className="rounded-full h-32 w-32 object-cover" ></img>
       </IconButton>
       <h1 className='mt-2'>Yash</h1>
        </div>



        <div className=' bg-white h-max mr-11 mt-2 px-6'>
       <IconButton>
       <LocalPhoneOutlinedIcon/>
       </IconButton>

       <IconButton>
       <VideocamIcon/>
       </IconButton>

        </div>

  

          </div>
        
    </div>
  )
}

export default Cbar