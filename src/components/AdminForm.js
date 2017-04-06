/**
 * Created by lewa on 30/08/2016.
 */
import React, {Component} from 'react';
import {emailSubject, emailBody, emailGreeting} from '../data/emailSenderDetails';

class AdminForm extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
     <div className="contentRow row">
      <div className="content col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 center">
        <div className="Register" >
        </div>
        <button className="btn btn-default start btn-lg" onClick={this.sendBulkEmailsFromLocalStorage.bind(this)}><span>Send E-mail</span></button>
    </div>
    </div>
    );
  }

  sendBulkEmailsFromLocalStorage() {

  const emails = JSON.parse(localStorage.getItem("ForMailing"));
  var emailTo = "zuhlke.recruit@sameplace.com"
  var emailBulkBody = 'Name; email';

   emails.forEach(function(person) {

   emailBulkBody += escape('\r\n') + person.name + " ; " + person.email;
   });

    window.open("mailto:?bcc="+ emailTo +"&subject="+emailSubject+"&body=" + emailBulkBody);

    }
  }



  export default AdminForm
