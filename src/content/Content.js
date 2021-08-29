import React from 'react';
import Navigations from './Navigations'
import EmailContent from './EmailContent'
import './content.css'

function Content (){

  return(
    <div className="email-content"> 
      <Navigations/>
      <EmailContent/>
    </div>
  )
}

export default Content