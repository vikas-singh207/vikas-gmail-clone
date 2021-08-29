import React from 'react';
import EmailActivities from './EmailActivities';
import EmailInboxNavigation from './EmailInboxNavigation';
import EmailBody from './EmailBody';
import '../style/common.css';


function EmailContent() {
 
  return (
    <div>
      <EmailActivities />
      <hr className="hr1" />
      <EmailInboxNavigation show={true} />
      <hr className="hr1" />
      <div className="emailbodydiv" style={{'height':'100vh','overflow':'scroll'}}>
        <EmailBody/>
      </div>
    </div>
  );
}

export default EmailContent;
