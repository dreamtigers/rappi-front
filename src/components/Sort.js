import React, { Component } from 'react';

class Sort extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reverse: false,
    }

    this.updateSortFunc = this.updateSortFunc.bind(this);
  }

  // Auxiliar function to make sorting objects by field easier
  // @args:
  // field: the field of the object that we want to use
  // reverse: a boolean so we know if we're sorting in asc or desc order
  // newType: Sorting results can vary depending on type, this arg sets a
  // specific type.
  // p.e. products.sort(sortFunc('price', true, Number))
  // This sorts products by product.price in reverse order and as Number
  // @returns:
  // sortingFunc: The function that we'll use to sort
  sortFunc(field, reverse, newType) {
    var key = newType ?
      function(x) {
	if (typeof(x[field]) === 'string') {
	  return newType(x[field].replace(/[^0-9\.-]+/g,""));
	} else {
	  return newType(x[field])
	}
      } : function(x) {return x[field]};

    reverse = !reverse ? 1 : -1;

    return function(a, b) {
      a = key(a);
      b = key(b);
      return reverse * ((a > b) - (b > a));
    }

  }

  updateSortFunc(event) {
    let field = event.target.name;
    let reverse = this.state.reverse;
    // If we're gonna sort by availability we want the type to be bool, because
    // that's the type of the field (i.e. typeof(product.available) -> Bool)
    let type = field === 'available' ? Boolean : Number;

    this.setState(prevState => ({
      reverse: !prevState.reverse
    }));

    this.props.updateSortFunc(this.sortFunc(field, reverse, type));
  }

  render() {
    return (
      <div className="field is-grouped">
	<p className="control">Ordenar por: </p>
	<p className="control">
	  <a className="button is-small"
	    name="price"
	    onClick={this.updateSortFunc}
	  >
	    Precio
	  </a>
	</p>
	<p className="control">
	  <a className="button is-small"
	    name="available"
	    onClick={this.updateSortFunc}
	  >
	    Disponibilidad
	  </a>
	</p>
	<p className="control">
	  <a className="button is-small"
	    name="quantity"
	    onClick={this.updateSortFunc}
	  >
	    Cantidad
	  </a>
	</p>
      </div>
    );
  }
}

export default Sort;
