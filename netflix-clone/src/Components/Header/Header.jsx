import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import searchIcon from '../../../public/search_icon.svg'
import bellIcon from '../../../public/bell_icon.svg'
import profileImg from '../../assets/profile_img.png'
import dropDownicon from '../../../public/caret_icon.svg'


const Header = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="Netflix-logo" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse My Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={searchIcon} alt="searchIcon" className='icons'/>
        <p>Children</p>
        <img src={bellIcon} alt="bellIcon" className='icons'/>
        <div className="navbar-profile">
          <img src={profileImg} alt="profile-icon" className='profile'/>
          <img src={dropDownicon} alt="dropDownicon" />
        </div>
      </div>
    </div>
  )
}

export default Header;
