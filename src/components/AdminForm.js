/**
 * Created by lewa on 30/08/2016.
 */
import React, {Component} from 'react';
import {emailSubject} from '../data/emailSenderDetails';
import JSON2CSV from 'json2csv';

class AdminForm extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="contentRow row">
        <div
          className="content col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 center">
          <div className="Register">
          </div>
          <button className="btn btn-default start btn-lg" onClick={this.sendBulkEmailsFromLocalStorage.bind(this)}>
            <span>Send E-mail</span></button>
        </div>
      </div>
    );
  }

  sendBulkEmailsFromLocalStorage() {
    const recruitList = JSON2CSV({ fields: ['name', 'email'], data: JSON.parse(localStorage.getItem("ForMailing")) });
    const theEmail = encodeURI(`mailto:recruitk@somewhere.com?subject=${emailSubject}&body=${recruitList}`);


    window.open(theEmail);
    localStorage.removeItem("ForMailing");

  }
}


export default AdminForm
