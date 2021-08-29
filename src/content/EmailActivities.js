import React from 'react';
import './emailactivities.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Pagination from './Pagination';

function EmailActivities() {
  return (
      <div className="emailactivities">
        <div className="emailcheckbox">
          <p className="input-checkbox"> 
            <input type="checkbox" className="input-checkbox__checkbox"/>
          </p>
          <p><ArrowDropDownIcon/></p>
        </div>
        <div className="refresh-moreicon">
          <p className="refreshicon"><RefreshIcon/></p>
          <p className="moreicon"><MoreVertIcon/></p>
        </div>
        <Pagination total={'13,386'} pageSize={50}/>
      </div>
  );
}

export default EmailActivities;
