import React from 'react'
import './style.scss'

const Toggle = () => {
  return (
    <div className="toggle-btn">
        <label htmlFor='checkbox' className=''>
          <input type="checkbox" id='checkbox' />
          <span className='btn'>
            <ion-icon name="bulb-outline"></ion-icon>
          </span>
        </label>
    </div>
  )
}

export default Toggle
