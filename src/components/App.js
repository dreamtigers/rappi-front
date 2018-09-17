import React, { Component } from 'react';
import '../assets/App.css';

import Nav from './Nav';
import Categories from './Categories';
import Filters from './Filters';
import Sort from './Sort';
import Products from './Products';
import Cart from './Cart';

import { CartProvider } from './Context';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: {
	id: '',
	available: true,
	not_available: true,
	price_min: '',
	price_max: '',
	stock_min: '',
	stock_max: '',
      },
      sort_func: '',
      cart: {
	products: ['123','234','345']
      }
    }

    this.updateFilters = this.updateFilters.bind(this);
    this.updateSortFunc = this.updateSortFunc.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    let target = document.getElementById(event.target.name);
    target.setAttribute('class', target.className === '' ? 'is-hide' : '');
  }

  updateFilters(name, value) {
    let filters = Object.assign({}, this.state.filters);
    filters[name] = value;
    this.setState({ filters });
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
		  name="categories"
		  onClick={this.handleClick}
		> Categorías </a>
		<br />
		<Categories id={this.state.filters.id}
		  updateFilters={this.updateFilters}
		/>
		<a className="menu-label"
		  name="filters"
		  onClick={this.handleClick}
		> Filtros </a>
		<Filters filters={this.state.filters}
		  updateFilters={this.updateFilters}
		/>
	      </aside>
	    </div>
	    <div className="column">
	      <Sort updateSortFunc={this.updateSortFunc} />
	      <CartProvider>
		<Products filters={this.state.filters}
		  sortFunc={this.state.sort_func}
		/>
		<Cart />
	      </CartProvider>
	    </div>
	  </div>
	</div>
      </div>
    );
  }
}

export default App;
