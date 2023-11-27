import React from 'react'
import './MainSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faToggleOff } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faSliders } from '@fortawesome/free-solid-svg-icons'

function MainSection() {
  return (
    <div>

      <div className="main__section__header">
        

        <div className="dark__mode__trigger">

          <h2>
            <span className='dark__mode__icon'><FontAwesomeIcon icon={faToggleOff} /></span>
            <span className='dark__mode__text'> Dark Mode</span>
          </h2>

        </div>

        <div className="log__out__btn">

          <h2>

            <span className='log__out__text'>Log Out</span>
            <span className='log__out__icon'> <FontAwesomeIcon icon={faRightFromBracket} /></span>

          </h2>

        </div>

      </div>

      <div className="to__do__section__wrapper">

        <div className="tasks__section">
          <h1>Do It Right Today</h1>

          <input 
            type="text" 
            name="" 
            id="" 
            placeholder='Add New...'
          />

          <div className="tasks__display__section">

            <div className="task">

              <input 
                type="checkbox" 
                name="" 
                id="" 
              />

              <span>Code using JavaScript</span>

            </div>

            <div className="task__options">

              <span><FontAwesomeIcon icon={faTrash} /></span>
              <span><FontAwesomeIcon icon={faPen} /></span>

            </div>

          </div>
          <div className="divider"></div>

          <div className="tasks__display__section">

            <div className="task">

              <input 
                type="checkbox" 
                name="" 
                id="" 
              />

              <span>Code using JavaScript</span>

            </div>

            <div className="task__options">

              <span><FontAwesomeIcon icon={faTrash} /></span>
              <span><FontAwesomeIcon icon={faPen} /></span>

            </div>

          </div>
          <div className="divider"></div>

        </div>

        <div className="details__section">
          <h1>10 items left to complete</h1>

          <input type="text" name="" id="" placeholder='search tasks' />

          <h1>Filters <span><FontAwesomeIcon icon={faSliders} /></span></h1>

          <div className="filters">

            <input 
              type="checkbox" 
              name="all" 
              id="all" 
            />
            <label htmlFor="all">All</label>

            <br />

            <input 
              type="checkbox" 
              name="active" 
              id="active" 
            />
            <label htmlFor="active">Active</label>

            <br />

          <input 
              type="checkbox" 
              name="completed" 
              id="completed" 
          />
          <label htmlFor="completed">Completed</label>
        
          </div>

        </div>

      </div>


        
    </div>
  )
}

export default MainSection