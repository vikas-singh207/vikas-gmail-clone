import React from 'react';
import './inboxnavigation';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

function EmailInboxNavigation(show){
  return(
    <>
    {show && 
      <div className="inbox-navigation">
        <div className="inbox-navigation__content">
          <p className="inbox-navigation__content--icon"><InboxIcon/></p>
          <p className="inbox-navigation__content--text">Primary</p>
        </div>
        <div className="inbox-navigation__content">
          <p className="inbox-navigation__content--icon"><PeopleIcon/></p>
          <p className="inbox-navigation__content--text">Social</p>
        </div>
        <div className="inbox-navigation__content">
          <p className="inbox-navigation__content--icon"><LocalOfferIcon/></p>
          <p className="inbox-navigation__content--text">Promotions</p>
        </div>
      </div>
    }
    </>
  )
}

export default EmailInboxNavigation;