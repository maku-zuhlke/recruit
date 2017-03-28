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

    var person = "{'email':'"+this.state.email+"', 'name':"+this.state.name+"'},";
    localStorage.getItem("ForMailing") === null ? localStorage["ForMailing"] = person :  localStorage.setItem("ForMailing", localStorage.getItem("ForMailing") + person)
    alert('A name was submitted: ' + this.state.email + " " + this.state.name);
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
          <input type="text" value={this.state.email} name="email" onChange={this.handleChange} />
        </label>
        <br/>
          <label>
            Email:
            <input type="text" value={this.state.name} name="name" onChange={this.handleChange} />
          </label>
          <br/>
        <input type="submit" value="Submit" />
      </form>
    </div></div>
    );
  }
}


  export default OfflineRegistrationForm
