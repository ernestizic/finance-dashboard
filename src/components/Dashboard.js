import React from 'react'
import Sidebar from './Sidebar'

const Dashboard = ({children}) => {
  return (
    <div>
        <Sidebar />
        <div className='main-content'>
            {children}
        </div>
    </div>
  )
}

export default Dashboard