import React, { useState } from 'react';
import './navigation.css';
import AddIcon from '@material-ui/icons/Add';
import StarIcon from '@material-ui/icons/Star';
import InboxIcon from '@material-ui/icons/Inbox';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



export default function Navigations() {
  const [seeMore,setseeMore] = useState(false);
  const [seeMoreText,setseeMoreText] = useState('More');
 
  const onseeMoreClick = () =>{
    if(seeMore) {
      setseeMore(false);
      setseeMoreText('More');
    }else{
      setseeMore(true);
      setseeMoreText('Less');
    }
  }

  const onCreateMailClick = () =>{
    alert("HI");
  }
  

  return (
    <div className="navigation">
      <div className="navigation__content">
        <p className="navigation__content-compose" onClick={onCreateMailClick}>
          <span><AddIcon/></span>
          <span>Compose</span>
        </p>
        <p className="navigation__content-others">
          <p className="navigation__content-others-icons"><InboxIcon/></p>
          <p className="navigation__content-others-text">Inbox</p>
          <p className="navigation__content-others-count">1,143</p>
        </p>
        <p className="navigation__content-others">
          <p className="navigation__content-others-icons"><StarIcon/></p>
          <p className="navigation__content-others-text">Starred</p>
        </p>
        <p className="navigation__content-others">
          <p className="navigation__content-others-icons"><QueryBuilderIcon/></p>
          <p className="navigation__content-others-text">Snoozed</p>
        </p>
        <p className="navigation__content-others">
          <p className="navigation__content-others-icons"><SendIcon/></p>
          <p className="navigation__content-others-text">Sent</p>
        </p>
        <p className="navigation__content-others">
          <p className="navigation__content-others-icons"><DraftsIcon/></p>
          <p className="navigation__content-others-text">Drafts</p>
          <p className="navigation__content-others-count">28</p>
        </p>
        <p className="navigation__content-others">
          <p className="navigation__content-others-icons"><ExpandMoreIcon/></p>
          <p className="navigation__content-others-text" onClick={onseeMoreClick}>{seeMoreText}</p>
        </p>
        {seeMore && 
        <>
          <p className="navigation__content-others">
            <p className="navigation__content-others-icons"><InboxIcon/></p>
            <p className="navigation__content-others-text">Inbox</p>
            <p className="navigation__content-others-count">1,143</p>
          </p>
          <p className="navigation__content-others">
            <p className="navigation__content-others-icons"><StarIcon/></p>
            <p className="navigation__content-others-text">Starred</p>
          </p>
          <p className="navigation__content-others">
            <p className="navigation__content-others-icons"><QueryBuilderIcon/></p>
            <p className="navigation__content-others-text">Snoozed</p>
          </p>
          <p className="navigation__content-others">
            <p className="navigation__content-others-icons"><SendIcon/></p>
            <p className="navigation__content-others-text">Sent</p>
          </p>
          <p className="navigation__content-others">
            <p className="navigation__content-others-icons"><DraftsIcon/></p>
            <p className="navigation__content-others-text">Drafts</p>
            <p className="navigation__content-others-count">28</p>
          </p>
        </>
        }
        
      </div>
    </div>
  );
}

