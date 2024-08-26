import React from 'react'
import { useState, useEffect } from 'react'
import { FaToggleOn } from 'react-icons/fa'
import { FaToggleOff } from 'react-icons/fa'

const Header = () => {
    const [backgroundTheme, setBackgroundTheme] = useState();

    const change = (e) =>{
        e.preventDefault();
        setBackgroundTheme(!backgroundTheme);
      }
      useEffect(() =>{
        if (backgroundTheme) {
          document.body.classList.add("light-Theme");
          document.body.classList.remove("dark-Theme");
        } else {
          document.body.classList.add("dark-Theme");
          document.body.classList.remove("light-Theme");
        }
      },[backgroundTheme])
    
  return (
    <>
    
      <button onClick={change}>{backgroundTheme ? <FaToggleOn className='toggle'/> : <FaToggleOff className='toggle' style={{color:'white'}}/>}</button>
     
     
    </>
  )
}

export default Header
