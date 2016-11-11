/**
 * Created by lewa on 30/08/2016.
 */
import React, {Component} from 'react';

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


  render() {
    return (
      <div className="center">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSf_wFTp21Be0FtnbChGvHnAjjn42x5BKB7VVZw063clz5Tiaw/viewform?embedded=true"
          width="83%"
          height="70%"
        >Loading...
        </iframe>
      </div>
    );
  }
}
  export default DetailsForm
