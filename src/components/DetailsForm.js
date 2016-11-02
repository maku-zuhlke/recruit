/**
 * Created by lewa on 30/08/2016.
 */
import React, { Component } from 'react';

class DetailsForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {name: "", email: "", university: "", graduation: ""};
  }

  handleChange(event) {
    var updateState = {};
    updateState[event.target.id] = event.target.value;
    this.setState(updateState);
  }

  register() {
  }

  render() {
    return(
      <div className="center">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf_wFTp21Be0FtnbChGvHnAjjn42x5BKB7VVZw063clz5Tiaw/viewform?embedded=true"
              height="800"
              width="775"
              frameborder="0"
              marginheight="0"
              marginwidth="0">Loading...</iframe>
        </div>
    );
    // return (
    //   <div className="details">
    //     <div className="contentRow row">
    //       <div className="content col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 center">
    //         <div className="fields">
    //           <div className="row">
    //             <div className="col-xs-3">
    //               <label htmlFor="name">Name</label>
    //             </div>
    //             <div className="col-xs-9">
    //               <input className="field" id="name" type="text" value={this.state.name} onChange={this.handleChange.bind(this)}/>
    //             </div>
    //           </div>
    //           <div className="row">
    //             <div className="col-xs-3">
    //               <label htmlFor="email">Email</label>
    //             </div>
    //             <div className="col-xs-9">
    //               <input className="field" id="email" type="email" value={this.state.email} onChange={this.handleChange.bind(this)}/>
    //             </div>
    //           </div>
    //           <div className="row">
    //             <div className="col-xs-3">
    //               <label htmlFor="university">University</label>
    //             </div>
    //             <div className="col-xs-9">
    //               <input className="field" id="university" type="text" value={this.state.university} onChange={this.handleChange.bind(this)}/>
    //             </div>
    //           </div>
    //           <div className="row">
    //             <div className="col-xs-3">
    //               <label htmlFor="graduation">Graduation year</label>
    //             </div>
    //             <div className="col-xs-9">
    //               <input className="field" id="graduation" type="text" value={this.state.graduation} onChange={this.handleChange.bind(this)}/>
    //             </div>
    //           </div>
    //           <div className="row">
    //             <div className="col-xs-offset-7 col-xs-4 col-sm-offset-8 col-sm-3 col-md-offset-9 col-md-2 col-lg-offset-10 col-lg-1">
    //               <input className="btn btn-default done" type="button" value="Register" onClick={this.register.bind(this)}/>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}

export default DetailsForm
