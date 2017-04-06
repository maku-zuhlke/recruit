/**
 * Created by lewa on 30/08/2016.
 */
import React, {Component} from 'react';
import {internalRegistration} from '../data/strings';

class OfflineRegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', name: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 handleChange(event) {
this.setState({[event.target.name]: event.target.value});

  }

handleSubmit(event) {

    var person = {
      email: this.state.email,
      name: this.state.name
    };

    var personList = JSON.parse(localStorage.getItem("ForMailing"));
    if(!personList) {
      personList = [];
    }
    personList.push(person);
    localStorage.setItem("ForMailing", JSON.stringify(personList));
   //TODO review this
    {this.getEmailsFromLocalStorage()};

    event.preventDefault();
  }


  render() {
    return (
     <div className="contentRow row">
      <div className="content col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 center">
        <div className="Register" >
          <h1> {internalRegistration} </h1>
        </div>

        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} name="name" onChange={this.handleChange} />
        </label>
        <br/>
          <label>
            Email:
            <input type="text" value={this.state.email} name="email" onChange={this.handleChange} />
          </label>
          <br/>
        <input type="submit" value="Submit" />
      </form>
    </div></div>
    );
  }

}


  export default OfflineRegistrationForm
