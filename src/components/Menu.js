import React, { Component } from 'react';

import Categories from './Categories';
import Filters from './Filters';

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(event) {
    let target = document.getElementById(event.target.name);
    target.setAttribute('class', target.className === '' ? 'is-hide' : '');
  }

  render() {
    return (
      <aside className="menu">
	<a
	  className="menu-label"
	  name ="categories"
	  onClick={this.handleClick}
	> Categorías </a>
	<br />
	<Categories />
	<a
	  className="menu-label"
	  name ="filters"
	  onClick={this.handleClick}
	> Filtros </a>
	<Filters />
      </aside>
    );
  }
}

export default Menu;
