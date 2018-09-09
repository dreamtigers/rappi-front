import React, { Component } from 'react';

class Filters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      available: true,
      not_available: true,
      price_min: '',
      price_max: '',
      stock_min: '',
      stock_max: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div id="filters">
	<div className="menu-list">
	  <p>Disponibilidad</p>
	  <Available
	    available={this.state.available}
	    not_available={this.state.not_available}
	    handleChange={this.handleChange}
	  />
	  <br />
	  <p>Precio</p>
	  <Range
	    price_min={this.state.price_min}
	    price_max={this.state.price_max}
	    handleChange={this.handleChange}
	  />
	  <br />
	  <p>Cantidad</p>
	  <Quantity
	    stock_min={this.state.stock_min}
	    stock_max={this.state.stock_max}
	    handleChange={this.handleChange}
	  />
	</div>
      </div>
    );
  }
}

class Available extends Component {
  render() {
    return(
      <div className="field">
	<div className="control">
	  <label className="checkbox">
	    <a><input
		checked={this.props.available}
		onChange={this.props.handleChange}
		name="available"
		type="checkbox"
	      /> Disponible</a>
	  </label>
	</div>
	<div className="control">
	  <label className="checkbox">
	    <a>
	      <input
		checked={this.props.not_available}
		onChange={this.props.handleChange}
		name="not_available"
		type="checkbox"
	      /> No Disponible</a>
	  </label>
	</div>
      </div>
    )
  }
}

class Range extends Component {
  render() {
    return(
      <div className="range">
	<div className="field">
	  <p className="control">
	    <input
	      value={this.props.price_min}
	      onChange={this.props.handleChange}
	      name="price_min"
	      className="input"
	      placeholder="desde"
	      type="number"
	    />
	  </p>
	</div>
	<div className="field">
	  <p className="control">
	    <input
	      value={this.props.price_max}
	      onChange={this.props.handleChange}
	      name="price_max"
	      className="input"
	      placeholder="hasta"
	      type="number"
	    />
	  </p>
	</div>
      </div>
    )
  }
}

class Quantity extends Component {
  render() {
    return(
      <div className="quantity">
	<div className="field">
	  <p className="control">
	    <input
	      value={this.props.stock_min}
	      onChange={this.props.handleChange}
	      name="stock_min"
	      className="input"
	      placeholder="desde"
	      type="number"
	    />
	  </p>
	</div>
	<div className="field">
	  <p className="control">
	    <input
	      value={this.props.stock_max}
	      onChange={this.props.handleChange}
	      name="stock_max"
	      className="input"
	      placeholder="hasta"
	      type="number"
	    />
	  </p>
	</div>
      </div>
    )
  }
}

export default Filters;
