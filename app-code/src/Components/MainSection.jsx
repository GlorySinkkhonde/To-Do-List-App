import React from 'react'
import './MainSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faToggleOff } from '@fortawesome/free-solid-svg-icons'

function MainSection() {
  return (
    <div>

      <div className="main__section__header">

        <div className="dark__mode__trigger">

          <h1>
            <FontAwesomeIcon icon={faToggleOff} />
            Dark Mode
          </h1>

        </div>

        <div className="log__out__btn">

          <h1>
             Log Out
            <FontAwesomeIcon icon={faRightFromBracket} />
          </h1>

        </div>

      </div>

      <div className="to__do__section__wrapper">

        <div className="tasks__section">
          <h1>Do It Right Today</h1>

          <input type="text" name="" id="" placeholder='Add New...'/>
        </div>

        <div className="details__section">
          <h1>10 items left to complete</h1>

          <input type="text" name="" id="" placeholder='search tasks' />

          <h1>Filters</h1>
           <li>
            <ul>All</ul>
            <ul>Active</ul>
            <ul>Completed</ul>
           </li>
        </div>

      </div>


        
    </div>
  )
}

export default MainSection