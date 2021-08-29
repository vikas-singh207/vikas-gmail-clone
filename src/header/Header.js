import React from 'react';
import MainMenu from './MainMenu';
import SearchMenu from './SearchMenu';
import SettingsMenu from './SettingsMenu';
import './header.css';


function Header(){

  return(
    <>
      <div className="header">
        <MainMenu/>
        <SearchMenu/>
        <SettingsMenu/>
      </div>
      <hr/>
     </>
     
  )

}
export default Header;