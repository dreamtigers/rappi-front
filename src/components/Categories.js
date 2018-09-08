import React, { Component } from 'react';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [{id: '1', name:'Cargando...'}],
    };
  }

  // I could fetch the data from an URL or import it locally
  // But I chose to fetch to make it feel... more real?
  componentWillMount() {
    fetch("http://localhost:3000/categories.json")
      .then(response => response.json())
      .then(data => this.setState({ categories: data.categories }));
  }

  render() {
    return (
      <div className="categories">
	<p className="menu-label">
	  Categorías
	</p>
	<ul className="menu-list">
	  <List categories={this.state.categories} />
	</ul>
      </div>
    );
  }
}

class Category extends React.Component {
  render() {
    return (
      <li><a>{this.props.info.name}</a>
	{ // These two lines make sure to render a sublevel only if it exists
	  this.props.info.sublevels &&
	    <List categories={this.props.info.sublevels} />
	}
      </li>
    );
  }
}

class List extends React.Component {
  render() {
    return (
      <ul className="menu-list">
	{ // For every element in the array, return a Category component
	  this.props.categories.map(category => {
	    return <Category key={category.id} info={category} />
	  })
	}
      </ul>
    )
  }
}

export default Categories;
