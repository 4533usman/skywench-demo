import React from 'react'
import './Header.css'
import dp from '../../assets/download.jpeg'
import MarkEmailUnreadTwoToneIcon from '@mui/icons-material/MarkEmailUnreadTwoTone';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Header() {
  return (
    <div className='container-md my-3'>
      <div className='row '>
        <div className='col-md-4 m-auto position-relative'>
          <SearchOutlinedIcon className='position-absolute top-0 start-0 searchBarIcon' />
          <input className='input w-100 ' placeholder='Search' />
        </div>
        <div className='col-md-4  m-auto text-center'>
          <h1>skyWench</h1>
        </div>
        <div className='col-md-4  d-flex gap-3 justify-content-md-end justify-content-center m-auto'>
          <div className='icon'><MarkEmailUnreadTwoToneIcon /></div>
          <div className='icon'><NotificationsActiveTwoToneIcon /></div>
          <div className='icon' style={{
            border: 'none', position: "relative", display: " inline-block"
          }}>
            <img className='img' src={dp} alt='...' />
            <p className='dropdown-icon'><ArrowDropDownIcon /></p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Header