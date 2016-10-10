// TableHeader.js
import React, { Component } from 'react';


class TableHeader extends Component {
  render () {
    return (
      <div className="Table--header">
        {this.props.title}
      </div>
    );
  }
}

export default TableHeader;
