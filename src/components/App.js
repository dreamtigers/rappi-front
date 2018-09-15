import React, { Component } from 'react';
import '../assets/App.css';

import Nav from './Nav';
import Categories from './Categories';
import Filters from './Filters';
import Sort from './Sort';
import Products from './Products';
import Cart from './Cart';

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
      stock_max: '',
      sort_func: ''
    }

    this.updateFilters = this.updateFilters.bind(this);
    this.updateCategories = this.updateCategories.bind(this);
    this.updateSortFunc = this.updateSortFunc.bind(this);
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

  updateSortFunc(sortFunction) {
    this.setState({ sort_func: sortFunction });
  }

  render() {
    return (
      <div className="App">
	<Nav />
	<div className="container">
	  <div className="columns">
	    <div className="column is-one-fifth">
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
	    <div className="column">
	      <Sort updateSortFunc={this.updateSortFunc} />
	      <Products filters={this.state}
		sortFunc={this.state.sort_func}
	      />
	    </div>
	  </div>
	</div>
	<Cart />
      </div>
    );
  }
}

export default App;
