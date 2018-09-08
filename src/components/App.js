import React, { Component } from 'react';
import '../assets/App.css';

import Nav from './Nav';
import Menu from './Menu';
import Sort from './Sort';

class App extends Component {
  render() {
    return (
      <div className="App">
	<Nav />
	<div className="container">
	  <div className="columns">
	    <div className="column is-3">
	      <Menu />
	    </div>
	    <div className="column is-9">
	      <Sort />
	    </div>
	  </div>
	</div>
      </div>
    );
  }
}

export default App;
