import React,{useState,useEffect} from 'react';
import './emailbody.css';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import axios from '../request/axios';

function EmailBody(){
  const [emailContent, setemailContent] = useState(null);
  const time = '9:27 AM';

  useEffect(() => {
    async function getApiData() {
      let response = await axios.get('comments');
      console.log(response.data);
      setemailContent(response.data);
    }
    getApiData();
  }, []);

  return (
    <>
    { emailContent && emailContent.map((emailtemplate)=>{
        return(
          <div key={emailtemplate.id}>
            <div  className="emailbody">
              <p className="input-checkbox"> 
                <input type="checkbox" className="input-checkbox__checkbox"/>
              </p>
              <p><StarBorderOutlinedIcon className="emailbody__icon"/></p>
              <p className="emailbody__title">{emailtemplate.name}</p>
              <p className="emailbody__body">{emailtemplate.body}</p>
              <p className="emailbody__time">{time}</p>
            </div>
            <hr className="hr1"/>
          </div>
        )
      })
    }
  </>
  )
}

export default EmailBody;