import React, { Component } from 'react';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sublevels: [{id: '1', name:'Cargando...'}],
      id: ''
    };

    this.handleClick = this.handleClick.bind(this);
  }

  // I could fetch the data from an URL or import it locally
  // But I chose to fetch to make it feel... more real?
  componentWillMount() {
    fetch("http://localhost:3000/categories.json")
      .then(response => response.json())
    // The original data starts with a 'categories' array, in which every
    // element is an Object, I assigned that array directly to the 'sublevels'
    // variable which in turn belongs to the state of the Categories class.
      .then(data => this.setState({ sublevels: data.categories }));
    // This way, I can map every object of the original array to a Category
    // component, and then it solves itself recursively. This happens in the
    // render function below.
  }

  handleClick(event) {
    event.preventDefault();

    this.setState({ id: event.target.id });
    this.props.updateFilters('id', event.target.id);
  }

  render() {
    return (
      <div id="categories">
	<ul className="menu-list">
	  {this.state.sublevels.map(category => // Map elements to Category components
	    { return <Category
	      key={category.id}
	      info={category} IdGetter={this.handleClick} />
	    }
	  )}
	</ul>
      </div>
    );
  }
}

class Category extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.IdGetter(event);
  }

  render() {
    let component;
    if (this.props.info.sublevels) {
      component = (
	<li>
	  <p>{this.props.info.name}</p>
	  <ul className="menu-list">
	    {this.props.info.sublevels.map(category =>
	      { return <Category key={category.id} info={category} IdGetter={this.handleClick}/> }
	    )}
	  </ul>
	</li>
      );
    } else {
      component = (
	<a id={this.props.info.id} onClick={this.handleClick} >
	  {this.props.info.name}
	</a>
      );
    }

    return component;
  }
}

export default Categories;
