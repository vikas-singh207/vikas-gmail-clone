import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import './mainmenu.css';

function MainMenu(){

  return(
    <div className="mainMenu">
      <p className="mainmenu__mainIcon">
        <MenuIcon/>
      </p>
      <p>
        <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png' alt="gmail logo"/>
      </p>
    </div>
  )
}

export default MainMenu;