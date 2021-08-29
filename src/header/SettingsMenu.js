import React from 'react';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import './settingsmenu.css';

function SettingsMenu(){

  return(
    <div className="settingmenu">
      <p className="settindmenu__icons"><HelpOutlineIcon/></p>
      <p className="settindmenu__icons"><SettingsIcon/></p>
      <p className="settindmenu__icons"><ViewComfyIcon/></p>
      <p className="settindmenu__userInitial">
        V
      </p>
    </div>
  )
}

export default SettingsMenu;