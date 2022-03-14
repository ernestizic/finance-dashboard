import React from 'react'
import { FiSearch } from 'react-icons/fi';
import Tree from "../assets/icons/tree.png"
import Avi from "../assets/icons/avatar.png"
import Bell from "../assets/icons/notification.png"
import Caret from "../assets/icons/caret-down.png"

const Header = ({title}) => {
  return (
    <header>
      <div className='header'>
        <h2>{title}</h2>

        <div className='searchbar-container'>
          <FiSearch className='search-icon'/>
          <input type="search" placeholder='Search'/>
        </div>

        <div className='user-container'>
          <div className='planted'>
            <img src={Tree} alt="tree plated" />
            <p>0 planted</p>
            <img src={Bell} alt="Notification bell"/>
          </div>

          <div className='user-profile'>
            <img src={Avi} alt="user avi" />
            <div className='verification-status'>
              <p style={{color: "#22C55E"}}>Verified</p>
              <p><b>HUSS SMITH</b></p>
            </div>
            <img src={Caret} alt="caret down" />
          </div>

        </div>

      </div>
    </header>
  )
}

export default Header