/**
 * Created by lewa on 27/06/2016.
 */
import React, { Component } from 'react';
import { Sortable } from 'react-sortable';
import 'styles/prettify.js';
import $ from 'jquery';

class Block extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const block = this.props.item;
    var text =  $.parseHTML(prettyPrintOne(block.text), false);
    var spans = text.map((item, i) => {
      return <span key={i} className={item.className}>{item.innerHTML}</span>
    });
    return (<pre id={block.id} {...this.props} className="prettyprint btn btn-default code"><code className="prettyprint lang-java">{spans}</code></pre>)
  }
}

var SortableBlock = Sortable(Block);
export default SortableBlock
