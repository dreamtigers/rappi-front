import React, { Component } from 'react';
import '../assets/App.css';

import Nav from './Nav';
import Categories from './Categories';
import Filters from './Filters';
import Sort from './Sort';
import Products from './Products';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      available: true,
      not_available: true,
      price_min: '',
      price_max: '',
      stock_min: '',
      stock_max: ''
    }

    this.updateFilters = this.updateFilters.bind(this);
    this.updateCategories = this.updateCategories.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    let target = document.getElementById(event.target.name);
    target.setAttribute('class', target.className === '' ? 'is-hide' : '');
  }

  updateFilters(name, value) {
    this.setState({ [name]: value });
  }

  updateCategories(updatedId) {
    this.setState({ id: updatedId });
  }

  render() {
    return (
      <div className="App">
	<Nav />
	<div className="container">
	  <div className="columns">
	    <div className="column is-2">
	      <aside className="menu">
		<a className="menu-label"
		  name ="categories"
		  onClick={this.handleClick}
		> Categorías </a>
		<br />
		<Categories id={this.state.id}
		  updateCategories={this.updateCategories}
		/>
		<a className="menu-label"
		  name ="filters"
		  onClick={this.handleClick}
		> Filtros </a>
		<Filters filters={this.state}
		  updateFilters={this.updateFilters}
		/>
	      </aside>
	    </div>
	    <div className="column is-10">
	      <Sort />
	      <Products filters={this.state} />
	    </div>
	  </div>
	</div>
      </div>
    );
  }
}

export default App;
