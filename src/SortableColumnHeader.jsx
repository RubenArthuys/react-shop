import React, { Component } from 'react';
import './SortableColumnHeader-current.css';

class SortableColumnHeader extends Component {
  state = {  }
  render() { 
    return ( 
      <th>
        {this.props.column}
        <button className="SortableColumnHeader-current">&#x25BC;</button>
        <button>&#x25BC;</button>
      </th>
    );
  }
}
 
export default SortableColumnHeader;