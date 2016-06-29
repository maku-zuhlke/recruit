/**
 * Created by lewa on 27/06/2016.
 */
import React, { Component } from 'react';
import { ScaleModal } from 'boron';

class Win extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {showModal: false}
  }
  
  componentDidMount() {
    this.refs.modal.show();
  }

  render() {
    return (
      <div>
        <ScaleModal ref="modal">
          <div className="col-xs-12">
            <div className="col-xs-3"></div>
            <div className="col-xs-6 center space">!!!!!</div>
            <div className="col-xs-3"></div>
          </div>
        </ScaleModal>
      </div>
    );
  }
}

export default Win
