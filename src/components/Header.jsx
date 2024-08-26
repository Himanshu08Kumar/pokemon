import React from 'react'
import { useState, useEffect } from 'react'

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
      <button onClick={change}>{backgroundTheme ? "Dark Theme":"Light Theme"}</button>
     
    </>
  )
}

export default Header
