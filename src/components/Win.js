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
      <div className="center col-xs-12"><ScaleModal ref="modal">
          <div className="sp-content container">
            <div className="row sp-row sp-vertical-row">
              <div className="col-xs-3"><span><img src="./images/logo-zuhlke.png"/></span></div>
              <div className="col-xs-3"><span><img src="./images/logo-zuhlke.png"/></span></div>
              <div className="col-xs-3"><span><img src="./images/logo-zuhlke.png"/></span></div>
              <div className="col-xs-3"><span><img src="./images/logo-zuhlke.png"/></span></div>
            </div>
            <div className="row sp-row">
              <div className="sp-side-row col-xs-2 sp-left-row">
                <span><img src="./images/logo-zuhlke.png"/></span>
                <span><img src="./images/logo-zuhlke.png"/></span>
              </div>
              <div className=" sp-content-row col-xs-8">
                <h1>Zuhlke</h1>
              </div>
              <div className="sp-side-row col-xs-2 sp-right-row">
                <span><img src="./images/logo-zuhlke.png"/></span>
                <span><img src="./images/logo-zuhlke.png"/></span>
              </div>
            </div>
            <div className="row sp-row sp-vertical-row">
              <div className="col-xs-3"><span><img src="./images/logo-zuhlke.png"/></span></div>
              <div className="col-xs-3"><span><img src="./images/logo-zuhlke.png"/></span></div>
              <div className="col-xs-3"><span><img src="./images/logo-zuhlke.png"/></span></div>
              <div className="col-xs-3"><span><img src="./images/logo-zuhlke.png"/></span></div>
            </div>
        </div>
      </ScaleModal></div>
    );
  }
}

export default Win
