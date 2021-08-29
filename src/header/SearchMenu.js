import React from 'react';
import './searchmenu.css';
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';

function SearchMenu(){

  return(
    <div className="searchmenu">
      <p className="searchmenu__searchIcon"><SearchIcon/></p>
      <p>
        <input className="searchmenu__input" type="text" placeholder="Search mail"/>
      </p>
      <p className="searchmenu__tuneIcon"><TuneIcon/></p>
    </div>
  )
}

export default SearchMenu;