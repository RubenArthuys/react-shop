import React, { Component } from 'react';
import ProductRow from './ProductRow';
import SortableColumnHeader from './SortableColumnHeader';

class ProductTable extends Component {
  state = {  }
  render() { 
    let productsAsArray = Object.keys(this.props.products).map((pid) => this.props.products[pid]);
    let rows = productsAsArray.map((product) => {
      return ( 
        <ProductRow product={product} key={product.id} />
      )
    });
    return ( 
      <table>
        <thead>
          <tr>
            <SortableColumnHeader column="name" />
            <SortableColumnHeader column="price" />
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
     );
  }
}
 
export default ProductTable;