import React from 'react'
import Sidebar from '../Components/Sidebar'
import './Account.css'
import MainSection from '../Components/MainSection'

function Account() {
  return (
    <div className='app__wrapper'>

        <div className="sidebar__wrapper">
            <Sidebar />

        </div>
            
        <div className="main__section__wrapper">

            <MainSection />

        </div>

        
        
    </div>
  )
}

export default Account