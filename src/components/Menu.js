import React, { Component } from 'react';

import Categories from './Categories';
import Filters from './Filters';

class Menu extends Component {
  render() {
    return (
      <aside className="menu">
	<p className="menu-label"> Categorías </p>
	<Categories />
	<p className="menu-label"> Filtros </p>
	<Filters />
      </aside>
    );
  }
}

export default Menu;
