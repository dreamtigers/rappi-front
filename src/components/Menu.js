import React, { Component } from 'react';

import Categories from './Categories';

class Menu extends Component {
  render() {
    return (
      <aside className="menu">
	<Categories />
	<p className="menu-label">
	  Filtros
	</p>
	<ul className="menu-list">
	</ul>
      </aside>
    );
  }
}

export default Menu;
