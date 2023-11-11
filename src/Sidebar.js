import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Chatacc from './components/Chatacc';

function Sidebar() {
  return (
    <div className='bg-white  h-max mb-2 flex m-3 w-full sidebar cursor-pointer border-none '>
        {/* ----------------------------------------- */}
        <div className=' h-max' >
          <IconButton> 
          <img src="d.jpg" width='40px' ></img>
          </IconButton>
        </div>
        {/* ----------------------------------------- */}

        <div className=' flex mt-2 pl-2 outline-none border-none r-2 bg-white rounded-sm h-max sbar'>
          <input placeholder='Search' type='text'></input><SearchIcon/>
 
        </div>
        {/* ----------------------------------------- */}
        <div className='m-0 h-max border-none ico'>
          <IconButton>
          <DonutLargeIcon/>
          </IconButton>
          <IconButton>
          <ChatIcon/>
          </IconButton>
          <IconButton>
          <MoreVertIcon/>
          </IconButton>
        </div>
        {/* ----------------------------------------- */}
   

    </div>
  )
}

export default Sidebar