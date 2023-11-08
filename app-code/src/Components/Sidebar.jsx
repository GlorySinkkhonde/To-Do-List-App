import React from 'react'
import './Sidebar.css'
import ProfileImage from '../assets/images/profile-img.jpg'

function Sidebar() {
  return (
    <div>

        <div className="sidebar__wrapper">
            
            <section className="profile__section">

                <h1>Your Profile</h1>

                <img src={ProfileImage} alt="profile Picture" className='profile-img' />

                <h2>James Smith</h2>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, est libero, cumque ex alias ad blanditiis iure ut autem nihil et! Nihil quis, reprehenderit atque doloribus autem itaque ab repellendus unde a hic consectetur obcaecati, non nemo neque esse numquam sint praesentium quod voluptate culpa libero adipisci deserunt. Nam, adipisci.</p>

            </section>

            <section className="tags__section">

                <h1>Your Tags</h1>

                <h2 className="tag">Work</h2>
                <h2 className="tag">School</h2>
                <h2 className="tag">Fun</h2>

                <input type="text" name="" id="input__el" placeholder='Add New...' />

                <button className='add__tags-btn'>Add Tag</button>

            </section>

        </div>

    </div>
  )
}

export default Sidebar