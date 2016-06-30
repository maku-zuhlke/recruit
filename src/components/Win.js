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
          <div className="sp-container"><div className="sp-content">
          <div className="sp-row">
            <span><img src="./images/yeoman.png"/></span>
            <span><img src="./images/yeoman.png"/></span>
            <span><img src="./images/yeoman.png"/></span>
            <span><img src="./images/yeoman.png"/></span>
            <span><img src="./images/yeoman.png"/></span>
          </div>
          <div className="sp-row sp-side-row">
            <span><img src="./images/yeoman.png"/></span>
            <span><img src="./images/yeoman.png"/></span>
          </div>
          <div className="sp-row sp-content-row">
            <h1>Coming Soon</h1>
            <h2>Designer Shoes that you dream of for incredible prices</h2>
            <h1 className="sp-title"><em>Little</em> Blue Shoe</h1>
          </div>
          <div className="sp-row sp-side-row">
            <span><img src="./images/yeoman.png"/></span>
            <span><img src="./images/yeoman.png"/></span>
          </div>
          <div className="sp-row">
            <span><img src="./images/yeoman.png"/></span>
            <span><img src="./images/yeoman.png"/></span>
            <span><img src="./images/yeoman.png"/></span>
            <span><img src="./images/yeoman.png"/></span>
          </div>
          </div></div>
        </ScaleModal>
      </div>
    );
  }
}

export default Win
